"use client";
import { ThemeProvider } from 'next-themes';
import RevealProvider from '@/components/RevealProvider';

export default function Providers({ children }: { children?: any }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <RevealProvider>{children}</RevealProvider>
    </ThemeProvider>
  );
}


