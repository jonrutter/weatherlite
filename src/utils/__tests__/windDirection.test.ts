import { windDirection } from '../convert';

describe('windDirection', () => {
  it('works for rounded values under 360', () => {
    expect(windDirection(0)).toBe('N');
    expect(windDirection(90)).toBe('E');
    expect(windDirection(180)).toBe('S');
    expect(windDirection(270)).toBe('W');
    expect(windDirection(360)).toBe('N');
  });
  it('works for values over 360', () => {
    expect(windDirection(450)).toBe('E');
  });
  it('works for negative values', () => {
    expect(windDirection(-1)).toBe('N');
  });
  it('correctly rounds values', () => {
    expect(windDirection(1.12)).toBe('N');
    expect(windDirection(22.4)).toBe('NNE');
  });
});
