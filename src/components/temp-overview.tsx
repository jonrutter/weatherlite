import React from 'react';

// thermometer images
import ThermometerWarm from '../images/temp-warm.png';
import ThermometerCold from '../images/temp-cold.png';

// prop types
type Props = {
  current: number;
  feelsLike: number;
  min: number;
  max: number;
};

export const TempOverview: React.FC<Props> = ({
  current,
  feelsLike,
  min,
  max,
}) => (
  <div className="flex">
    <div className="mr-3 hidden md:block">
      <img
        src={current > 40 ? ThermometerWarm : ThermometerCold}
        alt=""
        className="max-w-[64px] h-auto pointer-events-none select-none"
      />
    </div>
    <div className="flex flex-col items-center md:items-start">
      <div className="flex mb-3">
        <span
          className="font-black [font-size:_2.5rem] md:text-6xl leading-none inline-block mr-5"
          data-testid="current-temp"
        >
          <span className="sr-only">Current temperature </span>
          {current}°F
        </span>
        <div className="flex flex-col text-sm md:text-2xl">
          <span className="font-bold" data-testid="max-temp">
            <span className="sr-only">Today's high temperature is </span>
            {max}°
          </span>
          <span data-testid="min-temp">
            <span className="sr-only">Today's low temperature is </span>
            {min}°
          </span>
        </div>
      </div>
      <span className="inline-block font-bold text-xl md:text-3xl">
        Feels like {feelsLike}°F
      </span>
    </div>
  </div>
);
