import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'WinWin WindowTint | Premier Window Tinting in San Antonio, TX',
  description:
    'Enhance and protect your vehicle, home, or office with WinWin WindowTint. We offer professional automotive, residential, and commercial window tinting services in San Antonio, TX. Get a free quote today!',
  keywords: ['window tint san antonio', 'car window tinting', 'home window tinting', 'ceramic tint', 'office window tinting'],
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
        {children}
        <Toaster />
        <Script id="firebase-sdk" src="https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js" />
        <Script id="firebase-analytics-sdk" src="https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js" />
        <Script id="firebase-init" strategy="afterInteractive">
          {`
            const firebaseConfig = {
              apiKey: "AIzaSyAzNg83NB4SJHSg9BKHpW05J2pbb4nzEAc",
              authDomain: "studio-6663131171-dc932.firebaseapp.com",
              projectId: "studio-6663131171-dc932",
              storageBucket: "studio-6663131171-dc92.appspot.com",
              messagingSenderId: "562869782317",
              appId: "1:562869782317:web:0355ca5ef5641ca36235a4",
              measurementId: "G-Z52N1Z88DP"
            };

            // Initialize Firebase
            if (typeof window !== 'undefined' && !window._firebaseApp) {
               window._firebaseApp = firebase.initializeApp(firebaseConfig);
               firebase.getAnalytics(window._firebaseApp);
            }
          `}
        </Script>
      </body>
      
    </html>
  );
}
