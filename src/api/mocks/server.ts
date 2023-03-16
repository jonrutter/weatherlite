import { setupServer } from 'msw/node';
import { rest } from 'msw';

// mock data
import { mockLocationData } from './mock-data/mock-location-data';
import { mockWeatherData } from './mock-data/mock-weather-data';

// types
import { WeatherData, GeoResponse } from '../../types';

// setting up custom handlers for jest, to avoid extensive time delays
const handlers = [
  rest.get<{}, {}, GeoResponse>('/api/location', (req, res, ctx) => {
    return res(
      ctx.delay(200),
      ctx.status(200),
      ctx.json({ ...mockLocationData })
    );
  }),
  rest.get<{}, {}, WeatherData>('/api/weather', (req, res, ctx) => {
    return res(
      ctx.delay(200),
      ctx.status(200),
      ctx.json({ ...mockWeatherData })
    );
  }),
];

export const server = setupServer(...handlers);
