// Reusable skeleton components for loading states

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = '' }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse bg-cream-200 rounded ${className}`}
    />
  );
}

export function VerseCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-cream-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <Skeleton className="h-5 w-20" />
        <div className="flex gap-2">
          <Skeleton className="h-8 w-8 rounded-lg" />
          <Skeleton className="h-8 w-8 rounded-lg" />
        </div>
      </div>

      {/* Sanskrit text */}
      <Skeleton className="h-6 w-full mb-2" />
      <Skeleton className="h-6 w-3/4 mb-4" />

      {/* Transliteration */}
      <Skeleton className="h-4 w-full mb-1" />
      <Skeleton className="h-4 w-5/6 mb-4" />

      {/* Translation */}
      <div className="border-l-4 border-cream-300 pl-4 py-2">
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-4/5 mb-2" />
        <Skeleton className="h-4 w-3/4" />
      </div>

      {/* Button */}
      <Skeleton className="h-12 w-full mt-6 rounded-xl" />
    </div>
  );
}

export function VerseOfDaySkeleton() {
  return (
    <div className="p-6">
      <Skeleton className="h-4 w-16 mb-3" />
      <Skeleton className="h-6 w-full mb-2 mx-auto" />
      <Skeleton className="h-6 w-3/4 mb-4 mx-auto" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6 mx-auto" />
      </div>
      <Skeleton className="h-5 w-32 mt-4 mx-auto" />
    </div>
  );
}

export function ChapterListSkeleton() {
  return (
    <div className="space-y-3">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="bg-white rounded-xl p-4 border border-cream-200">
          <div className="flex items-center gap-4">
            <Skeleton className="w-10 h-10 rounded-full" />
            <div className="flex-1">
              <Skeleton className="h-5 w-32 mb-2" />
              <Skeleton className="h-4 w-48" />
            </div>
            <Skeleton className="w-5 h-5" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function LessonContentSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-6 w-1/2 mt-6" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-4/5" />
      <div className="mt-6 space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  );
}

export function ProfileStatsSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="bg-white rounded-xl p-4 border border-cream-200">
          <Skeleton className="w-8 h-8 rounded-full mx-auto mb-2" />
          <Skeleton className="h-6 w-12 mx-auto mb-1" />
          <Skeleton className="h-4 w-20 mx-auto" />
        </div>
      ))}
    </div>
  );
}
