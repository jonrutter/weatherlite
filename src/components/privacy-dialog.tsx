import React from 'react';

// components
import { Dialog } from './dialog';

// prop types
type Props = {
  open: boolean;
  onClose: () => void;
};

const Link: React.FC<React.PropsWithChildren<{ href: string }>> = ({
  href,
  children,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="underline hover:no-underline"
  >
    {children}
  </a>
);

export const PrivacyDialog: React.FC<Props> = ({ open, onClose }) => (
  <Dialog open={open} onClose={onClose} title="Privacy Policy">
    <div className="text-sm">
      <p className="mb-2">
        <Link href="https://github.com/rutterjt/weather-app">Weatherlite</Link>{' '}
        is a{' '}
        <Link href="https://en.wikipedia.org/wiki/Free_and_open-source_software#Drawbacks_compared_to_proprietary_software">
          free and open-source
        </Link>{' '}
        weather app, which prioritizes your privacy.
      </p>
      <p className="mb-2">
        Weatherlite does not use cookies, and does not store any of your
        personal data remotely.
      </p>
      <p className="mb-4">
        Weatherlite optionally allows you to save your current location for
        faster startup times. If you choose to save your location, it is only
        stored in your personal device's{' '}
        <Link href="https://en.wikipedia.org/wiki/Web_storage">
          local storage
        </Link>
        , and can be easily deleted through your browser settings.
      </p>
      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="bg-green-700 text-white py-1 px-3 rounded-md shadow-md text-base transition-all hover:opacity-70"
        >
          Got it! 👍
        </button>
      </div>
    </div>
  </Dialog>
);
