import '@/assets/styles/index.css';
import type { AppProps } from 'next/app';
import { Nunito, Inter } from 'next/font/google';
import Head from 'next/head';

// fonts
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});
const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          --font-inter: ${inter.style.fontFamily};
          --font-nunito: ${nunito.style.fontFamily};
        }
      `}</style>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <Component {...pageProps} />
      </div>
    </>
  );
}
