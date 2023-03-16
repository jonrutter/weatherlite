import React from 'react';

interface Props
  extends React.PropsWithChildren<React.ComponentPropsWithoutRef<'button'>> {
  className?: string;
}

export const PrimaryButton: React.FC<Props> = ({
  className = '',
  disabled,
  children,
  ...rest
}) => {
  return (
    <button
      disabled={disabled}
      {...rest}
      className={`text-white font-bold text-base py-2 px-4 inline rounded-md transition-all ${
        disabled
          ? 'bg-slate-500 cursor-default'
          : 'bg-slate-900 cursor-pointer hover:bg-slate-900/70'
      } ${className}`}
    >
      {children}
    </button>
  );
};

export const SecondaryButton: React.FC<Props> = ({
  className = '',
  children,
  ...rest
}) => (
  <button
    {...rest}
    className="py-2 px-4 bg-a11y rounded-md shadow-lg text-sm font-bold"
  >
    {children}
  </button>
);
