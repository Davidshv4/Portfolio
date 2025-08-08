import './globals.css';
import { Inter, Poppins } from 'next/font/google';
import type { Metadata } from 'next';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ subsets: ['latin'], weight: ['500','700'], variable: '--font-poppins' });

export const metadata: Metadata = {
  title: 'DevFlix — David | Software Engineer',
  description: 'Modern, dynamic developer portfolio powered by Next.js, Tailwind, and DatoCMS.',
  icons: [{ rel: 'icon', url: '/favicon.svg' }],
  openGraph: {
    title: 'DevFlix — David',
    description: 'Portfolio of David — Software Engineer | Full-Stack Developer',
    url: 'http://localhost:3000',
    type: 'website'
  }
};

type RootProps = { children: any };
export default function RootLayout({ children }: any) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} bg-zinc-950 text-zinc-100 antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}


