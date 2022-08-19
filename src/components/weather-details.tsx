import React, { useState } from 'react';

// types
import type { CurrentWeather, Nullable } from '../types';

// components
import { SecondaryButton } from './buttons';
import { Dialog } from './dialog';

// util funcs
import format from 'date-fns/format';
import { toFixedZero } from '../utils/functions';
import {
  windDirection,
  mmToIn,
  pressureToInHg,
  metersToMi,
} from '../utils/convert';

// prop types
type BaseProps<T = {}> = React.PropsWithChildren<T>;

// ui components
const TH: React.FC<BaseProps> = ({ children }) => (
  <th scope="row" className="font-normal">
    {children}
  </th>
);
const TD: React.FC<BaseProps> = ({ children }) => <td>{children}</td>;
const TR: React.FC<BaseProps<{ label: string }>> = ({ label, children }) => (
  <tr
    className="flex justify-between border-b-[1px] border-b-slate-900/50 pt-4 pb-1"
    data-testid={label}
  >
    {children}
  </tr>
);

/*
I need to explicitly type check weather values are numbers,
because their values may be 0, and because 0s are falsy values,
1) the TR will not be rendered to the DOM (even though we want it to be), and
2) instead, a single 0 will be rendered
*/
const isNum = (num: Nullable<number>): num is number => typeof num === 'number';

/* Wrapper */

// prop types
type Props = {
  weather: CurrentWeather;
};

export const WeatherDetails: React.FC<BaseProps<Props>> = ({ weather }) => {
  const [open, setOpen] = useState(false);
  if (!weather) return null;
  const {
    sunrise,
    sunset,
    wind_speed: windSpeed,
    wind_deg: windDeg,
    wind_gust: windGust,
    humidity,
    visibility,
    rain,
    snow,
    dew_point: dewPoint,
    clouds,
    uvi,
    pressure,
  } = weather;
  return (
    <>
      <SecondaryButton onClick={() => setOpen(true)}>
        More details
      </SecondaryButton>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        title="Today's Forecast"
      >
        <table className="block w-full text-sm mb-4">
          <tbody className="block w-full">
            {typeof sunrise === 'number' && (
              <TR label="sunrise">
                <TH>Sunrise</TH>
                <TD>{format(new Date(sunrise * 1000), 'p')}</TD>
              </TR>
            )}
            {isNum(sunset) && (
              <TR label="sunset">
                <TH>Sunset</TH>
                <TD>{format(new Date(sunset * 1000), 'p')}</TD>
              </TR>
            )}
            {isNum(windSpeed) && isNum(windDeg) ? (
              <TR label="wind">
                <TH>Wind</TH>
                <TD>
                  {windDirection(windDeg)} {toFixedZero(windSpeed)} mph
                </TD>
              </TR>
            ) : null}
            {isNum(windGust) && (
              <TR label="gusts">
                <TH>Gusts</TH>
                <TD>{windGust} mph</TD>
              </TR>
            )}
            {/* humidity row should always render, even if undefined or null, since an empty value is just 0% humidity */}
            <TR label="humidity">
              <TH>Humidity</TH>
              <TD>{humidity || 0}%</TD>
            </TR>
            {rain?.['1h'] && (
              <TR label="rain">
                <TH>Rain (last hour)</TH>
                <TD>{mmToIn(rain['1h'])} in</TD>
              </TR>
            )}
            {snow?.['1h'] && (
              <TR label="snow">
                <TH>Snow (last hour)</TH>
                <TD>{mmToIn(snow['1h'])} in</TD>
              </TR>
            )}
            {/* clouds row should always render, even if undefined or null, since an empty value is just 0% clouds */}
            <TR label="clouds">
              <TH>Cloud cover</TH>
              <TD>{clouds || 0}%</TD>
            </TR>
            {isNum(dewPoint) && (
              <TR label="dew-point">
                <TH>Dew point</TH>
                <TD>{toFixedZero(dewPoint)}°F</TD>
              </TR>
            )}
            {isNum(visibility) && (
              <TR label="visibility">
                <TH>Visibility</TH>
                <TD>{metersToMi(visibility)} mi</TD>
              </TR>
            )}
            {isNum(uvi) && (
              <TR label="uvi">
                <TH>Max UV Index</TH>
                <TD>{uvi}</TD>
              </TR>
            )}
            {isNum(pressure) && (
              <TR label="pressure">
                <TH>Pressure</TH>
                <TD>{pressureToInHg(pressure)} inHg</TD>
              </TR>
            )}
          </tbody>
        </table>
        <div className="flex justify-end">
          <button
            onClick={() => setOpen(false)}
            className="bg-slate-900 hover:opacity-70 transition-all text-white py-1 px-3 rounded-md shadow-md"
          >
            Close
          </button>
        </div>
      </Dialog>
    </>
  );
};
