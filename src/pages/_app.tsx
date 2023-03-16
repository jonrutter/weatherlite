import '@/assets/styles/index.css';
import type { AppProps } from 'next/app';
import { Nunito, Inter } from 'next/font/google';
import Head from 'next/head';

// fonts
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`${inter.variable} ${nunito.variable}`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
