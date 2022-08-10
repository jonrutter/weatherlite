import React from 'react';
import { render, screen } from '@testing-library/react';

// date fns
import getDay from 'date-fns/getDay';

// component
import { DailyOverview } from '../daily-overview';

// test data
const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const currentTime = Date.now();
const currentDate = days[getDay(currentTime)];

const props = {
  code: 800,
  time: Math.floor(currentTime / 1000),
  high: 78,
  low: 68,
};

describe('Daily Overview', () => {
  it('renders the correct content', () => {
    render(<DailyOverview {...props} />);
    // it should display the current date
    screen.getByText(currentDate);
    // it should display a clear weather icon
    screen.getByLabelText('clear weather (day)');
    // it should display the high and low temperature
    screen.getByText(/78°/i);
    screen.getByText(/daily high/i);
    screen.getByText(/68°/i);
    screen.getByText(/daily low/i);
  });
  it('correctly handles invalid input', () => {
    render(
      <div data-testid="wrapper">
        <DailyOverview />
      </div>
    );
    // the component should not render if no input is passed
    expect(screen.getByTestId('wrapper')).toBeEmptyDOMElement();
  });
});
