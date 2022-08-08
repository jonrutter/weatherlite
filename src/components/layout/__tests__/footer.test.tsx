import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import { Footer } from '../footer';
import userEvent from '@testing-library/user-event';

const Component = <Footer />;

describe('Footer', () => {
  it('renders the correct content', () => {
    render(Component);
    const socialLink = screen.getByText(/jon rutter/i);
    screen.getByText(/code/i);
    const codeLink = screen.getByTestId('footer-code-link');
    screen.getByText(/privacy policy/i);
    expect(socialLink).toHaveAttribute('href');
    expect(codeLink).toHaveAttribute('href');
  });
  it('opens the privacy dialog', async () => {
    render(Component);
    const privacyButton = screen.getByText(/privacy policy/i);

    // clicking the button labeled 'privacy policy' should open a modal
    userEvent.click(privacyButton);
    await waitFor(() => {
      screen.getByTestId('privacy-dialog');
    });

    // clicking the close button should close the modal
    userEvent.click(screen.getByText(/got it/i));
    await waitFor(() => {
      expect(screen.queryByTestId('privacy-dialog')).not.toBeInTheDocument();
    });
  });
});
