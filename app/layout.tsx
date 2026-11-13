import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import './proposal.css';
import './hero-refinement.css';
import './strength.css';
import './partnership.css';
import './v2-marketing.css';
import './v2-anchor.css';
import './v3-refinement.css';
import './v4-corrections.css';
import './v4-order.css';
import './v5-visibility.css';
import './v6-brand-clarity.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sundaily-kidswant-growth.rjhy188816.chatgpt.site'),
  title: '营养有蛋，成长有伴｜圣迪乐 × 孩子王',
  description: '圣迪乐 × 孩子王｜2027家庭营养成长五大联合营销活动提案',
  openGraph: {
    title: '营养有蛋，成长有伴',
    description: '圣迪乐 × 孩子王｜2027五大联合营销活动',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '营养有蛋，成长有伴',
    description: '圣迪乐 × 孩子王｜2027五大联合营销活动',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
