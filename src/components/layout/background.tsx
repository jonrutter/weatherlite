import React from 'react';

// types
import type { WeatherCase, WeatherEvent, TimeOfDay } from '../../types';

// util funcs
import { hasCase } from '../../utils/weather';

/*
Color reference:

The background and text colors depend on the time of day and current weather code:
- Day && code 800-804 (clear, cloudy, rain) - colors.lightBlue
- Twilight && code 800-804 (clear, cloudy) - colors.yellow
- Night && code 800-804 (clear, cloudy, rain) - colors.darkBlue
- Day || Twilight && code 700-799 (fog, mist, tornado) - colors.green
- Night && code 700-799 (fog, mist, tornado) - colors.purple
- Day && code 600-699 (snow) - colors.teal
- Night || Twilight && code 600-699 (snow) - colors.darkTeal
- Day || Twilight && code 300-599 (rain): colors.lightBlue
  - Except:
    - Day && code 511 (freezing rain) - colors.teal
    - Night || Twilight && code 511 (freezing rain): colors.darkTeal
- Night && code 300-599 (rain) - colors.darkBlue
- All && code 200-299 (thunderstorms) - colors.purple
*/

export const colors = {
  lightBlue: 'from-sky-300 to-sky-500 text-slate-900 bg-a11y-light',
  yellow: 'from-amber-300 to-amber-500 text-slate-900 bg-a11y-light',
  medBlue: 'from-blue-400 to-blue-600 text-slate-900 bg-a11y-light',
  darkBlue: 'from-prussian-700 to-prussian-900 text-white bg-a11y-dark',
  teal: 'from-teal-300 to-teal-500 text-slate-900 bg-a11y-light',
  darkTeal: 'from-teal-600 to-teal-800 text-white bg-a11y-dark',
  purple: 'from-purple-500 to-purple-700 text-white bg-a11y-dark',
  mint: 'from-mint-500 to-mint-700 text-slate-900 bg-a11y-light',
};

type Color = keyof typeof colors;
type ColorMapping = {
  color: Color;
  cases: WeatherCase[];
};

/**
 * This is an array of objects mapping background/text colors to timeOfDay/weather code ranges.
 *
 * The goal is to easily look up a tailwind className string for styling a page's background and text color, based on the current weather event and the time of day.
 *
 * To do so, this array contains a series of objects with a 'color' (a reference to the keys of the 'colors' binding, above), and a 'cases' array.
 *
 * Each 'case' in 'cases' is an object with two array properties: 'times' (representing one or more times of day), and 'weather' (a reference to the weatherRanges binding, above)
 */
const colorMap: ColorMapping[] = [
  {
    color: 'lightBlue',
    cases: [
      {
        time: ['day'],
        weather: ['clear', 'clouds', 'lightClouds', 'rainbow'],
      },
    ],
  },
  {
    color: 'medBlue',
    cases: [
      {
        time: ['day'],
        weather: ['heavyClouds', 'rain'],
      },
    ],
  },
  {
    color: 'yellow',
    cases: [
      {
        time: ['twilight'],
        weather: ['clear', 'clouds', 'lightClouds', 'rainbow'],
      },
    ],
  },
  {
    color: 'darkBlue',
    cases: [
      {
        time: ['night'],
        weather: [
          'clear',
          'clouds',
          'lightClouds',
          'heavyClouds',
          'rain',
          'rainbow',
        ],
      },
      {
        time: ['twilight'],
        weather: ['heavyClouds', 'rain'],
      },
    ],
  },
  {
    color: 'purple',
    cases: [
      { time: ['night'], weather: ['atmospheric'] },
      { weather: ['thunderstorm'] },
    ],
  },
  {
    color: 'mint',
    cases: [{ time: ['twilight', 'day'], weather: ['atmospheric'] }],
  },
  {
    color: 'teal',
    cases: [{ time: ['day'], weather: ['snow', 'hail', 'winterMix'] }],
  },
  {
    color: 'darkTeal',
    cases: [
      {
        time: ['twilight', 'night'],
        weather: ['snow', 'hail', 'winterMix'],
      },
    ],
  },
];

// util functions
const findColor = (time?: TimeOfDay, event?: WeatherEvent): Color => {
  const selectedColor = colorMap.find((color) =>
    hasCase(color.cases, time, event)
  );
  return selectedColor?.color || 'lightBlue';
};

// prop types
type Props = React.PropsWithChildren<{
  timeOfDay?: TimeOfDay;
  event?: WeatherEvent;
  className?: string;
}>;

export const Background: React.FC<Props> = ({
  children,
  timeOfDay,
  event,
  className = '',
}) => {
  const colorCode = findColor(timeOfDay || 'day', event || 'rainbow');
  const colorClassNames = colors[colorCode];

  return (
    <div
      className={`${className} w-full h-full bg-gradient-to-br ${colorClassNames}`}
      data-testid="app-background"
    >
      {children}
    </div>
  );
};
