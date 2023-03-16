import type { NextApiRequest, NextApiResponse } from 'next';

type Nullable<T> = T | undefined | null;

type WeatherStump = {
  id: Nullable<number>;
  main: Nullable<string>;
  description: Nullable<string>;
  icon: Nullable<string>;
};

export type HourlyForecastType = {
  dt: Nullable<number>;
  temp: Nullable<number>;
  feels_like: Nullable<number>;
  pressure?: Nullable<number>;
  humidity?: Nullable<number>;
  dew_point?: Nullable<number>;
  uvi?: Nullable<number>;
  clouds?: Nullable<number>;
  visibility?: Nullable<number>;
  wind_speed?: Nullable<number>;
  wind_gust?: Nullable<number>;
  wind_deg?: Nullable<number>;
  pop?: Nullable<number>;
  rain?: Nullable<{ '1h': Nullable<number> }>;
  snow?: Nullable<{ '1h': Nullable<number> }>;
  weather: WeatherStump[];
};

type DailyForecastType = {
  dt: Nullable<number>;
  sunrise: Nullable<number>;
  sunset: Nullable<number>;
  moonrise: Nullable<number>;
  moonset: Nullable<number>;
  moon_phase: Nullable<number>;
  temp: {
    morn: Nullable<number>;
    day: Nullable<number>;
    eve: Nullable<number>;
    night: Nullable<number>;
    min: Nullable<number>;
    max: Nullable<number>;
  };
  feels_like: {
    morn: Nullable<number>;
    day: Nullable<number>;
    eve: Nullable<number>;
    night: Nullable<number>;
  };
  pressure?: Nullable<number>;
  humidity?: Nullable<number>;
  dew_point?: Nullable<number>;
  wind_speed?: Nullable<number>;
  wind_gust?: Nullable<number>;
  wind_deg?: Nullable<number>;
  clouds?: Nullable<number>;
  uvi?: Nullable<number>;
  pop?: Nullable<number>;
  rain?: Nullable<number>;
  snow?: Nullable<number>;
  weather: WeatherStump[];
};

export type WeatherAlert = {
  sender_name?: Nullable<string>;
  event?: Nullable<string>;
  start?: Nullable<number>;
  end?: Nullable<number>;
  description?: Nullable<string>;
  tags?: unknown[];
};

export type CurrentWeather = {
  dt: Nullable<number>;
  sunrise: Nullable<number>;
  sunset: Nullable<number>;
  temp: Nullable<number>;
  feels_like: Nullable<number>;
  pressure?: Nullable<number>;
  humidity?: Nullable<number>;
  dew_point?: Nullable<number>;
  clouds?: Nullable<number>;
  uvi?: Nullable<number>;
  visibility?: Nullable<number>;
  wind_speed?: Nullable<number>;
  wind_gust?: Nullable<number>;
  wind_deg?: Nullable<number>;
  rain?: Nullable<{ '1h': Nullable<number> }>;
  snow?: Nullable<{ '1h': Nullable<number> }>;
  weather: WeatherStump[];
};

export type WeatherData = {
  lat: Nullable<number>;
  lon: Nullable<number>;
  timezone: Nullable<string>;
  timezone_offset: Nullable<number>;
  current: CurrentWeather;
  hourly: HourlyForecastType[];
  daily: DailyForecastType[];
  alerts?: WeatherAlert[];
};

// see https://openweathermap.org/faq#error401
type UnsuccessfulWeatherResponse = {
  cod: 401 | 404 | 429 | 500 | 502 | 503 | 504;
  message: string;
};

export type ErrorWeatherResponse = {
  message: string;
};

export type SuccessfulWeatherResponse = WeatherData;

export type Response = ErrorWeatherResponse | SuccessfulWeatherResponse;

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  try {
    const { lat, lon } = req.query;
    // handle cases where lat or lon are improperly formatted
    if (typeof lat !== 'string' || typeof lon !== 'string' || !lat || !lon) {
      throw new Error(
        'Unable to fetch weather. One or more of the api request queries were invalid.'
      );
    }
    // if lat/lon are formatted correctly, attempt to fetch the weather for those coordinates
    const endpoint = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial&exclude=minutely`;
    const apiRes = await fetch(endpoint);
    const data = await apiRes.json();

    // handle errors from api
    if (apiRes.status !== 200) {
      throw new Error(
        `There was an error fetching the weather data from OpenWeatherMap: error ${apiRes.status}, ${data?.message}`
      );
    } else if (data?.cod && data.cod >= 400) {
      /* When OpenWeatherMap encounters a problem, it 
      (annoyingly) sometimes still sends an HTTP 200 
      response (but with a response body indicating that 
      there was an error). So we need to make sure that the 
      response is not one of these errors. 
      https://openweathermap.org/faq#error401 */
      throw new Error(
        `There was an error retrieving the weather data from Openweathermap: error code ${data?.cod}, ${data?.message}`
      );
    }
    // if no errors, return the data
    res.status(200).send({ ...data });
  } catch (err) {
    let message = 'Unknown Error';
    // handle TS typing errors as unknown
    if (err instanceof Error) message = err.message;
    res.status(400).send({ message });
  }
}
