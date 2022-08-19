import React from 'react';
import { screen, render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// component
import { WeatherDetails } from '../weather-details';

// types
import type { CurrentWeather } from '../../types';

// test data
const testDate = Math.floor(Date.now() / 1000); // OpenWeather uses unix seconds instead of miliseconds for their dates

const completeTestData: CurrentWeather = {
  dt: testDate,
  sunrise: testDate,
  sunset: testDate,
  temp: 75.61,
  feels_like: 75.65,
  pressure: 1019,
  humidity: 59,
  dew_point: 60.3,
  uvi: 6.89,
  clouds: 75,
  visibility: 10000,
  wind_speed: 8.05,
  wind_deg: 230,
  wind_gust: 10,
  rain: { '1h': 28 },
  snow: { '1h': 25 },
  weather: [
    { id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d' },
  ],
};

const incompleteTestData: CurrentWeather = {
  dt: testDate,
  sunrise: testDate,
  sunset: testDate,
  temp: 75.61,
  feels_like: 75.65,
  weather: [
    { id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d' },
  ],
};

describe('Weather Details', () => {
  it('opens and closes correctly', async () => {
    // the internal component UI should allow closing and opening the dialog
    render(<WeatherDetails weather={completeTestData} />);
    // the information should not immediately be in the dom
    expect(screen.queryByText(/forecast/i)).not.toBeInTheDocument();
    // click the toggle button
    // after pressing the open button, the dialog should open
    await userEvent.click(screen.getByText(/more details/i));
    await waitFor(() => {
      screen.getByText(/close/i);
    });

    // after pressing the close button, the dialog should close
    await userEvent.click(screen.getByText(/close/i));
    await waitFor(() => {
      expect(screen.queryByText(/forecast/i)).not.toBeInTheDocument();
    });
  });
  it('correctly allows the dialog to close', async () => {
    // ensures proper `<Dialog />` functionality (e.g., pressing ESCAPE closes the dialog)
    render(<WeatherDetails weather={completeTestData} />);
    // after pressing the open button, the dialog should open
    await userEvent.click(screen.getByText(/more details/i));
    await waitFor(() => {
      screen.getByText(/close/i);
    });

    // simulate pressing Escape key
    await userEvent.keyboard('{Escape}');
    // dialog should no longer be in the document
    await waitFor(() => {
      expect(screen.queryByText(/close/i)).not.toBeInTheDocument();
    });
  });
  it('correctly renders complete weather data', async () => {
    render(<WeatherDetails weather={completeTestData} />);
    // open dialog
    await userEvent.click(screen.getByText(/more details/i));
    await waitFor(() => {
      screen.getByText(/close/i);
    });

    screen.getByText('Sunrise');
    screen.getByText('Sunset');
    screen.getByText('Wind');
    screen.getByText('Gusts');
    screen.getByText('Humidity');
    screen.getByText('Rain (last hour)');
    screen.getByText('Snow (last hour)');
    screen.getByText('Cloud cover');
    screen.getByText('Dew point');
    screen.getByText('Visibility');
    screen.getByText('Max UV Index');
    screen.getByText('Pressure');
  });
  it('correctly handles incomplete weather data', async () => {
    render(<WeatherDetails weather={incompleteTestData} />);

    // open dialog
    await userEvent.click(screen.getByText(/more details/i));
    await waitFor(() => {
      screen.getByText(/close/i);
    });

    // these sections should not be in the table without data
    expect(screen.queryByTestId('wind')).not.toBeInTheDocument();
    expect(screen.queryByTestId('gusts')).not.toBeInTheDocument();
    expect(screen.queryByTestId('rain')).not.toBeInTheDocument();
    expect(screen.queryByTestId('snow')).not.toBeInTheDocument();
    expect(screen.queryByTestId('dew-point')).not.toBeInTheDocument();
    expect(screen.queryByTestId('visibility')).not.toBeInTheDocument();
    expect(screen.queryByTestId('uvi')).not.toBeInTheDocument();
    expect(screen.queryByTestId('pressure')).not.toBeInTheDocument();

    // these sections have a default fallback value, so they should appear in the table, but have a value of 0
    const humidityRow = screen.queryByTestId('humidity');
    expect(humidityRow).toBeInTheDocument();
    within(humidityRow as HTMLElement).getByText(/0/); // explicitly typing cloudRow as element, since the previous statement will cause the test to fail if cloudRow is not an element
    const cloudRow = screen.queryByTestId('clouds');
    expect(cloudRow).toBeInTheDocument();
    within(cloudRow as HTMLElement).getByText(/0/); // explicitly typing cloudRow as element, since the previous statement will cause the test to fail if cloudRow is not an element
  });
  it('correctly handles invalid weather data', () => {
    render(
      <div data-testid="wrapper">
        {/* @ts-ignore */}
        <WeatherDetails />
      </div>
    );
    expect(screen.getByTestId('wrapper')).toBeEmptyDOMElement();
  });
});
