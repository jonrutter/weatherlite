import { codeToWeatherEvent } from '../weather';

describe('codeToWeatherEvent', () => {
  test('code 100 yields rainbow', () => {
    expect(codeToWeatherEvent(100)).toBe('rainbow');
  });
  test('code 200-299 yields thunderstorm', () => {
    expect(codeToWeatherEvent(200)).toBe('thunderstorm');
    expect(codeToWeatherEvent(299)).toBe('thunderstorm');
  });
  test('code 300-399, 500-510, and 512-599 yields rain', () => {
    expect(codeToWeatherEvent(300)).toBe('rain');
    expect(codeToWeatherEvent(399)).toBe('rain');
    expect(codeToWeatherEvent(500)).toBe('rain');
    expect(codeToWeatherEvent(510)).toBe('rain');
    expect(codeToWeatherEvent(511)).not.toBe('rain');
    expect(codeToWeatherEvent(512)).toBe('rain');
    expect(codeToWeatherEvent(599)).toBe('rain');
  });
  test('code 511, 614-616 yields winter mix', () => {
    expect(codeToWeatherEvent(511)).toBe('winterMix');
    expect(codeToWeatherEvent(614)).toBe('winterMix');
    expect(codeToWeatherEvent(616)).toBe('winterMix');
  });
  test('code 611-613 yields hail', () => {
    expect(codeToWeatherEvent(611)).toBe('hail');
    expect(codeToWeatherEvent(613)).toBe('hail');
  });
  test('code 600-610, 617-699 yields snow', () => {
    expect(codeToWeatherEvent(600)).toBe('snow');
    expect(codeToWeatherEvent(610)).toBe('snow');
    expect(codeToWeatherEvent(617)).toBe('snow');
    expect(codeToWeatherEvent(699)).toBe('snow');
  });
  test('code 700-799 yields atmospheric', () => {
    expect(codeToWeatherEvent(700)).toBe('atmospheric');
    expect(codeToWeatherEvent(799)).toBe('atmospheric');
  });
  test('code 800 yields clear', () => {
    expect(codeToWeatherEvent(800)).toBe('clear');
  });
  test('code 801-802 yields lightClouds', () => {
    expect(codeToWeatherEvent(801)).toBe('lightClouds');
    expect(codeToWeatherEvent(802)).toBe('lightClouds');
  });
  test('code 803 yields clouds', () => {
    expect(codeToWeatherEvent(803)).toBe('clouds');
  });
  test('code 804 yields heavyClouds', () => {
    expect(codeToWeatherEvent(804)).toBe('heavyClouds');
  });
  test('invalid code returns null', () => {
    expect(codeToWeatherEvent(0)).toBe(null);
  });
});
