import { getTimeOfDay } from '../time';
import addMinutes from 'date-fns/addMinutes';
import subMinutes from 'date-fns/subMinutes';

// actual sunrise/sunset times pulled from the OpenWeather API
const sunrise = 1660558892 * 1000;
const sunset = 1660609128 * 1000;
// use date-fns to generate times before and after sunrise/sunset
const hourBeforeSunrise = subMinutes(sunrise, 60).getTime();
const hourAfterSunrise = addMinutes(sunrise, 60).getTime();
const hourBeforeSunset = subMinutes(sunset, 60).getTime();
const hourAfterSunset = addMinutes(sunset, 60).getTime();
const tenBeforeSunrise = subMinutes(sunrise, 10).getTime();
const tenAfterSunrise = addMinutes(sunrise, 10).getTime();
const tenBeforeSunset = subMinutes(sunset, 10).getTime();
const tenAfterSunset = addMinutes(sunset, 10).getTime();

describe('getTimeOfDay', () => {
  it('returns night when the current time is more than an hour before sunrise', () => {
    expect(getTimeOfDay(hourBeforeSunrise, sunrise, sunset)).toBe('night');
  });
  it('returns day when the current time is more than an hour after sunrise', () => {
    expect(getTimeOfDay(hourAfterSunrise, sunrise, sunset)).toBe('day');
  });
  it('returns day when the current time is more than an hour before sunset', () => {
    expect(getTimeOfDay(hourBeforeSunset, sunrise, sunset)).toBe('day');
  });
  it('returns night when the current time is more than an hour after sunset', () => {
    expect(getTimeOfDay(hourAfterSunset, sunrise, sunset)).toBe('night');
  });
  it('returns twilight when the current time is ten minutes before sunrise', () => {
    expect(getTimeOfDay(tenBeforeSunrise, sunrise, sunset)).toBe('twilight');
  });
  it('returns twilight when the current time is ten minutes after sunrise', () => {
    expect(getTimeOfDay(tenAfterSunrise, sunrise, sunset)).toBe('twilight');
  });
  it('returns twilight when the current time is ten minutes before sunset', () => {
    expect(getTimeOfDay(tenBeforeSunset, sunrise, sunset)).toBe('twilight');
  });
  it('returns twilight when the current time is ten minutes after sunset', () => {
    expect(getTimeOfDay(tenAfterSunset, sunrise, sunset)).toBe('twilight');
  });
  it('returns null if arguments are incorrect', () => {
    expect(getTimeOfDay()).toBe(null);
  });
});
