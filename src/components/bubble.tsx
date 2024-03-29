import React from 'react';

export const Bubble: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <div className="shadow-lg w-[4.5rem] h-[4.5rem] flex flex-col items-center justify-center rounded-full bg-a11y">
    {children}
  </div>
);
