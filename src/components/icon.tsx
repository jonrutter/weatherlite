import React, { useMemo } from 'react';

// types
import type { TimeOfDay, WeatherCase, WeatherEvent } from '../types';

// util funcs
import { hasCase, codeToWeatherEvent } from '../utils/weather';

// icons
import {
  WiWindy,
  WiHail,
  WiCloudy,
  WiCloud,
  WiRainMix,
  WiNightAltCloudy,
  WiNightClear,
  WiRain,
  WiSnow,
  WiDayCloudy,
  WiDaySunny,
  WiThunderstorm,
} from 'react-icons/wi';
import { BsRainbow } from 'react-icons/bs';
import { IconType } from 'react-icons';

type IconDetails = {
  icon: IconType;
  name: string;
  cases: WeatherCase[];
};
/**
 * Array of objects mapping a weather icon to weather cases.
 */
const icons: IconDetails[] = [
  {
    icon: WiThunderstorm,
    name: 'thunderstorm',
    cases: [{ weather: ['thunderstorm'] }],
  },
  {
    icon: WiRain,
    name: 'rain',
    cases: [{ weather: ['rain'] }],
  },
  {
    icon: WiRainMix,
    name: 'winter mix',
    cases: [{ weather: ['winterMix'] }],
  },
  {
    icon: WiSnow,
    name: 'snow',
    cases: [{ weather: ['snow'] }],
  },
  { icon: WiHail, name: 'hail', cases: [{ weather: ['hail'] }] },
  { icon: WiWindy, name: 'atmospheric', cases: [{ weather: ['atmospheric'] }] },
  {
    icon: WiDaySunny,
    name: 'sun',
    cases: [{ weather: ['clear'], time: ['day', 'twilight'] }],
  },
  {
    icon: WiNightClear,
    name: 'moon',
    cases: [{ weather: ['clear'], time: ['night'] }],
  },
  {
    icon: WiDayCloudy,
    name: 'clouds with sun',
    cases: [{ weather: ['lightClouds'], time: ['day', 'twilight'] }],
  },
  {
    icon: WiNightAltCloudy,
    name: 'clouds with moon',
    cases: [{ weather: ['lightClouds'], time: ['night'] }],
  },
  { icon: WiCloud, name: 'light clouds', cases: [{ weather: ['clouds'] }] },
  {
    icon: WiCloudy,
    name: 'heavy clouds',
    cases: [{ weather: ['heavyClouds'] }],
  },
];

// prop types
interface Props extends React.ComponentPropsWithoutRef<'svg'> {
  code: number;
  timeOfDay: TimeOfDay;
  className?: string;
}

// util funcs
const findIcon = (
  time: TimeOfDay,
  event: WeatherEvent
): { src: IconType; name: string } => {
  const selectedIcon = icons.find((icon) => hasCase(icon.cases, time, event));
  // return selectedIcon?.icon {src: selectedIcon.icon, name: selectedIcon.name} : { src: WiAlien, name: 'alien'};
  return selectedIcon?.icon
    ? { src: selectedIcon.icon, name: selectedIcon.name }
    : { src: BsRainbow, name: 'rainbow' };
};

/**
 * Renders a weather icon based on the current weatherCode and timeOfDay
 */
export const Icon: React.FC<Props> = ({
  code,
  timeOfDay,
  className = '',
  ...rest
}) => {
  const weatherEvent = useMemo<WeatherEvent | null>(() => {
    return codeToWeatherEvent(code);
  }, [code]);

  if (!weatherEvent) return null;

  const icon = findIcon(timeOfDay, weatherEvent);

  const Tag = icon.src;

  return (
    <Tag
      data-testid={icon.name}
      className={'max-w-full h-auto pointer-events-none'}
      aria-label={icon.name}
      {...rest}
    />
  );
};
