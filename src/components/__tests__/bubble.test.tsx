import React from 'react';
import { render, screen } from '@testing-library/react';

// component
import { Bubble } from '../bubble';
import { WiRain } from 'react-icons/wi';

const Component = (
  <Bubble>
    <WiRain
      className="w-[30px] h-[30px]"
      aria-hidden
      title="Precipitation"
      data-testid="icon"
    />
    <span className="sr-only" data-testid="a11y-text">
      Precipitation:{' '}
    </span>
    <span>1 in</span>
  </Bubble>
);

describe('Bubble', () => {
  it('renders the correct content', () => {
    render(Component);
    expect(screen.getByTestId('a11y-text')).toHaveTextContent('Precipitation:');
    screen.getByTestId('icon');
    screen.getByText(/1 in/);
  });
});
