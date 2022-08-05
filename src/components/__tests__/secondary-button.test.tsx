import React from 'react';
import { render, screen } from '@testing-library/react';

// component
import { SecondaryButton } from '../buttons';

const Button = <SecondaryButton disabled>Test Button</SecondaryButton>;
const ButtonWithProps = (
  <SecondaryButton disabled aria-label="disabled button">
    Test Button
  </SecondaryButton>
);

describe('Primary button', () => {
  it('renders the correct content', () => {
    render(Button);
    screen.getByText(/test button/i);
  });
  it('correctly forwards props', () => {
    render(ButtonWithProps);
    const button = screen.getByText(/test button/i);
    expect(button).toBeDisabled();
    expect(button).toHaveAccessibleName('disabled button');
  });
});
