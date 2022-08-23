import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SearchInput } from '../search-input';

const onChange = jest.fn();

const Component = <SearchInput onChange={onChange} />;

const labelRegex = /(find|enter|search for) your (location|city)/i;

describe('Search Input', () => {
  it('renders the correct content', () => {
    render(Component);
    screen.getByText(labelRegex);
    expect(screen.getAllByLabelText(labelRegex)).not.toBe(0);
  });
  it('correctly renders the dropdown box after entering a location', async () => {
    render(Component);
    // the dropdown should not initially be in the document
    expect(screen.queryByTestId('dropdown-box')).not.toBeInTheDocument();

    // entering text in the input should bring up a dropdown box
    const input = screen.getAllByLabelText(labelRegex)[0];
    // simulate typing in input
    await userEvent.type(input, 'Buffalo');
    // wait for dropdown to render
    await waitFor(() => {
      screen.getByTestId('dropdown-box');
    });
    // before the loading starts, a 'no results found' message is displayed
    screen.getByText(/no results found/i);

    // once the api is called, a loading spinner is rendered
    await waitFor(() => {
      screen.getByText(/loading/i);
    });
    // once the api result returns, the loading spinner is unmounted and cities are displayed
    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });
    screen.getByText('Buffalo City Metropolitan Municipality, Eastern Cape');
    screen.getByText('Buffalo, New York');
    screen.getByText('Buffalo, New York');
    screen.getByText('Regional Municipality of Wood Buffalo, Alberta');
    screen.getByText('Buffalo County, Nebraska');
    screen.getByText('Buffalo Grove, Illinois');
    screen.getByText('Buffalo, Minnesota');
    const option = screen.getByText('Buffalo County, Wisconsin');

    // clicking an option should close the dropdown and select the text
    await userEvent.click(option);
    await waitFor(() => {
      expect(screen.queryByTestId('dropdown-box')).not.toBeInTheDocument();
    });
    expect(input).toHaveValue('Buffalo County, Wisconsin');
  });
});
