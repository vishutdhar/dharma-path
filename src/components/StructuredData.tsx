/**
 * JSON-LD Structured Data for SEO
 *
 * This invisible code helps Google understand:
 * - What kind of website this is (educational)
 * - What topics it covers (Hinduism, Bhagavad Gita, etc.)
 * - Course/lesson structure
 *
 * Benefits:
 * - Better search result appearance (rich snippets)
 * - Higher chances of appearing in "Courses" search features
 * - Improved understanding by search engines
 */

export default function StructuredData() {
  // Schema 1: Website - Basic info about the site
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Dharma Path',
    description: 'A structured learning path for beginners to understand Hinduism. 110 lessons covering the Bhagavad Gita, Upanishads, Vedas, and Hindu philosophy.',
    url: 'https://mydharmapath.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://mydharmapath.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  // Schema 2: Organization - Who runs this site
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Dharma Path',
    url: 'https://mydharmapath.com',
    logo: 'https://mydharmapath.com/icons/icon-512x512.png',
    description: 'Making Hindu philosophy accessible to everyone through structured learning.',
    sameAs: [
      // Add your social media links here when you have them
      // 'https://twitter.com/dharmapath',
      // 'https://instagram.com/dharmapath',
    ],
  };

  // Schema 3: Course - The main learning content
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Complete Hindu Philosophy Course',
    description: 'A comprehensive 110-lesson journey through Hindu philosophy, from foundational concepts to deep scripture study of the Bhagavad Gita, Upanishads, and Vedas.',
    provider: {
      '@type': 'Organization',
      name: 'Dharma Path',
      url: 'https://mydharmapath.com',
    },
    url: 'https://mydharmapath.com/learn',
    educationalLevel: 'Beginner to Advanced',
    numberOfLessons: 110,
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: 'PT100H', // Approximately 100 hours total
    },
    syllabusSections: [
      {
        '@type': 'Syllabus',
        name: 'Level 1: The Foundation',
        description: 'Core concepts of Hinduism - Dharma, Karma, Samsara, Moksha, and the Divine',
      },
      {
        '@type': 'Syllabus',
        name: 'Level 2: The Stories',
        description: 'The great epics - Ramayana and Mahabharata',
      },
      {
        '@type': 'Syllabus',
        name: 'Level 3: The Gita',
        description: 'Introduction to the Bhagavad Gita and its teachings',
      },
      {
        '@type': 'Syllabus',
        name: 'Level 4: Going Deeper',
        description: 'Upanishads, Vedas, and Hindu traditions',
      },
      {
        '@type': 'Syllabus',
        name: 'Level 5: The Puranas',
        description: 'Sacred stories from Bhagavata, Shiva, and Devi Puranas',
      },
      {
        '@type': 'Syllabus',
        name: 'Level 6: Study the Gita',
        description: 'Deep study of all 18 chapters of the Bhagavad Gita',
      },
      {
        '@type': 'Syllabus',
        name: 'Level 7: Study the Upanishads',
        description: 'Verse-by-verse study of major Upanishads',
      },
      {
        '@type': 'Syllabus',
        name: 'Level 8: Study the Vedic Hymns',
        description: 'Sacred mantras and cosmic hymns from the Vedas',
      },
    ],
    about: [
      { '@type': 'Thing', name: 'Hinduism' },
      { '@type': 'Thing', name: 'Bhagavad Gita' },
      { '@type': 'Thing', name: 'Upanishads' },
      { '@type': 'Thing', name: 'Vedas' },
      { '@type': 'Thing', name: 'Hindu Philosophy' },
      { '@type': 'Thing', name: 'Dharma' },
      { '@type': 'Thing', name: 'Karma' },
      { '@type': 'Thing', name: 'Yoga' },
      { '@type': 'Thing', name: 'Meditation' },
    ],
    inLanguage: 'en',
    isAccessibleForFree: true,
  };

  // Schema 4: BreadcrumbList - Helps Google understand site structure
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://mydharmapath.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Learn',
        item: 'https://mydharmapath.com/learn',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
