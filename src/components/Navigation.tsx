'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, Search, User } from 'lucide-react';

const navItems = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/learn', icon: BookOpen, label: 'Learn' },
  { href: '/search', icon: Search, label: 'Search' },
  { href: '/profile', icon: User, label: 'Profile' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-cream-200 dark:border-gray-700 shadow-lg z-50 transition-colors">
      <div className="max-w-2xl lg:max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-around py-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex flex-col items-center py-1.5 px-4 rounded-lg transition-all duration-200
                  ${isActive
                    ? 'text-saffron-600 dark:text-saffron-400'
                    : 'text-gray-400 dark:text-gray-500 hover:text-saffron-500 dark:hover:text-saffron-400'
                  }
                `}
              >
                <Icon
                  size={20}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                <span className={`
                  text-xs mt-0.5 font-medium
                  ${isActive ? 'text-saffron-600 dark:text-saffron-400' : 'text-gray-500 dark:text-gray-400'}
                `}>
                  {item.label}
                </span>
                {isActive && (
                  <div className="absolute -top-0.5 w-12 h-1 bg-saffron-500 rounded-full" />
                )}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Safe area padding for iOS */}
      <div className="h-safe-area-inset-bottom bg-white dark:bg-gray-800" />
    </nav>
  );
}
