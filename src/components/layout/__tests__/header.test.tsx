import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../header';

const Component = (
  <div data-testid="wrapper">
    <Header />
  </div>
);

describe('Header', () => {
  it('renders the correct content', () => {
    render(Component);
    screen.getByText(/weatherlite/i);
    expect(screen.getByTestId('wrapper')).toContainHTML('header');
  });
});
