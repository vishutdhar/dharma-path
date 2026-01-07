/**
 * Lesson Page Layout - Handles SEO metadata for each lesson
 *
 * This generates unique titles and descriptions for each of the 110 lessons.
 * When someone shares a lesson link, they see the lesson title instead of
 * just "Dharma Path".
 *
 * Example:
 * - URL: mydharmapath.com/learn/1-1-1
 * - Title: "What is Hinduism? | Dharma Path"
 * - Description: "Introduction to Hinduism and its key concepts..."
 */

import { Metadata } from 'next';
import { curriculum } from '@/data/curriculum';

// Helper to find a lesson by ID
function findLesson(lessonId: string) {
  for (const level of curriculum) {
    for (const module of level.modules) {
      const lesson = module.lessons.find(l => l.id === lessonId);
      if (lesson) {
        return { lesson, module, level };
      }
    }
  }
  return null;
}

// Generate metadata for each lesson page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lessonId: string }>;
}): Promise<Metadata> {
  const { lessonId } = await params;
  const result = findLesson(lessonId);

  if (!result) {
    return {
      title: 'Lesson Not Found',
      description: 'This lesson could not be found.',
    };
  }

  const { lesson, module, level } = result;

  // Create a rich description combining lesson info
  const description = `${lesson.description} Part of "${module.title}" in Level ${level.id}: ${level.title}. Learn Hinduism step by step with Dharma Path.`;

  return {
    title: lesson.title,
    description: description,
    openGraph: {
      title: `${lesson.title} | Dharma Path`,
      description: description,
      type: 'article',
      url: `https://mydharmapath.com/learn/${lessonId}`,
    },
    twitter: {
      card: 'summary',
      title: `${lesson.title} | Dharma Path`,
      description: description,
    },
  };
}

// The layout just passes children through - metadata is the main purpose
export default function LessonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
