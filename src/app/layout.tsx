import '@/styles/globals.css';

import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

import { ModernNavbar } from '@/components/navbar/modern-navbar';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { NetworkParticles } from '@/components/ui/network-particles';
import { siteConfig } from '@/lib/constant';
import { fonts } from '@/lib/fonts';
import { cn } from '@/lib/utils';

export const generateMetadata = (): Metadata => ({
  metadataBase: new URL(siteConfig.url()),
  title: {
    default: siteConfig.title(),
    template: `%s | ${siteConfig.title()}`,
  },
  description: siteConfig.description(),
  keywords: siteConfig.keywords(),
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  verification: {
    google: siteConfig.googleSiteVerificationId(),
  },
  openGraph: {
    url: siteConfig.url(),
    title: siteConfig.title(),
    description: siteConfig.description(),
    siteName: siteConfig.title(),
    images: '/opengraph-image.png',
    type: 'website',
    locale: 'en',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title(),
    description: siteConfig.description(),
    images: '/opengraph-image.png',
  },
});

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen font-sans overflow-auto', fonts)}>
        <ThemeProvider>
          <div className="fixed inset-0 z-0 bg-gradient-to-br from-pink-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950/30" 
            style={{ 
              transform: 'translate3d(0, 0, 0)',
              WebkitBackdropFilter: 'blur(4px)',
              backdropFilter: 'blur(4px)'
            }}
          >
            {/* Apple-like gradient orbs */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-pink-200/20 dark:bg-pink-800/10 blur-3xl" 
              style={{ transform: 'translate3d(0, 0, 0)' }}></div>
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-purple-200/20 dark:bg-purple-800/10 blur-3xl" 
              style={{ transform: 'translate3d(0, 0, 0)' }}></div>
            <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] rounded-full bg-blue-200/10 dark:bg-blue-800/5 blur-3xl" 
              style={{ transform: 'translate3d(0, 0, 0)' }}></div>
          </div>
          <NetworkParticles 
            particleCount={180} 
            particleSize={2.5} 
            speed={0.8}
            particleColor="#ff69b4"
            lineColor="#ff69b480"
            lineOpacity={0.4}
            lineWidth={1.2}
            connectDistance={150}
            className="min-h-screen bg-transparent dark:bg-transparent"
          >
            <ModernNavbar 
              logo={{
                url: "/",
                src: "/logo.svg",
                alt: "DreamNest",
                title: "DreamNest"
              }}
              contactButton={{
                text: "Book a Session",
                url: "/#contact"
              }}
            />
            <div className="relative z-10 pt-20">
              {children}
            </div>
            <Toaster />
          </NetworkParticles>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
