import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const foundersGrotesk = localFont({
  src: [
    {
      path: './fonts/FoundersGrotesk-Medium.otf',
      weight: '500',
      style: 'medium',
    },
    {
      path: './fonts/FoundersGrotesk-Regular.otf',
      weight: '400',
      style: 'regular',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Mindful Foundation',
  description: 'Empowering Lives, Preventing Harm, Healing Futures',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${foundersGrotesk.className}  antialiased bg-chalk`}>
        {children}
      </body>
    </html>
  );
}
