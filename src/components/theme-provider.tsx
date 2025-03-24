'use client';

import { ComponentProps, ReactNode } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

// Modified to force light mode
type ThemeProviderProps = {
  children: ReactNode;
  // We're removing other props since we're forcing light mode
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Force light theme with forcedTheme prop
  return <NextThemesProvider forcedTheme="light" disableTransitionOnChange>{children}</NextThemesProvider>;
};
