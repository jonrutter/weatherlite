import React from 'react';
import { render, screen } from '@testing-library/react';

// component
import { Spinner } from '../spinner';

describe('Spinner', () => {
  it('renders the content correctly', () => {
    render(<Spinner />);
    screen.getByTestId('loading-spinner');
    screen.getByText(/loading/i); // an accessible label should be in the document
  });
});
