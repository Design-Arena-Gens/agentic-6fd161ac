import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kling | Adaptive Signal Intelligence',
  description:
    'Kling orchestrates adaptive communication intelligence with real-time signal synthesis, multi-modal translation, and predictive routing.',
  metadataBase: new URL('https://agentic-6fd161ac.vercel.app'),
  openGraph: {
    title: 'Kling | Adaptive Signal Intelligence',
    description:
      'Experience the future of multi-modal communication with adaptive signal intelligence and cross-channel orchestration.',
    type: 'website',
    url: 'https://agentic-6fd161ac.vercel.app',
    images: [
      {
        url: '/og.svg',
        width: 1200,
        height: 630,
        alt: 'Kling interface preview'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kling | Adaptive Signal Intelligence',
    description:
      'Experience the future of multi-modal communication with adaptive signal intelligence and cross-channel orchestration.',
    images: ['/og.svg']
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
