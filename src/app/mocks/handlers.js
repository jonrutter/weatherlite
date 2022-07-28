import { rest } from 'msw';

import { mockLocationData } from './mock-data/mock-location-data';

export const handlers = [
  rest.get('/api/location', (req, res, ctx) => {
    return res(
      ctx.delay(2000),
      ctx.status(200),
      ctx.json({ ...mockLocationData })
    );
  }),
  rest.get('/api/weather', null),
];
