import '@/styles/index.css';
import type { AppProps } from 'next/app';
import { Nunito, Inter } from 'next/font/google';

// fonts
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${nunito.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
