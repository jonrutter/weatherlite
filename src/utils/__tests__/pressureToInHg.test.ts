import { pressureToInHg } from '../convert';

describe('pressureToInHg', () => {
  it('returns a number', () => {
    expect(typeof pressureToInHg(1)).toBe('number');
  });
  it('returns the correct value', () => {
    expect(pressureToInHg(1013)).toBe(29.91);
  });
});
