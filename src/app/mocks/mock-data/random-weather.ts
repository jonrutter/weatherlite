type WeatherConditions = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

const weatherEvents: WeatherConditions[] = [
  {
    id: 211,
    main: 'Thunderstorm',
    description: 'thunderstorm',
    icon: '',
  },
  {
    id: 311,
    main: 'Drizzle',
    description: 'drizzle rain',
    icon: '',
  },
  {
    id: 501,
    main: 'Rain',
    description: 'moderate rain',
    icon: '',
  },
  {
    id: 511,
    main: 'Rain',
    description: 'freezing rain',
    icon: '',
  },
  {
    id: 613,
    main: 'Snow',
    description: 'shower sleet',
    icon: '',
  },
  {
    id: 616,
    main: 'Snow',
    description: 'Rain and snow',
    icon: '',
  },
  {
    id: 601,
    main: 'Snow',
    description: 'snow',
    icon: '',
  },
  {
    id: 741,
    main: 'Fog',
    description: 'fog',
    icon: '',
  },
  {
    id: 800,
    main: 'Clear',
    description: 'clear sky',
    icon: '',
  },
  {
    id: 801,
    main: 'Clouds',
    description: 'few clouds: 11-25%',
    icon: '',
  },
  {
    id: 802,
    main: 'Clouds',
    description: 'Scattered clouds: 25-50%',
    icon: '',
  },
  {
    id: 803,
    main: 'Clouds',
    description: 'broken clouds: 51-84%',
    icon: '',
  },
  {
    id: 804,
    main: 'Clouds',
    description: 'overcast clouds: 85-100%',
    icon: '',
  },
];

export const getRandomWeatherEvent = () => {
  const index = Math.floor(Math.random() * weatherEvents.length);
  return weatherEvents[index];
};
