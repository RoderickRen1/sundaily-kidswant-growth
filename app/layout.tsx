import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import './proposal.css';
import './hero-refinement.css';
import './strength.css';

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
  description: '圣迪乐与孩子王家庭营养成长计划战略合作提案',
  openGraph: {
    title: '营养有蛋，成长有伴',
    description: '圣迪乐 × 孩子王｜家庭营养成长计划',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '营养有蛋，成长有伴',
    description: '圣迪乐 × 孩子王｜家庭营养成长计划',
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
