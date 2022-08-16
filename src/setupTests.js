import '@testing-library/jest-dom';

// jest mocks
import './test/__mocks__/intersection-observer';

// msw
import { server } from './app/mocks/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
