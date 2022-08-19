import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// date fns
import format from 'date-fns/format';
import addDays from 'date-fns/addDays';

// component
import { WeatherAlert } from '../weather-alert';

// types
import type { WeatherAlert as WeatherAlertType } from '../../types';

// test data
const testStartDate = Math.floor(Date.now() / 1000);
const testEndDate = Math.floor(
  addDays(testStartDate * 1000, 1).getTime() / 1000
);

const testAlert: WeatherAlertType = {
  event: 'Test Alert',
  description: 'This is a test of a weather alert.',
  sender_name: 'Test Sender',
  start: testStartDate,
  end: testEndDate,
};

const Component = <WeatherAlert alert={testAlert} />;

describe('WeatherAlert', () => {
  it('opens and closes correctly', async () => {
    // the internal component UI should allow closing and opening the dialog
    render(Component);
    // the information should not immediately be in the dom
    expect(
      screen.queryByText(testAlert.description as string)
    ).not.toBeInTheDocument();
    // click the toggle button
    // after pressing the open button, the dialog should open
    await userEvent.click(screen.getByText(/test alert/i));
    await waitFor(() => {
      screen.getByText(/close/i);
    });

    // after pressing the close button, the dialog should close
    await userEvent.click(screen.getByText(/close/i));
    await waitFor(() => {
      expect(screen.queryByText(/close/i)).not.toBeInTheDocument();
    });
  });
  it('correctly allows the dialog to close', async () => {
    // ensures proper `<Dialog />` functionality (e.g., pressing ESCAPE closes the dialog)
    render(Component);
    // after pressing the open button, the dialog should open
    await userEvent.click(screen.getByText(/test alert/i));
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
  it('renders the correct information', async () => {
    render(Component);
    await userEvent.click(screen.getByText(/test alert/i));

    // wait for the dialog to be open
    await waitFor(() => {
      screen.getByText(/issued by/i);
    });

    // the dates should be visible and correct
    // formatting the dates as expected in the dialog
    const displayStartDate = format(new Date(testStartDate * 1000), 'p, cccc');
    const displayEndDate = format(new Date(testEndDate * 1000), 'p, cccc');
    // selecting the `<time>` elements, which should contain a formatted string representing the start/end dates respectively
    const startTimeEle = screen.getByText(displayStartDate);
    const endTimeEle = screen.getByText(displayEndDate);
    // for accessibility the `<time>` elements should have a matching `datetime` attribute, which is an ISO string representing the current time
    expect(startTimeEle).toHaveAttribute(
      'datetime',
      new Date(testStartDate * 1000).toISOString()
    );
    expect(endTimeEle).toHaveAttribute(
      'datetime',
      new Date(testEndDate * 1000).toISOString()
    );
    // the description should be visible and correct
    screen.getByText(testAlert.description as string);
    // the sender information should be visible and correct
    screen.getByText(testAlert.sender_name as string);
  });
  it('correctly handles empty data', () => {
    render(
      <div data-testid="wrapper">
        <WeatherAlert alert={{}} />
      </div>
    );
    expect(screen.getByTestId('wrapper')).toBeEmptyDOMElement();
  });
});
