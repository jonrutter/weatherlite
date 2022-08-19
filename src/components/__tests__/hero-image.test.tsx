import React from 'react';
import { render, screen } from '@testing-library/react';

// component
import { HeroImage } from '../hero-image';

describe('WeatherImage', () => {
  it('renders image of thunderstorm', () => {
    render(<HeroImage event="thunderstorm" timeOfDay="day" />);
    screen.getByTestId('thunderstorm');
  });
  it('renders image of rain', () => {
    render(<HeroImage event="rain" timeOfDay="day" />);
    screen.getByTestId('rain');
  });
  it('renders image of winter mix', () => {
    render(<HeroImage event="winterMix" timeOfDay="day" />);
    screen.getByTestId('winterMix');
  });
  it('renders image of snow', () => {
    render(<HeroImage event="snow" timeOfDay="day" />);
    screen.getByTestId('snow');
  });
  it('renders image of hail', () => {
    render(<HeroImage event="hail" timeOfDay="day" />);
    screen.getByTestId('hail');
  });
  it('renders image of atmospheric weather', () => {
    render(<HeroImage event="atmospheric" timeOfDay="day" />);
    screen.getByTestId('atmospheric');
  });
  it('renders image of clear sun', () => {
    render(<HeroImage event="clear" timeOfDay="day" />);
    screen.getByTestId('sun');
  });
  it('renders image of clear moon', () => {
    render(<HeroImage event="clear" timeOfDay="night" />);
    screen.getByTestId('moonWithStars');
  });
  it('renders image of cloudy sun', () => {
    render(<HeroImage event="lightClouds" timeOfDay="day" />);
    screen.getByTestId('sunWithClouds');
  });
  it('renders image of cloudy moon', () => {
    render(<HeroImage event="lightClouds" timeOfDay="night" />);
    screen.getByTestId('moonWithClouds');
  });
  it('renders image of light clouds', () => {
    render(<HeroImage event="clouds" timeOfDay="day" />);
    screen.getByTestId('lightClouds');
  });
  it('renders image of heavy clouds', () => {
    render(<HeroImage event="heavyClouds" timeOfDay="day" />);
    screen.getByTestId('heavyClouds');
  });
  it('renders image of rainbow', () => {
    render(<HeroImage event="rainbow" timeOfDay="day" />);
    screen.getByTestId('rainbow');
  });
});
