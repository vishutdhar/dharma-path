'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Flame,
  BookOpen,
  Bookmark,
  Calendar,
  Award,
  RotateCcw,
  Cloud,
  CloudOff,
  LogOut,
  RefreshCw,
  User,
  Mail,
  Lock,
  Sun,
  Moon,
  Monitor,
  Heart,
  X
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import ProgressRing from '@/components/ProgressRing';
import { curriculum, getLessonCount } from '@/data/curriculum';
import { getProgress, getDaysSinceStart, resetProgress, UserProgress } from '@/lib/progress';
import { useAuth } from '@/lib/auth';
import { useTheme } from '@/lib/theme';
import { supabase, EmailSubscription, isSupabaseConfigured } from '@/lib/supabase';
import { TOTAL_DAYS } from '@/lib/emailContent';

export default function ProfilePage() {
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState<string | null>(null);
  const [authLoading, setAuthLoading] = useState(false);

  const { user, loading, signInWithEmail, signUpWithEmail, signOut, syncProgress, clearCloudProgress, isSyncing } = useAuth();
  const { theme, setTheme } = useTheme();

  // Email subscription state
  const [emailSubscription, setEmailSubscription] = useState<EmailSubscription | null>(null);
  const [isLoadingSubscription, setIsLoadingSubscription] = useState(false);
  const [isUpdatingSubscription, setIsUpdatingSubscription] = useState(false);

  // UPI donation modal
  const [showUPIModal, setShowUPIModal] = useState(false);

  useEffect(() => {
    const userProgress = getProgress();
    setProgress(userProgress);
  }, []);

  // Fetch email subscription when user is logged in
  useEffect(() => {
    async function fetchEmailSubscription() {
      if (!user || !isSupabaseConfigured) {
        setEmailSubscription(null);
        return;
      }

      setIsLoadingSubscription(true);
      try {
        const { data, error } = await supabase
          .from('email_subscriptions')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (error && error.code !== 'PGRST116') {
          console.error('Error fetching email subscription:', error);
        }

        setEmailSubscription(data);
      } catch (error) {
        console.error('Error fetching email subscription:', error);
      } finally {
        setIsLoadingSubscription(false);
      }
    }

    fetchEmailSubscription();
  }, [user]);

  // Toggle email subscription
  const toggleEmailSubscription = async () => {
    if (!user || !emailSubscription) return;

    setIsUpdatingSubscription(true);
    try {
      const newSubscribed = !emailSubscription.subscribed;
      const { error } = await supabase
        .from('email_subscriptions')
        .update({
          subscribed: newSubscribed,
          unsubscribed_at: newSubscribed ? null : new Date().toISOString(),
        })
        .eq('user_id', user.id);

      if (error) {
        console.error('Error toggling subscription:', error);
        alert('Failed to update subscription. Please try again.');
        return;
      }

      setEmailSubscription({
        ...emailSubscription,
        subscribed: newSubscribed,
        unsubscribed_at: newSubscribed ? null : new Date().toISOString(),
      });
    } finally {
      setIsUpdatingSubscription(false);
    }
  };

  // Create email subscription for existing users
  const createEmailSubscription = async () => {
    if (!user) return;

    setIsUpdatingSubscription(true);
    try {
      const { data, error } = await supabase
        .from('email_subscriptions')
        .insert({
          user_id: user.id,
          email: user.email,
          subscribed: true,
          current_day: 1,
        })
        .select()
        .single();

      if (error) {
        console.error('Error creating subscription:', error);
        alert('Failed to subscribe. Please try again.');
        return;
      }

      setEmailSubscription(data);
    } finally {
      setIsUpdatingSubscription(false);
    }
  };

  // Restart email journey from day 1
  const restartEmailJourney = async () => {
    if (!user || !emailSubscription) return;

    if (!confirm('This will restart your daily email journey from Day 1. Continue?')) {
      return;
    }

    setIsUpdatingSubscription(true);
    try {
      const { error } = await supabase
        .from('email_subscriptions')
        .update({
          current_day: 1,
          subscribed: true,
          last_sent_at: null,
          unsubscribed_at: null,
        })
        .eq('user_id', user.id);

      if (error) {
        console.error('Error restarting journey:', error);
        alert('Failed to restart journey. Please try again.');
        return;
      }

      setEmailSubscription({
        ...emailSubscription,
        current_day: 1,
        subscribed: true,
        last_sent_at: null,
        unsubscribed_at: null,
      });
    } finally {
      setIsUpdatingSubscription(false);
    }
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    setAuthLoading(true);

    try {
      const { error } = isSignUp
        ? await signUpWithEmail(email, password)
        : await signInWithEmail(email, password);

      if (error) {
        setAuthError(error.message);
      } else {
        if (isSignUp) {
          // Keep form visible to show the confirmation message
          setAuthError('Check your email to confirm your account!');
          setPassword('');
        } else {
          // Sign in successful - hide form
          setShowAuthForm(false);
          setEmail('');
          setPassword('');
        }
      }
    } catch {
      setAuthError('Something went wrong. Please try again.');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
  };

  const totalLessons = curriculum.reduce((acc, level) => acc + getLessonCount(level), 0);
  const completedLessons = progress?.completedLessons.length || 0;
  const overallProgress = Math.round((completedLessons / totalLessons) * 100);

  const [isResetting, setIsResetting] = useState(false);

  const handleReset = async () => {
    const message = user
      ? 'Are you sure you want to reset ALL progress? This will clear both local and cloud data. This cannot be undone.'
      : 'Are you sure you want to reset all progress? This cannot be undone.';

    if (confirm(message)) {
      setIsResetting(true);

      // Clear cloud data first if logged in
      if (user) {
        const cloudCleared = await clearCloudProgress();
        if (!cloudCleared) {
          alert('Failed to clear cloud data. Please try again.');
          setIsResetting(false);
          return;
        }
      }

      // Clear local storage
      resetProgress();

      // Reload page to reflect changes
      window.location.reload();
    }
  };

  const stats = [
    {
      icon: Calendar,
      label: 'Days Learning',
      value: getDaysSinceStart(),
      color: 'text-blue-500',
      bg: 'bg-blue-50',
    },
    {
      icon: Flame,
      label: 'Current Streak',
      value: `${progress?.streak || 1} days`,
      color: 'text-orange-500',
      bg: 'bg-orange-50',
    },
    {
      icon: BookOpen,
      label: 'Lessons Complete',
      value: completedLessons,
      color: 'text-green-500',
      bg: 'bg-green-50',
    },
    {
      icon: Bookmark,
      label: 'Saved Verses',
      value: progress?.bookmarks.length || 0,
      color: 'text-purple-500',
      bg: 'bg-purple-50',
    },
  ];

  // Achievements
  const achievements = [
    {
      id: 'first-step',
      title: 'First Step',
      description: 'Complete your first lesson',
      earned: completedLessons >= 1,
      icon: '🎯',
    },
    {
      id: 'foundation',
      title: 'Foundation Builder',
      description: 'Complete Level 1',
      earned: (progress?.completedLessons.filter(id => id.startsWith('1-')).length || 0) >= 11,
      icon: '🏛️',
    },
    {
      id: 'week-streak',
      title: 'Week Warrior',
      description: 'Maintain a 7-day streak',
      earned: (progress?.streak || 0) >= 7,
      icon: '🔥',
    },
    {
      id: 'verse-lover',
      title: 'Verse Collector',
      description: 'Bookmark 10 verses',
      earned: (progress?.bookmarks.length || 0) >= 10,
      icon: '📚',
    },
    {
      id: 'gita-start',
      title: 'Gita Explorer',
      description: 'Start the Bhagavad Gita',
      earned: (progress?.completedLessons.filter(id => id.startsWith('3-')).length || 0) >= 1,
      icon: '🕉️',
    },
  ];

  return (
    <main className="min-h-screen pb-24 bg-cream-100 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="bg-gradient-to-br from-saffron-600 to-orange-500 text-white">
        <div className="max-w-2xl lg:max-w-4xl mx-auto px-6 pt-6 pb-8">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/" className="p-2 -ml-2 rounded-lg hover:bg-white/10">
              <ArrowLeft size={24} />
            </Link>
            <h1 className="font-heading text-xl font-bold">Your Profile</h1>
          </div>

          {/* Progress Circle */}
          <div className="flex items-center justify-center">
            <div className="bg-white rounded-full p-2">
              <ProgressRing progress={overallProgress} size={140} strokeWidth={10} />
            </div>
          </div>
          <p className="text-center mt-4 text-saffron-100">
            {completedLessons} of {totalLessons} lessons complete
          </p>
        </div>
        <div className="h-6 bg-cream-100 dark:bg-gray-900 rounded-t-[2rem] transition-colors" />
      </header>

      {/* Content */}
      <div className="max-w-2xl lg:max-w-4xl mx-auto px-6 -mt-2">
        {/* Theme Toggle */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-cream-200 dark:border-gray-700 p-4 mb-6 transition-colors">
          <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-3">Appearance</h3>
          <div className="flex gap-2">
            <button
              onClick={() => setTheme('light')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-medium transition-colors ${
                theme === 'light'
                  ? 'bg-saffron-500 text-white'
                  : 'bg-cream-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-cream-200 dark:hover:bg-gray-600'
              }`}
            >
              <Sun size={18} />
              Light
            </button>
            <button
              onClick={() => setTheme('dark')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-medium transition-colors ${
                theme === 'dark'
                  ? 'bg-saffron-500 text-white'
                  : 'bg-cream-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-cream-200 dark:hover:bg-gray-600'
              }`}
            >
              <Moon size={18} />
              Dark
            </button>
            <button
              onClick={() => setTheme('system')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-medium transition-colors ${
                theme === 'system'
                  ? 'bg-saffron-500 text-white'
                  : 'bg-cream-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-cream-200 dark:hover:bg-gray-600'
              }`}
            >
              <Monitor size={18} />
              Auto
            </button>
          </div>
        </div>

        {/* Account Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-cream-200 dark:border-gray-700 p-4 mb-6 transition-colors">
          {loading ? (
            <div className="flex items-center justify-center py-4">
              <RefreshCw className="animate-spin text-gray-400" size={20} />
            </div>
          ) : user ? (
            // Logged in state
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-saffron-100 dark:bg-saffron-900/30 rounded-full flex items-center justify-center">
                  <User className="text-saffron-600 dark:text-saffron-400" size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 dark:text-gray-100 truncate">{user.email}</p>
                  <div className="flex items-center gap-1 text-sm text-green-600 dark:text-green-400">
                    <Cloud size={14} />
                    <span>Progress synced to cloud</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={syncProgress}
                  disabled={isSyncing}
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-cream-100 dark:bg-gray-700 hover:bg-cream-200 dark:hover:bg-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors disabled:opacity-50"
                >
                  <RefreshCw size={16} className={isSyncing ? 'animate-spin' : ''} />
                  {isSyncing ? 'Syncing...' : 'Sync Now'}
                </button>
                <button
                  onClick={handleSignOut}
                  className="flex items-center justify-center gap-2 py-2 px-4 bg-cream-100 dark:bg-gray-700 hover:bg-cream-200 dark:hover:bg-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors"
                >
                  <LogOut size={16} />
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            // Not logged in state
            <div>
              {!showAuthForm ? (
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-cream-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                      <CloudOff className="text-gray-400" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">Sign in to sync</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Save progress across devices</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowAuthForm(true)}
                    className="w-full py-2.5 bg-saffron-500 hover:bg-saffron-600 text-white rounded-lg font-medium transition-colors"
                  >
                    Sign In / Create Account
                  </button>
                  <p className="text-xs text-gray-400 text-center mt-2">
                    Your progress is saved locally. Sign in to backup and sync.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleAuth}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium text-gray-900 dark:text-gray-100">
                      {isSignUp ? 'Create Account' : 'Sign In'}
                    </h3>
                    <button
                      type="button"
                      onClick={() => {
                        setShowAuthForm(false);
                        setAuthError(null);
                      }}
                      className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      Cancel
                    </button>
                  </div>

                  <div className="space-y-3">
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full pl-10 pr-4 py-2.5 border border-cream-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
                      />
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength={6}
                        className="w-full pl-10 pr-4 py-2.5 border border-cream-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {authError && (
                    <p className={`text-sm mt-3 ${authError.includes('Check your email') ? 'text-green-600' : 'text-red-500'}`}>
                      {authError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={authLoading}
                    className="w-full mt-4 py-2.5 bg-saffron-500 hover:bg-saffron-600 disabled:bg-saffron-300 text-white rounded-lg font-medium transition-colors"
                  >
                    {authLoading ? 'Please wait...' : isSignUp ? 'Create Account' : 'Sign In'}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setIsSignUp(!isSignUp);
                      setAuthError(null);
                    }}
                    className="w-full mt-2 text-sm text-saffron-600 dark:text-saffron-400 hover:text-saffron-700 dark:hover:text-saffron-300"
                  >
                    {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Create one"}
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Email Subscription Section - Only shown when logged in */}
        {user && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-cream-200 dark:border-gray-700 p-4 mb-6 transition-colors">
            <div className="flex items-center gap-2 mb-3">
              <Mail className="text-saffron-500" size={20} />
              <h3 className="font-medium text-gray-900 dark:text-gray-100">Daily Email Lessons</h3>
            </div>

            {isLoadingSubscription ? (
              <div className="flex items-center justify-center py-4">
                <RefreshCw className="animate-spin text-gray-400" size={20} />
              </div>
            ) : emailSubscription ? (
              <div>
                {/* Progress indicator */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-600 dark:text-gray-400">
                      Day {emailSubscription.current_day} of {TOTAL_DAYS}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {Math.round((emailSubscription.current_day / TOTAL_DAYS) * 100)}%
                    </span>
                  </div>
                  <div className="h-2 bg-cream-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-saffron-500 to-orange-500 rounded-full transition-all duration-300"
                      style={{ width: `${(emailSubscription.current_day / TOTAL_DAYS) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Status and toggle */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {emailSubscription.subscribed ? (
                        <span className="text-green-600 dark:text-green-400">Subscribed</span>
                      ) : (
                        <span className="text-gray-500">Unsubscribed</span>
                      )}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {emailSubscription.subscribed
                        ? 'You\'ll receive one lesson daily at 6 AM UTC'
                        : 'You won\'t receive daily lessons'}
                    </p>
                  </div>
                  <button
                    onClick={toggleEmailSubscription}
                    disabled={isUpdatingSubscription}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      emailSubscription.subscribed
                        ? 'bg-saffron-500'
                        : 'bg-gray-300 dark:bg-gray-600'
                    } ${isUpdatingSubscription ? 'opacity-50' : ''}`}
                  >
                    <span
                      className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        emailSubscription.subscribed ? 'translate-x-6' : ''
                      }`}
                    />
                  </button>
                </div>

                {/* Restart option */}
                {emailSubscription.current_day > 1 && (
                  <button
                    onClick={restartEmailJourney}
                    disabled={isUpdatingSubscription}
                    className="w-full py-2 text-sm text-saffron-600 dark:text-saffron-400 hover:text-saffron-700 dark:hover:text-saffron-300 disabled:opacity-50"
                  >
                    <RotateCcw size={14} className="inline mr-1" />
                    Restart from Day 1
                  </button>
                )}

                {emailSubscription.current_day >= TOTAL_DAYS && (
                  <div className="mt-2 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <p className="text-sm text-green-700 dark:text-green-400 text-center">
                      You've completed the 77-day journey!
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Get one lesson delivered to your inbox every day for 77 days — from the foundations of Hinduism to the wisdom of the Bhagavad Gita.
                </p>
                <button
                  onClick={createEmailSubscription}
                  disabled={isUpdatingSubscription}
                  className="w-full py-3 bg-saffron-500 hover:bg-saffron-600 disabled:bg-saffron-300 text-white rounded-lg font-medium transition-colors"
                >
                  {isUpdatingSubscription ? 'Subscribing...' : 'Subscribe to Daily Lessons'}
                </button>
              </div>
            )}
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-cream-200 dark:border-gray-700 transition-colors"
              >
                <div className={`w-10 h-10 ${stat.bg} dark:opacity-80 rounded-full flex items-center justify-center mb-3`}>
                  <Icon className={stat.color} size={20} />
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{stat.value}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Achievements */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Award className="text-gold-500" size={20} />
            <h2 className="font-heading text-lg font-semibold text-gray-900 dark:text-gray-100">
              Achievements
            </h2>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-cream-200 dark:border-gray-700 overflow-hidden transition-colors">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className={`
                  flex items-center gap-4 p-4
                  ${index !== achievements.length - 1 ? 'border-b border-cream-100 dark:border-gray-700' : ''}
                  ${achievement.earned ? '' : 'opacity-50'}
                `}
              >
                <div className="text-2xl">
                  {achievement.earned ? achievement.icon : '🔒'}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 dark:text-gray-100">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {achievement.description}
                  </p>
                </div>
                {achievement.earned && (
                  <span className="text-green-500 dark:text-green-400 text-sm font-medium">
                    Earned!
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bookmarked Verses */}
        {progress?.bookmarks && progress.bookmarks.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-heading text-lg font-semibold text-gray-900 dark:text-gray-100">
                Saved Verses
              </h2>
              <Link
                href="/profile/saved"
                className="text-sm text-saffron-600 dark:text-saffron-400 font-medium hover:underline"
              >
                View all {progress.bookmarks.length} →
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-cream-200 dark:border-gray-700 p-4 transition-colors">
              <div className="flex flex-wrap gap-2">
                {progress.bookmarks.slice(0, 6).map((ref) => {
                  const [chapter, verse] = ref.split(':');
                  return (
                    <Link
                      key={ref}
                      href={`/gita/${chapter}/${verse}`}
                      className="px-3 py-1.5 bg-saffron-50 dark:bg-saffron-900/30 text-saffron-700 dark:text-saffron-400 rounded-full text-sm font-medium hover:bg-saffron-100 dark:hover:bg-saffron-900/50 transition-colors"
                    >
                      Gita {chapter}.{verse}
                    </Link>
                  );
                })}
                {progress.bookmarks.length > 6 && (
                  <Link
                    href="/profile/saved"
                    className="px-3 py-1.5 bg-cream-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-sm font-medium hover:bg-cream-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    +{progress.bookmarks.length - 6} more
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Reset Progress */}
        <div className="mb-6">
          <button
            onClick={handleReset}
            disabled={isResetting}
            className="flex items-center justify-center gap-2 w-full py-3 text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-300 disabled:text-red-300 dark:disabled:text-red-700 text-sm font-medium"
          >
            <RotateCcw size={16} className={isResetting ? 'animate-spin' : ''} />
            {isResetting ? 'Resetting...' : 'Reset All Progress'}
          </button>
        </div>

        {/* Support Section */}
        <div className="bg-gradient-to-br from-saffron-50 to-orange-50 dark:from-saffron-900/20 dark:to-orange-900/20 rounded-2xl shadow-sm border border-saffron-200 dark:border-saffron-800 p-6 mb-6 text-center transition-colors">
          <div className="w-12 h-12 bg-saffron-100 dark:bg-saffron-900/50 rounded-full flex items-center justify-center mx-auto mb-3">
            <Heart className="text-saffron-600 dark:text-saffron-400" size={24} />
          </div>
          <h3 className="font-heading text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Support Dharma Path
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Help keep Dharma Path free for everyone. Your donation supports the development of daily lessons teaching Hindu philosophy and spiritual wisdom.
          </p>

          <div className="flex flex-col gap-3 justify-center items-center">
            {/* US & Other Countries - Stripe */}
            <a
              href="https://donate.stripe.com/fZuaEW12G7NY3iEaod8g000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-saffron-500 hover:bg-saffron-600 text-white rounded-xl font-medium transition-colors shadow-md w-full max-w-xs"
            >
              <Heart size={18} />
              US & Other Countries
            </a>

            {/* India - UPI */}
            <button
              onClick={() => setShowUPIModal(true)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-saffron-500 hover:bg-saffron-600 text-white rounded-xl font-medium transition-colors shadow-md w-full max-w-xs"
            >
              <Heart size={18} />
              India (UPI)
            </button>
          </div>
        </div>

        {/* App Info */}
        <div className="text-center text-sm text-gray-400 mb-6">
          <p>Dharma Path v1.0</p>
          <p className="mt-1">Made with 🧡 for seekers everywhere</p>
        </div>
      </div>

      {/* UPI Donation Modal */}
      {showUPIModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-sm w-full p-6 relative">
            {/* Close button */}
            <button
              onClick={() => setShowUPIModal(false)}
              className="absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <X size={24} />
            </button>

            {/* Content */}
            <div className="text-center">
              <h3 className="font-heading text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Donate via UPI
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Scan with any UPI app (Google Pay, PhonePe, Paytm)
              </p>

              {/* QR Code */}
              <div className="bg-white p-4 rounded-xl inline-block mb-4">
                <img
                  src="/upi-qr.png"
                  alt="UPI QR Code"
                  width={200}
                  height={200}
                  className="mx-auto"
                />
              </div>

              {/* UPI ID with copy */}
              <div className="bg-cream-100 dark:bg-gray-700 rounded-xl p-3 mb-4">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">UPI ID</p>
                <div className="flex items-center justify-center gap-2">
                  <code className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    6005817706@ptyes
                  </code>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText('6005817706@ptyes');
                      alert('UPI ID copied!');
                    }}
                    className="text-xs px-2 py-1 bg-saffron-500 hover:bg-saffron-600 text-white rounded-lg transition-colors"
                  >
                    Copy
                  </button>
                </div>
              </div>

              <p className="text-xs text-gray-400 dark:text-gray-500">
                Thank you for supporting Dharma Path 🙏
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <Navigation />
    </main>
  );
}
