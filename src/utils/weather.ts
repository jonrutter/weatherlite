import type { WeatherEvent, WeatherCase, TimeOfDay } from '../types';
import { weatherEvents } from '../types';

/**
 * Accepts a weather code, returns the associated weather event, or null if none are found
 */
export const codeToWeatherEvent = (code: number): WeatherEvent | null => {
  let targetEvent;
  for (let [event, ranges] of Object.entries(weatherEvents)) {
    if (
      ranges.some((range) => {
        if (range.length < 1) return false;
        if (range.length === 1 && code === range[0]) return true; // single entry ranges, currently only used for 511
        if (code >= range[0] && code <= range[1]) return true;
        return false;
      })
    ) {
      targetEvent = event as WeatherEvent; // explicitly typing as `WeatherEvent`; this is safe because all events are keys of `weatherEvents`, and the `WeatherEvent` type is defined as being the keys of `weatherEvents`;
      break;
    }
  }
  return targetEvent || null;
};

/**
 * Accepts list of weather cases, time of day, and weather event, returns true if any of the cases matches the time and event
 */
export const hasCase = (
  cases: WeatherCase[],
  time?: TimeOfDay,
  event?: WeatherEvent
) => {
  const caseMatches = (weatherCase: WeatherCase) => {
    // if there is a specified time, return whether the time matches; default to true, since if no time is specified then all are valid
    const matchesTime =
      weatherCase.time && time ? weatherCase.time.includes(time) : true;
    // if there is a specified weather event, return whether the event matches; default to true, since if no weather is specified then all are valid
    const matchesWeather =
      weatherCase.weather && event ? weatherCase.weather.includes(event) : true;
    return matchesTime && matchesWeather;
  };
  return cases.some(caseMatches);
};
