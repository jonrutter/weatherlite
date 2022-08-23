import React from 'react';
import { render, screen } from '@testing-library/react';

// component
import { HourlyForecast } from '../hourly-forecast';

// types
import type { HourlyForecastType } from '../../types';

const testData: HourlyForecastType[] = [
  {
    dt: 1660240800,
    temp: 77.4,
    feels_like: 77.04,
    pressure: 1016,
    humidity: 47,
    dew_point: 55.62,
    uvi: 6.45,
    clouds: 0,
    visibility: 10000,
    wind_speed: 11.18,
    wind_deg: 340,
    wind_gust: 12.64,
    weather: [
      { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' },
    ],
    pop: 0,
  },
  {
    dt: 1660244400,
    temp: 77.88,
    feels_like: 77.43,
    pressure: 1016,
    humidity: 44,
    dew_point: 54.23,
    uvi: 5.3,
    clouds: 0,
    visibility: 10000,
    wind_speed: 10.92,
    wind_deg: 340,
    wind_gust: 13.31,
    weather: [
      {
        id: 202,
        main: 'Thunderstorm',
        description: 'thunderstorm with heavy rain',
        icon: '01d',
      },
    ],
    pop: 0.1,
  },
  {
    dt: 1660248000,
    temp: 79.28,
    feels_like: 77.68,
    pressure: 1016,
    humidity: 40,
    dew_point: 52,
    uvi: 3.79,
    clouds: 0,
    visibility: 10000,
    wind_speed: 11.3,
    wind_deg: 347,
    wind_gust: 15.3,
    weather: [
      { id: 602, main: 'Snow', description: 'heavy snow', icon: '01d' },
    ],
    pop: 0.3,
  },
];

const Component = <HourlyForecast forecast={testData} />;

describe('Hourly forecast', () => {
  it('renders the correct content', () => {
    render(Component);
    // first hour
    screen.getByText(/2:00 PM/i);
    screen.getByText(/77°/i);
    screen.getByText('0%');
    screen.getByLabelText('clear weather (day)');
    // second hour
    screen.getByText(/3:00 PM/i);
    screen.getByText(/78°/i);
    screen.getByText('10%');
    screen.getByLabelText('thunderstorm');
    // third hour
    screen.getByText(/4:00 PM/i);
    screen.getByText(/79°/i);
    screen.getByText('30%');
    screen.getByLabelText('snow');
  });
  it('correctly handles empty input', () => {
    render(
      <div data-testid="wrapper">
        <HourlyForecast forecast={[]} />
      </div>
    );
    expect(screen.getByTestId('wrapper')).toBeEmptyDOMElement();
  });
});
