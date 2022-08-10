import React from 'react';

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
  <div className="flex flex-col items-center">
    <div className="flex mb-3">
      <span
        className="font-black [font-size:_2.5rem] leading-none inline-block mr-5"
        data-testid="current-temp"
      >
        <span className="sr-only">Current temperature </span>
        {current}°F
      </span>
      <div className="flex flex-col text-sm">
        <span className="font-bold" data-testid="max-temp">
          <span className="sr-only">Daily maximum temperature </span>
          {max}°
        </span>
        <span data-testid="min-temp">
          <span className="sr-only">Daily minimum temperature </span>
          {min}°
        </span>
      </div>
    </div>
    <span className="inline-block font-bold text-xl">
      Feels like {feelsLike}°F
    </span>
  </div>
);
