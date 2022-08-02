import { rest } from 'msw';

import { mockLocationData } from './mock-data/mock-location-data';
import { mockWeatherData } from './mock-data/mock-weather-data';

export const handlers = [
  rest.get('/api/location', (req, res, ctx) => {
    return res(
      ctx.delay(2000),
      ctx.status(200),
      ctx.json({ ...mockLocationData })
    );
  }),
  rest.get('/api/weather', (req, res, ctx) => {
    return res(
      ctx.delay(2000),
      ctx.status(200),
      ctx.json({ ...mockWeatherData })
    );
  }),
];
