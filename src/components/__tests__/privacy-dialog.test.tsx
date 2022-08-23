import React from 'react';
import { render, screen } from '@testing-library/react';

import { PrivacyDialog } from '../privacy-dialog';

const Component = <PrivacyDialog open={true} onClose={() => null} />;

describe('Privacy dialog', () => {
  it('renders the correct content', () => {
    render(Component);
    // title
    screen.getByText(/privacy policy/i);
    // close button
    screen.getByText(/got it/i);

    // ensuring that the privacy policy includes certain important topics
    expect(screen.getAllByText(/free and open-source/i)).not.toHaveLength(0);
    expect(screen.getAllByText(/cookies/i)).not.toHaveLength(0);
    expect(screen.getAllByText(/local storage/i)).not.toHaveLength(0);
    expect(screen.getAllByText(/personal data/i)).not.toHaveLength(0);
  });
});
