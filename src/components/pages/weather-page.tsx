import React from 'react';

// types
import type { WeatherData, WeatherEvent } from '../../types';

// icons
import { WiRain, WiHumidity, WiStrongWind } from 'react-icons/wi';

// util funcs
import capitalize from 'lodash/capitalize';
import { toFixedZero } from '../../utils/functions';
import { codeToWeatherEvent } from '../../utils/weather';

// hooks
import { useTimeOfDay } from '../../hooks/useTimeOfDay';

// components
import { Header } from '../layout/header';
import { Footer } from '../layout/footer';
import { HeroImage } from '../hero-image';
import { TempOverview } from '../temp-overview';
import { Bubble } from '../bubble';
import { DailyOverview } from '../daily-overview';
import { Background } from '../layout/background';
import { WeatherDetails } from '../weather-details';
import { WeatherAlert } from '../weather-alert';
import { HourlyForecast } from '../hourly-forecast';

type Props = {
  weather: WeatherData;
  name: string;
};

export const WeatherPage: React.FC<Props> = ({ weather, name }) => {
  // destructuring specific weather details:
  const { description, id: code } = weather.current.weather[0];
  const {
    temp,
    feels_like: feelsLike,
    humidity,
    wind_speed: windSpeed,
  } = weather.current;
  const { min: todayLow, max: todayHigh } = weather.daily[0].temp;
  const precipitation = weather.current.rain?.['1h'] || 0;

  const hasTemp = !!(temp && feelsLike && todayLow && todayHigh);

  const event: WeatherEvent | null = codeToWeatherEvent(code || 100);
  const timeOfDay = useTimeOfDay(
    weather.current.sunrise,
    weather.current.sunset
  );

  const alerts = weather.alerts;

  if (!event || !timeOfDay) {
    return (
      <h1>
        'Sorry, the app encountered an error. Please try refreshing your
        browser.'
      </h1>
    );
  }

  return (
    <Background
      className="min-h-screen h-full w-full relative font-sans grid grid-cols-1 grid-rows-[auto_1fr_auto]"
      event={event}
      timeOfDay={timeOfDay}
    >
      <Header />
      <main className="mt-10 md:mt-20">
        <div className="max-w-screen-xl mx-auto w-full h-full">
          <h1 className="px-4 md:px-8 lg:px-20 text-center xl:text-left flex flex-col mb-5 md:mb-8 max-w-screen-xl mx-auto">
            <span className="font-black text-3xl mb-3 md:mb-6 md:text-5xl">
              {name}
            </span>
            {description && (
              <span className="font-bold text-xl md:text-3xl">
                {capitalize(description)}
              </span>
            )}
          </h1>
          {alerts && alerts.length ? (
            <div className="flex flex-col space-y-4 items-center lg:items-start mb-8 md:mb-12">
              {alerts.map((alert, i) => (
                <WeatherAlert key={i} alert={alert} />
              ))}
            </div>
          ) : null}
          {/* main page grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-12 max-w-screen-xl mx-auto xl:px-6">
            {/* top row / left col */}
            <div>
              <div className="px-4 md:px-8 lg:px-20 mb-6 md:mb-12">
                <HeroImage
                  event={event}
                  timeOfDay={timeOfDay}
                  className="max-w-sm mx-auto"
                />
              </div>
              <div className="px-4 md:px-8 lg:px-20 flex flex-col md:flex-row mb-12 items-center md:items-start md:justify-between xl:flex-col xl:justify-start">
                {hasTemp && (
                  <div className="mb-8">
                    <TempOverview
                      current={toFixedZero(temp)}
                      feelsLike={toFixedZero(feelsLike)}
                      max={toFixedZero(todayHigh)}
                      min={toFixedZero(todayLow)}
                    />
                  </div>
                )}
                <div>
                  <div className="flex justify-center items-center space-x-5 text-sm font-bold mb-8">
                    <Bubble>
                      <WiRain
                        className="w-[30px] h-[30px]"
                        aria-hidden
                        title="Precipitation"
                      />
                      <span className="sr-only">Precipitation: </span>
                      <span>{precipitation} in</span>
                    </Bubble>
                    <Bubble>
                      <WiHumidity
                        className="w-[30px] h-[30px]"
                        title="Humidity"
                        aria-hidden
                      />
                      <span className="sr-only">Humidity: </span>
                      <span>{humidity ? toFixedZero(humidity) : 0}%</span>
                    </Bubble>
                    <Bubble>
                      <WiStrongWind
                        className="w-[30px] h-[30px]"
                        title="Wind speed"
                        aria-hidden
                      />
                      <span className="sr-only">Wind speed: </span>
                      <span>{toFixedZero(windSpeed || 0)} mph</span>
                    </Bubble>
                  </div>
                  <div className="px-4 md:px-8 lg:px-20 flex justify-center">
                    <WeatherDetails weather={weather.current} />
                  </div>
                </div>
              </div>
            </div>
            {/* bottom row / right col */}
            <div>
              <div className="flex flex-row justify-center bg-a11y mb-12 xl:rounded-lg xl:shadow-lg">
                <div className="flex flex-row justify-start space-x-8 overflow-x-auto py-8 px-5 mx-auto">
                  {weather.daily.slice(1, 8).map((day) => (
                    <DailyOverview
                      key={day.dt}
                      time={day.dt}
                      code={day.weather[0].id}
                      low={day.temp.min}
                      high={day.temp.max}
                    />
                  ))}
                </div>
              </div>
              <div className="mb-12 px-5 mx-auto w-full h-72 max-h-72 md:h-96 md:max-h-96 bg-a11y py-4 relative xl:rounded-lg xl:shadow-lg">
                <HourlyForecast forecast={weather.hourly} />
              </div>
            </div>
          </div>
        </div>
        <hr className="bg-a11y opacity-40" />
      </main>
      <Footer />
    </Background>
  );
};
