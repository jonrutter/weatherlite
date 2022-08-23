import { toFixedZero } from '../functions';

describe('toFixedZero', () => {
  test('the function returns a number', () => {
    expect(typeof toFixedZero(100)).toBe('number');
  });
  test('the function properly rounds the input', () => {
    expect(toFixedZero(1.4)).toBe(1);
    expect(toFixedZero(1.5)).toBe(2);
    expect(toFixedZero(1)).toBe(1);
    expect(toFixedZero(0.17)).toBe(0);
    expect(toFixedZero(0.97)).toBe(1);
  });
});
