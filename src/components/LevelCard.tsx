'use client';

import { Lock, ChevronRight, CheckCircle } from 'lucide-react';
import { Level, getLevelDuration, getLessonCount } from '@/data/curriculum';

interface LevelCardProps {
  level: Level;
  progress: number; // 0-100
  isLocked: boolean;
  isActive: boolean;
  onClick: () => void;
}

export default function LevelCard({
  level,
  progress,
  isLocked,
  isActive,
  onClick,
}: LevelCardProps) {
  const lessonCount = getLessonCount(level);
  const duration = getLevelDuration(level);
  const isCompleted = progress >= 100;

  return (
    <button
      onClick={onClick}
      disabled={isLocked}
      className={`
        w-full text-left p-6 rounded-2xl transition-all duration-300 card-hover
        ${isLocked 
          ? 'bg-cream-200 opacity-60 cursor-not-allowed' 
          : isActive
            ? 'bg-white shadow-xl border-2 border-saffron-400'
            : 'bg-white shadow-md hover:shadow-lg border border-cream-300'
        }
      `}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          {/* Level number badge */}
          <div className={`
            inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold mb-3
            ${isCompleted 
              ? 'bg-green-100 text-green-700' 
              : isLocked
                ? 'bg-cream-300 text-cream-500'
                : 'bg-saffron-100 text-saffron-700'
            }
          `}>
            {isCompleted ? <CheckCircle size={18} /> : level.id}
          </div>

          {/* Title */}
          <h3 className="font-heading text-xl font-semibold text-gray-900 mb-1">
            {level.title}
          </h3>
          
          {/* Subtitle */}
          <p className="text-saffron-700 font-medium text-sm mb-2">
            {level.subtitle}
          </p>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {level.description}
          </p>

          {/* Meta info */}
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span>{lessonCount} lessons</span>
            <span>•</span>
            <span>{duration}</span>
          </div>

          {/* Progress bar */}
          {!isLocked && (
            <div className="mt-4">
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                <span>Progress</span>
                <span>{progress}%</span>
              </div>
              <div className="h-2 bg-cream-200 rounded-full overflow-hidden">
                <div 
                  className="h-full progress-bar rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Right side icon */}
        <div className={`
          ml-4 p-2 rounded-full
          ${isLocked 
            ? 'bg-cream-300 text-cream-500' 
            : 'bg-saffron-100 text-saffron-700'
          }
        `}>
          {isLocked ? <Lock size={20} /> : <ChevronRight size={20} />}
        </div>
      </div>
    </button>
  );
}
