import React from 'react';
import getDay from 'date-fns/getDay';

// components
import { Icon } from './icon';

// types
import type { Nullable } from '../types';

// util funcs
import { toFixedZero } from '../utils/functions';

// prop types
type Props = {
  code?: Nullable<number>;
  time?: Nullable<number>;
  high?: Nullable<number>;
  low?: Nullable<number>;
};

const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

export const DailyOverview: React.FC<Props> = ({ code, time, high, low }) => {
  if (!code || !time || !high || !low) return null;
  const dayOfWeek = days[getDay(new Date(time * 1000))];

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-base font-bold">{dayOfWeek}</h2>
      <div className="text-3xl mb-2">
        <Icon code={code} timeOfDay="day" />
      </div>
      <div className="flex text-sm space-x-1">
        <span className="font-bold">
          <span className="sr-only">Daily high </span>
          {toFixedZero(high)}°
        </span>
        <span>
          <span className="sr-only">Daily low </span>
          {toFixedZero(low)}°
        </span>
      </div>
    </div>
  );
};
