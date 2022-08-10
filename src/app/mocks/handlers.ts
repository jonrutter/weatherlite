import { rest } from 'msw';

import { mockLocationData } from './mock-data/mock-location-data';
import { mockWeatherData } from './mock-data/mock-weather-data';

// types
import { WeatherData, GeoResponse } from '../../types';

export const handlers = [
  rest.get<{}, {}, GeoResponse>('/api/location', (req, res, ctx) => {
    return res(
      ctx.delay(2000),
      ctx.status(200),
      ctx.json({ ...mockLocationData })
    );
  }),
  rest.get<{}, {}, WeatherData>('/api/weather', (req, res, ctx) => {
    return res(
      ctx.delay(2000),
      ctx.status(200),
      ctx.json({ ...mockWeatherData })
    );
  }),
];
