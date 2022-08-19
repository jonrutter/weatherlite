import { useMemo } from 'react';
import { TimeOfDay, Nullable } from '../types';

import { getTimeOfDay } from '../utils/time';

export const useTimeOfDay = (
  sunrise?: Nullable<number>,
  sunset?: Nullable<number>
): TimeOfDay | null => {
  return useMemo(() => {
    if (!sunrise || !sunset) return null;
    return getTimeOfDay(new Date().getTime(), sunrise * 1000, sunset * 1000);
  }, [sunrise, sunset]);
};
