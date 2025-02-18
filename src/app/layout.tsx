import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import VoiceNavigator from './VoiceNavigator';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Voice Navigation App',
  description: 'Navigate using voice commands',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <VoiceNavigator />
        {children}
      </body>
    </html>
  );
}