import React from 'react';
import { Spinner } from '../spinner';

export const LoadingPage = () => (
  <div className="bg-gradient-to-br from-sky-300 to-sky-500 text-white min-h-screen h-full w-full relative font-sans grid grid-cols-1 grid-rows-[auto_1fr_auto]">
    <div className="flex justify-center items-center min-h-screen w-full h-full bg-slate-900/50">
      <Spinner size="lg" />
    </div>
  </div>
);
