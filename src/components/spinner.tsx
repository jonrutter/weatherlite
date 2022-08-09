import React from 'react';

type Props = {
  size?: 'sm' | 'md' | 'lg';
};

export const sizes = {
  sm: 'w-[2rem] h-[2rem]',
  md: 'w-[3rem] h-[3rem]',
  lg: 'w-[5rem] h-[5rem]',
};

/**
 * Renders a spinner component to display during loading times.
 */
export const Spinner: React.FC<Props> = ({ size = 'lg' }) => (
  <div
    data-testid="loading-spinner"
    className={`rounded-full border-4 border-transparent border-t-current animate-spin ${sizes[size]}`}
  >
    <span className="sr-only">loading</span>
  </div>
);
