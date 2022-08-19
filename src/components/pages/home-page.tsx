import React from 'react';

// components
import { Header } from '../layout/header';
import { Footer } from '../layout/footer';
import { Background } from '../layout/background';

export const HomeLayout: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => (
  <Background
    event="rainbow"
    timeOfDay="day"
    className="min-h-screen h-full w-full relative font-sans grid grid-cols-1 grid-rows-[auto_1fr_auto]"
  >
    <Header />
    <main className="px-4 md:px-8 lg:px-20 mt-10 md:mt-20 lg:mt-0 lg:py-8">
      <div className="max-w-screen-xl mx-auto w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 lg:gap-8 items-center">
        {children}
      </div>
    </main>
    <Footer />
  </Background>
);
