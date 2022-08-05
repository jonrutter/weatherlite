/*
App Data Types
*/

/*
Reference: 

There are two main types of data that affect the UI of this weather app:
- Times of day
- Weather events

Times of day can be: 'day', 'night', or 'twilight'.

Weather events are discrete types of weather (e.g., 'snow', 'rain')

OpenWeatherMap API returns a weather 'code' for each type of weather condition that it recognizes (reference: https://openweathermap.org/weather-conditions). There are dozens of different weather codes, which represent weather conditions with a much higher degree of granularity than this weather app needs (e.g., 'light intensity drizzle', 'drizzle', 'heavy intensity drizzle', etc.).

So this weather app defines its weather events as ranges of OpenWeatherMap codes.

For example: OpenWeatherMap recognizes ten different types of Thunderstorm, with codes ranging from 200 to 232 (all codes from 200-299 are reserved for thunderstorms). This app defines a single 'thunderstorm' weather event, which represents all OpenWeatherMap codes from 200 to 299.

---

The current weather event and the time of day affect the appearance of the UI in terms of its color scheme, as well as the main weather image

---

This app decides what UI to implement by using 'cases', which are objects containing either/both 'times' and 'weather' properties (are arrays of TimeOfDay and WeatherEvent, respectively). By creating a mapping of a 'color' or 'image' to a list of cases, the app can use a single function to evaluate whether a given time/event pairing are reflected in any of the cases, and return the correct image or color combination.
*/

/**
 * Maps weather events to OpenWeatherMap code ranges
 */
export const weatherEvents = {
  heavyClouds: [[804]],
  clouds: [[803]],
  lightClouds: [[801, 802]],
  clear: [[800]],
  atmospheric: [[700, 799]],
  snow: [
    [600, 610],
    [617, 699],
  ],
  hail: [[611, 613]],
  winterMix: [[511], [614, 616]],
  rain: [
    [300, 399],
    [500, 510],
    [512, 599],
  ],
  thunderstorm: [[200, 299]],
  rainbow: [[100]],
};

export type WeatherEvent = keyof typeof weatherEvents;

export type TimeOfDay = 'day' | 'night' | 'twilight';

export type WeatherCase = {
  weather?: WeatherEvent[];
  time?: TimeOfDay[];
};

/*
Location API responses and data
*/

export type Nullable<T> = T | undefined | null;

export type Location = {
  name: string;
  lat: number;
  lon: number;
};

export type LocationData = {
  city: Nullable<string>;
  country: Nullable<string>;
  countryCode: Nullable<string>;
  id: Nullable<number>;
  latitude: Nullable<number>;
  longitude: Nullable<number>;
  name: Nullable<string>;
  population: Nullable<number>;
  region: Nullable<string>;
  regionCode: Nullable<string>;
  type: Nullable<string>;
  wikiDataId: Nullable<string>;
};

export type LocationQuery = {
  data: LocationData[];
  metadata: {
    currentOffset: number;
    totalCount: number;
  };
};

type UnsuccessfulGeoResponse = {
  message: string;
};

export type GeoResponse = LocationQuery | UnsuccessfulGeoResponse;

/*
Weather API responses and data
*/

type WeatherStump = {
  id: Nullable<number>;
  main: Nullable<string>;
  description: Nullable<string>;
  icon: Nullable<string>;
};

type MinuteForecast = {
  dt: Nullable<number>;
  precipitation: Nullable<number>;
};

type HourlyForecast = {
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

type DailyForecast = {
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

type WeatherAlert = {
  sender_name?: Nullable<string>;
  event?: Nullable<string>;
  start?: Nullable<number>;
  end?: Nullable<number>;
  description?: Nullable<string>;
  tags?: unknown[];
};

export type WeatherData = {
  lat: Nullable<number>;
  lon: Nullable<number>;
  timezone: Nullable<string>;
  timezone_offset: Nullable<number>;
  current: {
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
  minutely: MinuteForecast[];
  hourly: HourlyForecast[];
  daily: DailyForecast[];
  alerts?: WeatherAlert[];
};

// see https://openweathermap.org/faq#error401
type UnsuccessfulWeatherResponse = {
  cod: 401 | 404 | 429 | 500 | 502 | 503 | 504;
  message: string;
};

export type WeatherResponse = WeatherData | UnsuccessfulWeatherResponse;
