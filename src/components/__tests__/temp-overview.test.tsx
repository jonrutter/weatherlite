import React from 'react';
import { screen, render, within } from '@testing-library/react';

import { TempOverview } from '../temp-overview';

const testTemp = {
  current: 50,
  feelsLike: 60,
  min: 40,
  max: 70,
};

const Component = <TempOverview {...testTemp} />;

describe('TempOverview', () => {
  it('renders the correct content', () => {
    render(Component);
    // the current temperature should match
    const current = screen.getByTestId('current-temp');
    within(current).getByText(/50°F/);
    // the max temperature should match
    const max = screen.getByTestId('max-temp');
    within(max).getByText(/70°/); // no F for min and max
    // the min temperature should match
    const min = screen.getByTestId('min-temp');
    within(min).getByText(/40°/); // no F for min and max
    // the feels like temperature should match
    screen.getByText(/feels like 60°F/i);
  });
});
