import differenceInMinutes from 'date-fns/differenceInMinutes';
import type { TimeOfDay } from '../types';

/**
 * Returns the current time of day, based on the current time, sunrise time, and sunset time
 *
 * @param current - The current time, in ms Unix
 * @param sunrise - The sunrise time, in ms Unix
 * @param sunset - The sunset time, in ms Unix
 */
export const getTimeOfDay = (
  current?: number,
  sunrise?: number,
  sunset?: number
): TimeOfDay | null => {
  if (!current || !sunrise || !sunset) return null;
  const now = new Date(current);
  const sunriseDate = new Date(sunrise);
  const sunsetDate = new Date(sunset);
  if (
    differenceInMinutes(sunriseDate, now) > 30 ||
    differenceInMinutes(now, sunsetDate) > 30
  ) {
    // night: if it is more than 30 minutes before sunrise, or more than 30 minutes after sunset

    return 'night';
  } else if (
    differenceInMinutes(now, sunrise) > 30 &&
    differenceInMinutes(sunsetDate, now) > 30
  ) {
    // day: if it is more than 30 minutes after sunrise and more than 30 minutes before sunset
    return 'day';
  } else {
    // otherwise it is twilight

    return 'twilight';
  }
};
