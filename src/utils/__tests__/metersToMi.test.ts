import { metersToMi } from '../convert';

describe('metersToMi', () => {
  it('returns a number', () => {
    expect(typeof metersToMi(10)).toBe('number');
  });
  it('returns the correct value', () => {
    expect(metersToMi(10000)).toBe(6.21);
  });
});
