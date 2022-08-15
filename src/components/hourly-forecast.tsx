import React from 'react';

// date fns
import format from 'date-fns/format';

// components
import { Icon } from './icon';

// util funcs
import { toFixedZero } from '../utils/functions';

// types
import type { HourlyForecastType } from '../types';

// prop types
type Props = {
  forecast: HourlyForecastType[];
};

const Hour: React.FC<{ forecast: HourlyForecastType }> = ({ forecast }) => (
  <tr className="w-full text-center">
    <th scope="row" className="text-left pb-3">
      {forecast.dt && format(forecast.dt * 1000, 'p')}
    </th>
    <td className="text-3xl flex justify-center pb-3">
      {forecast?.weather[0].id && (
        <Icon code={forecast?.weather[0].id} timeOfDay="day" className="mr-1" />
      )}
    </td>
    <td className="pb-3">
      {forecast.pop ? toFixedZero(forecast.pop * 100) : 0}%
    </td>
    <td className="pb-3">{forecast.temp && toFixedZero(forecast.temp)}°</td>
  </tr>
);

const Heading: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <th scope="col" className="w-1/5">
    <span className="sr-only">{children}</span>
  </th>
);

export const HourlyForecast: React.FC<Props> = ({ forecast }) => {
  if (!forecast || forecast.length <= 0) return null;

  return (
    <div>
      <table className="table-fixed w-full text-sm">
        <caption className="sr-only">Hourly forecast</caption>
        <thead className="w-full">
          <tr className="w-full">
            <Heading>Time</Heading>
            <Heading>Weather</Heading>
            <Heading>Precipitation</Heading>
            <Heading>Temperature</Heading>
          </tr>
        </thead>
        <tbody className="w-full">
          {forecast.slice(0, 24).map((hour) => (
            <Hour key={hour.dt} forecast={hour} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
