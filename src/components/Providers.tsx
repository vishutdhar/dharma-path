'use client';

import { ReactNode } from 'react';
import { AuthProvider } from '@/lib/auth';
import { ThemeProvider } from '@/lib/theme';
import OfflineIndicator from '@/components/OfflineIndicator';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <OfflineIndicator />
        {children}
      </AuthProvider>
    </ThemeProvider>
  );
}
