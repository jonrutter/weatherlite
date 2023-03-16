import Head from 'next/head';
import { WeatherApp } from '@/components/WeatherApp';

export default function Home() {
  return (
    <>
      <Head>
        <title>Weatherlite</title>
      </Head>
      <main className="font-sans">
        <WeatherApp />
      </main>
    </>
  );
}
