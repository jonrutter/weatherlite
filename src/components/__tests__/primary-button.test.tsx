import React from 'react';
import { render, screen } from '@testing-library/react';

// component
import { PrimaryButton } from '../buttons';

const Button = <PrimaryButton>Test Button</PrimaryButton>;
const ButtonWithProps = (
  <PrimaryButton
    disabled
    aria-label="disabled button"
    className="test-className"
  >
    Test Button
  </PrimaryButton>
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
    expect(button).toHaveClass('test-className');
  });
  it('correctly styles disabled buttons', () => {
    render(ButtonWithProps);
    const button = screen.getByText(/test button/i);
    expect(button).toBeDisabled();
    expect(button).toHaveClass('cursor-default');
  });
  it('correctly styles non-disabled buttons', () => {
    render(Button);
    const button = screen.getByText(/test button/i);
    expect(button).not.toBeDisabled();
    expect(button).toHaveClass('cursor-pointer');
  });
});
