import React from 'react';
import { render, screen } from '@testing-library/react';

import { Background, colors } from '../background';

describe('Background component', () => {
  it('renders correctly', () => {
    render(
      <Background>
        <h1>Hello, world!</h1>
      </Background>
    );
    screen.getByText(/hello, world/i);
    screen.getByTestId('app-background');
  });
  it('defaults to a light blue background', () => {
    render(<Background />);
    expect(screen.getByTestId('app-background')).toHaveClass(colors.lightBlue);
  });
  test('when day/clear it has lightBlue background', () => {
    render(<Background timeOfDay="day" event="clear" />);
    expect(screen.getByTestId('app-background')).toHaveClass(colors.lightBlue);
  });
  test('when twilight/clear it has yellow background', () => {
    render(<Background timeOfDay="twilight" event="clear" />);
    expect(screen.getByTestId('app-background')).toHaveClass(colors.yellow);
  });
  test('when night/clear it has darkBlue background', () => {
    render(<Background timeOfDay="night" event="clear" />);
    expect(screen.getByTestId('app-background')).toHaveClass(colors.darkBlue);
  });
  test('when day/lightClouds it has lightBlue background', () => {
    render(<Background timeOfDay="day" event="lightClouds" />);
    expect(screen.getByTestId('app-background')).toHaveClass(colors.lightBlue);
  });
  test('when twilight/lightClouds it has yellow background', () => {
    render(<Background timeOfDay="twilight" event="lightClouds" />);
    expect(screen.getByTestId('app-background')).toHaveClass(colors.yellow);
  });
  test('when night/lightClouds it has darkBlue background', () => {
    render(<Background timeOfDay="night" event="lightClouds" />);
    expect(screen.getByTestId('app-background')).toHaveClass(colors.darkBlue);
  });
  test('when day/clouds it has lightBlue background', () => {
    render(<Background timeOfDay="day" event="clouds" />);
    expect(screen.getByTestId('app-background')).toHaveClass(colors.lightBlue);
  });
  test('when twilight/clouds it has yellow background', () => {
    render(<Background timeOfDay="twilight" event="clouds" />);
    expect(screen.getByTestId('app-background')).toHaveClass(colors.yellow);
  });
  test('when night/clouds it has darkBlue background', () => {
    render(<Background timeOfDay="night" event="clouds" />);
    expect(screen.getByTestId('app-background')).toHaveClass(colors.darkBlue);
  });
  test('when day/heavyClouds it has medBlue background', () => {
    render(<Background timeOfDay="day" event="heavyClouds" />);
    expect(screen.getByTestId('app-background')).toHaveClass(colors.medBlue);
  });
  test('when twilight/heavyClouds it has darkBlue background', () => {
    render(<Background timeOfDay="twilight" event="heavyClouds" />);
    expect(screen.getByTestId('app-background')).toHaveClass(colors.darkBlue);
  });
  test('when night/heavyClouds it has darkBlue background', () => {
    render(<Background timeOfDay="night" event="heavyClouds" />);
    expect(screen.getByTestId('app-background')).toHaveClass(colors.darkBlue);
  });
  test('when day/atmospheric it has mint background', () => {
    render(<Background timeOfDay="day" event="atmospheric" />);
    expect(screen.getByTestId('app-background')).toHaveClass(colors.mint);
  });
  test('when twilight/atmospheric it has mint background', () => {
    render(<Background timeOfDay="twilight" event="atmospheric" />);
    expect(screen.getByTestId('app-background')).toHaveClass(colors.mint);
  });
  test('when night/atmospheric it has purple background', () => {
    render(<Background timeOfDay="night" event="atmospheric" />);
    expect(screen.getByTestId('app-background')).toHaveClass(colors.purple);
  });
  test('when day/snow it has teal background', () => {
    render(<Background timeOfDay="day" event="snow" />);
    expect(screen.getByTestId('app-background')).toHaveClass(colors.teal);
  });
  test('when twilight/snow it has darkTeal background', () => {
    render(<Background timeOfDay="twilight" event="snow" />);
    expect(screen.getByTestId('app-background')).toHaveClass(colors.darkTeal);
  });
  test('when night/snow it has darkTeal background', () => {
    render(<Background timeOfDay="night" event="snow" />);
    expect(screen.getByTestId('app-background')).toHaveClass(colors.darkTeal);
  });
  test('when day/hail it has teal background', () => {
    render(<Background timeOfDay="day" event="hail" />);
    expect(screen.getByTestId('app-background')).toHaveClass(colors.teal);
  });
  test('when twilight/hail it has darkTeal background', () => {
    render(<Background timeOfDay="twilight" event="hail" />);
    expect(screen.getByTestId('app-background')).toHaveClass(colors.darkTeal);
  });
  test('when night/hail it has darkTeal background', () => {
    render(<Background timeOfDay="night" event="hail" />);
    expect(screen.getByTestId('app-background')).toHaveClass(colors.darkTeal);
  });
  test('when day/winterMix it has teal background', () => {
    render(<Background timeOfDay="day" event="winterMix" />);
    expect(screen.getByTestId('app-background')).toHaveClass(colors.teal);
  });
  test('when twilight/winterMix it has darkTeal background', () => {
    render(<Background timeOfDay="twilight" event="winterMix" />);
    expect(screen.getByTestId('app-background')).toHaveClass(colors.darkTeal);
  });
  test('when night/winterMix it has darkTeal background', () => {
    render(<Background timeOfDay="night" event="winterMix" />);
    expect(screen.getByTestId('app-background')).toHaveClass(colors.darkTeal);
  });
  test('when day/rain it has medBlue background', () => {
    render(<Background timeOfDay="day" event="rain" />);
    expect(screen.getByTestId('app-background')).toHaveClass(colors.medBlue);
  });
  test('when twilight/rain it has darkBlue background', () => {
    render(<Background timeOfDay="twilight" event="rain" />);
    expect(screen.getByTestId('app-background')).toHaveClass(colors.darkBlue);
  });
  test('when night/rain it has darkBlue background', () => {
    render(<Background timeOfDay="night" event="rain" />);
    expect(screen.getByTestId('app-background')).toHaveClass(colors.darkBlue);
  });
  test('when day/thunderstorm it has purple background', () => {
    render(<Background timeOfDay="day" event="thunderstorm" />);
    expect(screen.getByTestId('app-background')).toHaveClass(colors.purple);
  });
  test('when twilight/thunderstorm it has purple background', () => {
    render(<Background timeOfDay="twilight" event="thunderstorm" />);
    expect(screen.getByTestId('app-background')).toHaveClass(colors.purple);
  });
  test('when night/thunderstorm it has purple background', () => {
    render(<Background timeOfDay="night" event="thunderstorm" />);
    expect(screen.getByTestId('app-background')).toHaveClass(colors.purple);
  });
  test('when day/rainbow it has lightBlue background', () => {
    render(<Background timeOfDay="day" event="rainbow" />);
    expect(screen.getByTestId('app-background')).toHaveClass(colors.lightBlue);
  });
  test('when twilight/rainbow it has yellow background', () => {
    render(<Background timeOfDay="twilight" event="rainbow" />);
    expect(screen.getByTestId('app-background')).toHaveClass(colors.yellow);
  });
  test('when night/rainbow it has darkBlue background', () => {
    render(<Background timeOfDay="night" event="rainbow" />);
    expect(screen.getByTestId('app-background')).toHaveClass(colors.darkBlue);
  });
});
