import React from 'react';

import Logo from '../../images/rainbow.png';

export const Header = () => (
  <header className="w-full bg-transparent px-4 md:px-8 lg:px-20 py-4">
    <div className="max-w-screen-xl mx-auto">
      <div className="flex items-center">
        <img src={Logo} alt="" className="max-w-[3rem] h-auto mr-3" />
        <span className="text-xl font-medium">Weatherlite</span>
      </div>
    </div>
  </header>
);
