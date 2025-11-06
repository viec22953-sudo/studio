import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { FirebaseClientProvider } from '@/firebase';

export const metadata: Metadata = {
  title: 'WinWin WindowTint | Premier Window Tinting in San Antonio, TX',
  description:
    'Enhance and protect your vehicle, home, or office with WinWin WindowTint. We offer professional automotive, residential, and commercial window tinting services in San Antonio, TX. Get a free quote today!',
  keywords: ['window tint san antonio', 'car window tinting', 'home window tinting', 'ceramic tint', 'office window tinting'],
  icons: {
    icon: [
      { url: '/favicon2/favicon.ico', sizes: 'any' },
      { url: '/favicon2/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon2/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/favicon2/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/favicon2/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <FirebaseClientProvider>
          {children}
          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
