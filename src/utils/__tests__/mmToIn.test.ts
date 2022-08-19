import { mmToIn } from '../convert';

describe('mmToIn', () => {
  it('returns a number', () => {
    expect(typeof mmToIn(10)).toBe('number');
  });
  it('returns the correct value', () => {
    expect(mmToIn(10)).toBe(0.39);
  });
});
