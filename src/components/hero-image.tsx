import React from 'react';

// types
import type { TimeOfDay, WeatherCase, WeatherEvent } from '../types';

// helper funcs
import { hasCase } from '../utils/weather';

// images
import Thunderstorm from '@/assets/images/thunderstorm.png';
import Rain from '@/assets/images/rain.png';
import Mix from '@/assets/images/mix.png';
import Snow from '@/assets/images/snow.png';
import Hail from '@/assets/images/hail.png';
import Fog from '@/assets/images/fog.png';
import Sun from '@/assets/images/sun.png';
import MoonStars from '@/assets/images/moon-stars.png';
import SunClouds from '@/assets/images/sun-clouds.png';
import MoonClouds from '@/assets/images/moon-clouds.png';
import LightClouds from '@/assets/images/light-clouds.png';
import HeavyClouds from '@/assets/images/heavy-clouds.png';
import Rainbow from '@/assets/images/rainbow.png';

type ImageMap = {
  src: string;
  name: string;
  cases: WeatherCase[];
};

const weatherImages: ImageMap[] = [
  {
    src: Thunderstorm,
    name: 'thunderstorm',
    cases: [{ weather: ['thunderstorm'] }],
  },
  {
    src: Rain,
    name: 'rain',
    cases: [{ weather: ['rain'] }],
  },
  {
    src: Mix,
    name: 'winterMix',
    cases: [{ weather: ['winterMix'] }],
  },
  {
    src: Snow,
    name: 'snow',
    cases: [{ weather: ['snow'] }],
  },
  {
    src: Hail,
    name: 'hail',
    cases: [{ weather: ['hail'] }],
  },
  {
    src: Fog,
    name: 'atmospheric',
    cases: [{ weather: ['atmospheric'] }],
  },
  {
    src: Sun,
    name: 'sun',
    cases: [{ weather: ['clear'], time: ['day', 'twilight'] }],
  },
  {
    src: MoonStars,
    name: 'moonWithStars',
    cases: [{ weather: ['clear'], time: ['night'] }],
  },
  {
    src: SunClouds,
    name: 'sunWithClouds',
    cases: [{ weather: ['lightClouds'], time: ['day', 'twilight'] }],
  },
  {
    src: MoonClouds,
    name: 'moonWithClouds',
    cases: [{ weather: ['lightClouds'], time: ['night'] }],
  },
  {
    src: LightClouds,
    name: 'lightClouds',
    cases: [{ weather: ['clouds'] }],
  },
  {
    src: HeavyClouds,
    name: 'heavyClouds',
    cases: [{ weather: ['heavyClouds'] }],
  },
];

interface Props extends React.ComponentPropsWithoutRef<'img'> {
  event: WeatherEvent;
  timeOfDay: TimeOfDay;
  className?: string;
}

// util functions
const findImage = (
  time: TimeOfDay,
  event: WeatherEvent
): { src: string; name: string } => {
  const selectedImage = weatherImages.find((image) =>
    hasCase(image.cases, time, event)
  );
  return selectedImage?.src && selectedImage?.name
    ? { src: selectedImage.src, name: selectedImage.name }
    : { src: Rainbow, name: 'rainbow' };
};

/**
 * Renders a weather image based on the current weatherCode and timeOfDay
 */
export const HeroImage: React.FC<Props> = ({
  event,
  timeOfDay,
  className = '',
  ...rest
}) => {
  const image = findImage(timeOfDay, event);
  return (
    <img
      src={image.src}
      data-testid={image.name}
      alt="Illustration of the current weather"
      className={`w-full h-auto pointer-events-none ${className}`}
      {...rest}
    />
  );
};
