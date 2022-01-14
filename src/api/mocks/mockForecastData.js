import setHours from 'date-fns/setHours';
import startOfHour from 'date-fns/startOfHour';
import addHours from 'date-fns/addHours';

const setDateWithCounter = () => {
  let counter = -1;
  let timeStart = startOfHour(Date.now());
  return () => {
    counter += 1;
    return addHours(new Date(timeStart), counter * 3).getTime();
  };
};

const setDate = setDateWithCounter();

export const mockForecastData = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: setDate(),
      main: {
        temp: 36.18,
        feels_like: 36.18,
        temp_min: 34.83,
        temp_max: 36.18,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 989,
        humidity: 86,
        temp_kf: 0.75,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 2.64, deg: 287, gust: 2.95 },
      visibility: 10000,
      pop: 0.04,
      sys: { pod: 'd' },
      dt_txt: '2022-01-13 21:00:00',
    },
    {
      dt: setDate(),
      main: {
        temp: 35.08,
        feels_like: 35.08,
        temp_min: 32.86,
        temp_max: 35.08,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 990,
        humidity: 90,
        temp_kf: 1.23,
      },
      weather: [
        {
          id: 602,
          main: 'Snow',
          description: 'heavy snow',
          icon: '04n',
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 2.73, deg: 337, gust: 5.53 },
      visibility: 7113,
      pop: 0.16,
      sys: { pod: 'n' },
      dt_txt: '2022-01-14 00:00:00',
    },
    {
      dt: setDate(),
      main: {
        temp: 33.49,
        feels_like: 27.73,
        temp_min: 32.16,
        temp_max: 33.49,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 991,
        humidity: 94,
        temp_kf: 0.74,
      },
      weather: [
        {
          id: 600,
          main: 'Snow',
          description: 'light snow',
          icon: '04n',
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 6.38, deg: 6, gust: 11.88 },
      visibility: 646,
      pop: 0.07,
      sys: { pod: 'n' },
      dt_txt: '2022-01-14 03:00:00',
    },
    {
      dt: setDate(),
      main: {
        temp: 29.8,
        feels_like: 22.39,
        temp_min: 29.8,
        temp_max: 29.8,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 991,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [
        {
          id: 600,
          main: 'Snow',
          description: 'light snow',
          icon: '04n',
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 7.67, deg: 12, gust: 12.57 },
      visibility: 10000,
      pop: 0.06,
      sys: { pod: 'n' },
      dt_txt: '2022-01-14 06:00:00',
    },
    {
      dt: setDate(),
      main: {
        temp: 27.34,
        feels_like: 18.7,
        temp_min: 27.34,
        temp_max: 27.34,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 993,
        humidity: 79,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: { all: 93 },
      wind: { speed: 8.72, deg: 14, gust: 14.45 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-01-14 09:00:00',
    },
    {
      dt: setDate(),
      main: {
        temp: 25.65,
        feels_like: 16.16,
        temp_min: 25.65,
        temp_max: 25.65,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 995,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [
        { id: 803, main: 'Clouds', description: 'broken clouds', icon: '04n' },
      ],
      clouds: { all: 78 },
      wind: { speed: 9.48, deg: 16, gust: 15.86 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-01-14 12:00:00',
    },
    {
      dt: setDate(),
      main: {
        temp: 25.18,
        feels_like: 13.8,
        temp_min: 25.18,
        temp_max: 25.18,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 998,
        humidity: 82,
        temp_kf: 0,
      },
      weather: [
        { id: 600, main: 'Snow', description: 'light snow', icon: '13d' },
      ],
      clouds: { all: 100 },
      wind: { speed: 12.82, deg: 26, gust: 16.64 },
      visibility: 4819,
      pop: 0.29,
      snow: { '3h': 0.18 },
      sys: { pod: 'd' },
      dt_txt: '2022-01-14 15:00:00',
    },
    {
      dt: setDate(),
      main: {
        temp: 23.25,
        feels_like: 11.43,
        temp_min: 23.25,
        temp_max: 23.25,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 998,
        humidity: 74,
        temp_kf: 0,
      },
      weather: [
        { id: 600, main: 'Snow', description: 'light snow', icon: '13d' },
      ],
      clouds: { all: 100 },
      wind: { speed: 12.71, deg: 21, gust: 14.63 },
      visibility: 10000,
      pop: 0.25,
      snow: { '3h': 0.14 },
      sys: { pod: 'd' },
      dt_txt: '2022-01-14 18:00:00',
    },
    {
      dt: setDate(),
      main: {
        temp: 19.96,
        feels_like: 7.36,
        temp_min: 19.96,
        temp_max: 19.96,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1000,
        humidity: 69,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 13.24, deg: 17, gust: 15.97 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'd' },
      dt_txt: '2022-01-14 21:00:00',
    },
    {
      dt: setDate(),
      main: {
        temp: 16.7,
        feels_like: 4.1,
        temp_min: 16.7,
        temp_max: 16.7,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1002,
        humidity: 64,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: { all: 91 },
      wind: { speed: 12.21, deg: 27, gust: 18.14 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-01-15 00:00:00',
    },
    {
      dt: setDate(),
      main: {
        temp: 13.39,
        feels_like: 0.79,
        temp_min: 13.39,
        temp_max: 13.39,
        pressure: 1027,
        sea_level: 1027,
        grnd_level: 1002,
        humidity: 69,
        temp_kf: 0,
      },
      weather: [
        { id: 801, main: 'Clouds', description: 'few clouds', icon: '02n' },
      ],
      clouds: { all: 19 },
      wind: { speed: 12.66, deg: 32, gust: 17.69 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-01-15 03:00:00',
    },
    {
      dt: setDate(),
      main: {
        temp: 10.76,
        feels_like: -1.84,
        temp_min: 10.76,
        temp_max: 10.76,
        pressure: 1027,
        sea_level: 1027,
        grnd_level: 1003,
        humidity: 71,
        temp_kf: 0,
      },
      weather: [
        { id: 803, main: 'Clouds', description: 'broken clouds', icon: '04n' },
      ],
      clouds: { all: 54 },
      wind: { speed: 12.01, deg: 34, gust: 16.91 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-01-15 06:00:00',
    },
    {
      dt: setDate(),
      main: {
        temp: 9.48,
        feels_like: -3.12,
        temp_min: 9.48,
        temp_max: 9.48,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 1004,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: { all: 99 },
      wind: { speed: 11.59, deg: 32, gust: 15.9 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-01-15 09:00:00',
    },
    {
      dt: setDate(),
      main: {
        temp: 8.83,
        feels_like: -3.77,
        temp_min: 8.83,
        temp_max: 8.83,
        pressure: 1030,
        sea_level: 1030,
        grnd_level: 1006,
        humidity: 71,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 11.63, deg: 31, gust: 15.73 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-01-15 12:00:00',
    },
    {
      dt: setDate(),
      main: {
        temp: 9.41,
        feels_like: -3.19,
        temp_min: 9.41,
        temp_max: 9.41,
        pressure: 1031,
        sea_level: 1031,
        grnd_level: 1007,
        humidity: 66,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 11.16, deg: 39, gust: 14.79 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'd' },
      dt_txt: '2022-01-15 15:00:00',
    },
    {
      dt: setDate(),
      main: {
        temp: 11.88,
        feels_like: -0.72,
        temp_min: 11.88,
        temp_max: 11.88,
        pressure: 1030,
        sea_level: 1030,
        grnd_level: 1006,
        humidity: 59,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 10.22, deg: 38, gust: 12.91 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'd' },
      dt_txt: '2022-01-15 18:00:00',
    },
    {
      dt: setDate(),
      main: {
        temp: 11.93,
        feels_like: -0.35,
        temp_min: 11.93,
        temp_max: 11.93,
        pressure: 1030,
        sea_level: 1030,
        grnd_level: 1005,
        humidity: 60,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: { all: 98 },
      wind: { speed: 8.93, deg: 43, gust: 10.8 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'd' },
      dt_txt: '2022-01-15 21:00:00',
    },
    {
      dt: setDate(),
      main: {
        temp: 10.27,
        feels_like: -1.48,
        temp_min: 10.27,
        temp_max: 10.27,
        pressure: 1031,
        sea_level: 1031,
        grnd_level: 1007,
        humidity: 67,
        temp_kf: 0,
      },
      weather: [
        { id: 803, main: 'Clouds', description: 'broken clouds', icon: '04n' },
      ],
      clouds: { all: 75 },
      wind: { speed: 7.85, deg: 54, gust: 10.89 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-01-16 00:00:00',
    },
    {
      dt: setDate(),
      main: {
        temp: 9.84,
        feels_like: -0.92,
        temp_min: 9.84,
        temp_max: 9.84,
        pressure: 1030,
        sea_level: 1030,
        grnd_level: 1006,
        humidity: 70,
        temp_kf: 0,
      },
      weather: [
        { id: 801, main: 'Clouds', description: 'few clouds', icon: '02n' },
      ],
      clouds: { all: 18 },
      wind: { speed: 6.71, deg: 79, gust: 10.96 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-01-16 03:00:00',
    },
    {
      dt: setDate(),
      main: {
        temp: 9.97,
        feels_like: -0.4,
        temp_min: 9.97,
        temp_max: 9.97,
        pressure: 1029,
        sea_level: 1029,
        grnd_level: 1004,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        { id: 801, main: 'Clouds', description: 'few clouds', icon: '02n' },
      ],
      clouds: { all: 12 },
      wind: { speed: 6.35, deg: 90, gust: 12.88 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-01-16 06:00:00',
    },
    {
      dt: setDate(),
      main: {
        temp: 10.35,
        feels_like: 0.55,
        temp_min: 10.35,
        temp_max: 10.35,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 1004,
        humidity: 71,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' },
      ],
      clouds: { all: 3 },
      wind: { speed: 5.91, deg: 92, gust: 12.46 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-01-16 09:00:00',
    },
    {
      dt: setDate(),
      main: {
        temp: 11.05,
        feels_like: 0.25,
        temp_min: 11.05,
        temp_max: 11.05,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1002,
        humidity: 70,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' },
      ],
      clouds: { all: 1 },
      wind: { speed: 7, deg: 78, gust: 13.65 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-01-16 12:00:00',
    },
    {
      dt: setDate(),
      main: {
        temp: 16.5,
        feels_like: 7.12,
        temp_min: 16.5,
        temp_max: 16.5,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1001,
        humidity: 51,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' },
      ],
      clouds: { all: 0 },
      wind: { speed: 6.67, deg: 116, gust: 12.97 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'd' },
      dt_txt: '2022-01-16 15:00:00',
    },
    {
      dt: setDate(),
      main: {
        temp: 25.61,
        feels_like: 17.13,
        temp_min: 25.61,
        temp_max: 25.61,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 996,
        humidity: 38,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' },
      ],
      clouds: { all: 0 },
      wind: { speed: 7.9, deg: 109, gust: 13 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'd' },
      dt_txt: '2022-01-16 18:00:00',
    },
    {
      dt: setDate(),
      main: {
        temp: 26.8,
        feels_like: 18.01,
        temp_min: 26.8,
        temp_max: 26.8,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 992,
        humidity: 46,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' },
      ],
      clouds: { all: 0 },
      wind: { speed: 8.77, deg: 99, gust: 17.87 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'd' },
      dt_txt: '2022-01-16 21:00:00',
    },
    {
      dt: setDate(),
      main: {
        temp: 23.32,
        feels_like: 14.41,
        temp_min: 23.32,
        temp_max: 23.32,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 991,
        humidity: 53,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      clouds: { all: 31 },
      wind: { speed: 7.81, deg: 118, gust: 19.28 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-01-17 00:00:00',
    },
    {
      dt: setDate(),
      main: {
        temp: 23.99,
        feels_like: 16.83,
        temp_min: 23.99,
        temp_max: 23.99,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 989,
        humidity: 54,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 5.86, deg: 114, gust: 15.14 },
      visibility: 10000,
      pop: 0.15,
      sys: { pod: 'n' },
      dt_txt: '2022-01-17 03:00:00',
    },
    {
      dt: setDate(),
      main: {
        temp: 21.65,
        feels_like: 11.25,
        temp_min: 21.65,
        temp_max: 21.65,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 984,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [{ id: 601, main: 'Snow', description: 'snow', icon: '13n' }],
      clouds: { all: 100 },
      wind: { speed: 9.44, deg: 56, gust: 17.47 },
      visibility: 174,
      pop: 0.83,
      snow: { '3h': 2.99 },
      sys: { pod: 'n' },
      dt_txt: '2022-01-17 06:00:00',
    },
    {
      dt: setDate(),
      main: {
        temp: 20.46,
        feels_like: 9.28,
        temp_min: 20.46,
        temp_max: 20.46,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 980,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [{ id: 601, main: 'Snow', description: 'snow', icon: '13n' }],
      clouds: { all: 100 },
      wind: { speed: 10.25, deg: 46, gust: 22.84 },
      visibility: 123,
      pop: 1,
      snow: { '3h': 11.38 },
      sys: { pod: 'n' },
      dt_txt: '2022-01-17 09:00:00',
    },
    {
      dt: setDate(),
      main: {
        temp: 23.41,
        feels_like: 11.32,
        temp_min: 23.41,
        temp_max: 23.41,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 977,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [
        { id: 602, main: 'Snow', description: 'heavy snow', icon: '13n' },
      ],
      clouds: { all: 100 },
      wind: { speed: 13.38, deg: 58, gust: 29.66 },
      visibility: 293,
      pop: 1,
      snow: { '3h': 17.15 },
      sys: { pod: 'n' },
      dt_txt: '2022-01-17 12:00:00',
    },
    {
      dt: setDate(),
      main: {
        temp: 25.07,
        feels_like: 14.32,
        temp_min: 25.07,
        temp_max: 25.07,
        pressure: 999,
        sea_level: 999,
        grnd_level: 976,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [{ id: 601, main: 'Snow', description: 'snow', icon: '13d' }],
      clouds: { all: 100 },
      wind: { speed: 11.48, deg: 14, gust: 21.47 },
      visibility: 147,
      pop: 1,
      snow: { '3h': 4.8 },
      sys: { pod: 'd' },
      dt_txt: '2022-01-17 15:00:00',
    },
    {
      dt: setDate(),
      main: {
        temp: 25.61,
        feels_like: 14.99,
        temp_min: 25.61,
        temp_max: 25.61,
        pressure: 999,
        sea_level: 999,
        grnd_level: 976,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [{ id: 601, main: 'Snow', description: 'snow', icon: '13d' }],
      clouds: { all: 100 },
      wind: { speed: 11.52, deg: 340, gust: 17.36 },
      visibility: 200,
      pop: 1,
      snow: { '3h': 1.54 },
      sys: { pod: 'd' },
      dt_txt: '2022-01-17 18:00:00',
    },
    {
      dt: setDate(),
      main: {
        temp: 24.89,
        feels_like: 14.99,
        temp_min: 24.89,
        temp_max: 24.89,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 977,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        { id: 600, main: 'Snow', description: 'light snow', icon: '13d' },
      ],
      clouds: { all: 100 },
      wind: { speed: 9.86, deg: 307, gust: 18.39 },
      visibility: 855,
      pop: 0.98,
      snow: { '3h': 0.57 },
      sys: { pod: 'd' },
      dt_txt: '2022-01-17 21:00:00',
    },
    {
      dt: setDate(),
      main: {
        temp: 24.82,
        feels_like: 14.38,
        temp_min: 24.82,
        temp_max: 24.82,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 979,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        { id: 600, main: 'Snow', description: 'light snow', icon: '13n' },
      ],
      clouds: { all: 100 },
      wind: { speed: 10.8, deg: 301, gust: 22.12 },
      visibility: 7492,
      pop: 0.93,
      snow: { '3h': 0.38 },
      sys: { pod: 'n' },
      dt_txt: '2022-01-18 00:00:00',
    },
    {
      dt: setDate(),
      main: {
        temp: 21.15,
        feels_like: 9.79,
        temp_min: 21.15,
        temp_max: 21.15,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 982,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 10.83, deg: 282, gust: 23.98 },
      visibility: 10000,
      pop: 0.21,
      sys: { pod: 'n' },
      dt_txt: '2022-01-18 03:00:00',
    },
    {
      dt: setDate(),
      main: {
        temp: 20.16,
        feels_like: 8.73,
        temp_min: 20.16,
        temp_max: 20.16,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 983,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: { all: 88 },
      wind: { speed: 10.54, deg: 274, gust: 24.18 },
      visibility: 6601,
      pop: 0.24,
      sys: { pod: 'n' },
      dt_txt: '2022-01-18 06:00:00',
    },
    {
      dt: setDate(),
      main: {
        temp: 24.22,
        feels_like: 12.07,
        temp_min: 24.22,
        temp_max: 24.22,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 984,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        { id: 600, main: 'Snow', description: 'light snow', icon: '13n' },
      ],
      clouds: { all: 99 },
      wind: { speed: 13.98, deg: 273, gust: 27.72 },
      visibility: 2534,
      pop: 0.48,
      snow: { '3h': 0.26 },
      sys: { pod: 'n' },
      dt_txt: '2022-01-18 09:00:00',
    },
    {
      dt: setDate(),
      main: {
        temp: 25.03,
        feels_like: 12.43,
        temp_min: 25.03,
        temp_max: 25.03,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 987,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        { id: 600, main: 'Snow', description: 'light snow', icon: '13n' },
      ],
      clouds: { all: 99 },
      wind: { speed: 15.64, deg: 271, gust: 29.19 },
      visibility: 10000,
      pop: 0.47,
      snow: { '3h': 0.13 },
      sys: { pod: 'n' },
      dt_txt: '2022-01-18 12:00:00',
    },
    {
      dt: setDate(),
      main: {
        temp: 25.81,
        feels_like: 13.55,
        temp_min: 25.81,
        temp_max: 25.81,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 990,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: { all: 92 },
      wind: { speed: 15.26, deg: 275, gust: 26.11 },
      visibility: 10000,
      pop: 0.32,
      sys: { pod: 'd' },
      dt_txt: '2022-01-18 15:00:00',
    },
    {
      dt: setDate(),
      main: {
        temp: 28.22,
        feels_like: 17.37,
        temp_min: 28.22,
        temp_max: 28.22,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 991,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        { id: 600, main: 'Snow', description: 'light snow', icon: '13d' },
      ],
      clouds: { all: 93 },
      wind: { speed: 13.47, deg: 275, gust: 19.77 },
      visibility: 7354,
      pop: 0.32,
      snow: { '3h': 0.23 },
      sys: { pod: 'd' },
      dt_txt: '2022-01-18 18:00:00',
    },
  ],
  city: {
    id: 5110629,
    name: 'Buffalo',
    coord: { lat: 42.8908, lon: -78.8529 },
    country: 'US',
    population: 261310,
    timezone: -18000,
    sunrise: setHours(Date.now(), 7).getTime(),
    sunset: setHours(Date.now(), 17).getTime(),
  },
};
