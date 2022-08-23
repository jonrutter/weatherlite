import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import { Footer } from '../footer';
import userEvent from '@testing-library/user-event';

const Component = (
  <div data-testid="wrapper">
    <Footer />
  </div>
);

describe('Footer', () => {
  it('renders the correct content', () => {
    render(Component);
    const socialLink = screen.getByText(/jon rutter/i);
    screen.getByText(/code/i);
    const codeLink = screen.getByTestId('footer-code-link');
    screen.getByText(/privacy policy/i);
    expect(socialLink).toHaveAttribute('href');
    expect(codeLink).toHaveAttribute('href');
    expect(screen.getByTestId('wrapper')).toContainHTML('footer');
  });
  it('opens the privacy dialog', async () => {
    render(Component);
    const privacyButton = screen.getByText(/privacy policy/i);

    // clicking the button labeled 'privacy policy' should open a modal
    await userEvent.click(privacyButton);
    await waitFor(() => {
      screen.getByTestId('privacy-dialog');
    });

    // clicking the close button should close the modal
    await userEvent.click(screen.getByText(/got it/i));
    await waitFor(() => {
      expect(screen.queryByTestId('privacy-dialog')).not.toBeInTheDocument();
    });
  });
});
