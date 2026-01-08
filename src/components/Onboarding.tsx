'use client';

import { useState } from 'react';
import { ChevronRight, BookOpen, Target, TrendingUp } from 'lucide-react';
import { curriculum, getLessonCount } from '@/data/curriculum';

interface OnboardingProps {
  onComplete: () => void;
}

export default function Onboarding({ onComplete }: OnboardingProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Dynamic stats from curriculum
  const totalLevels = curriculum.length;
  const totalLessons = curriculum.reduce((acc, level) => acc + getLessonCount(level), 0);

  const slides = [
    {
      icon: <BookOpen size={48} className="text-saffron-500" />,
      title: "Hinduism is vast.",
      subtitle: "We made it simple.",
      description: "No more confusion about where to start. No more scattered YouTube videos and Wikipedia rabbit holes.",
    },
    {
      icon: <Target size={48} className="text-saffron-500" />,
      title: `${totalLevels} levels. ${totalLessons} lessons.`,
      subtitle: "One clear path.",
      description: "From the basics to the Bhagavad Gita - everything organized in a structured learning journey.",
    },
    {
      icon: <TrendingUp size={48} className="text-saffron-500" />,
      title: "Learn at your pace.",
      subtitle: "Track your progress.",
      description: "5-15 minute lessons. Pick up where you left off. Your journey, your schedule.",
    },
  ];

  const changeSlide = (newSlide: number, _direction: 'next' | 'prev') => {
    if (isAnimating) return;
    setIsAnimating(true);

    // Start exit animation, then change slide
    setTimeout(() => {
      setCurrentSlide(newSlide);
      // Allow enter animation to complete
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }, 200);
  };

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      changeSlide(currentSlide + 1, 'next');
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  const handleDotClick = (index: number) => {
    if (index === currentSlide || isAnimating) return;
    changeSlide(index, index > currentSlide ? 'next' : 'prev');
  };

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-saffron-500 to-orange-600 flex flex-col">
      {/* Skip button */}
      <div className="flex justify-end p-4">
        <button
          onClick={handleSkip}
          className="text-white/70 hover:text-white text-sm font-medium px-4 py-2"
        >
          Skip
        </button>
      </div>

      {/* Slide content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 text-center overflow-hidden">
        <div
          className={`
            transition-all duration-300 ease-out
            ${isAnimating
              ? 'opacity-0 scale-95 translate-y-4'
              : 'opacity-100 scale-100 translate-y-0'
            }
          `}
        >
          <div className="mb-8 p-4 bg-white/10 rounded-full mx-auto w-fit">
            {slides[currentSlide].icon}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {slides[currentSlide].title}
          </h1>

          <h2 className="text-xl md:text-2xl font-medium text-white/90 mb-6">
            {slides[currentSlide].subtitle}
          </h2>

          <p className="text-white/80 text-lg max-w-md leading-relaxed mx-auto">
            {slides[currentSlide].description}
          </p>
        </div>
      </div>

      {/* Progress dots and next button */}
      <div className="p-8">
        {/* Progress dots */}
        <div className="flex justify-center gap-2 mb-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              disabled={isAnimating}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white w-6'
                  : 'bg-white/40 hover:bg-white/60 w-2'
              } ${isAnimating ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            />
          ))}
        </div>

        {/* Next/Start button */}
        <button
          onClick={handleNext}
          disabled={isAnimating}
          className={`w-full max-w-md mx-auto flex items-center justify-center gap-2 bg-white text-saffron-600 font-semibold py-4 px-8 rounded-xl transition-all duration-200 ${
            isAnimating ? 'opacity-70 cursor-not-allowed' : 'hover:bg-white/95'
          }`}
        >
          {currentSlide === slides.length - 1 ? (
            "Begin Your Journey"
          ) : (
            <>
              Next
              <ChevronRight size={20} />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
