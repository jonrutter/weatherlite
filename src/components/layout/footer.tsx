import React, { useState } from 'react';

// icons
import { SiGithub } from 'react-icons/si';

// privacy dialog
import { PrivacyDialog } from '../privacy-dialog';

export const Footer = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <footer className="w-full px-4 md:px-8 lg:px-20 py-8 flex flex-col items-start sm:items-center justify-center mt-8 space-y-6 sm:space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center space-x-0 sm:space-x-4 space-y-6 sm:space-y-0">
        <span>
          Built with 💝 by{' '}
          <a
            href="https://github.com/rutterjt"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Jon Rutter
          </a>
        </span>
        <span className="hidden sm:inline-block">•</span>
        <a
          href="https://github.com/rutterjt/weather-app"
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
          data-testid="footer-code-link"
        >
          <span>
            View project code{' '}
            <SiGithub className="max-w-5 h-auto inline" aria-hidden />
          </span>
        </a>
      </div>
      <div>
        <button onClick={() => setDialogOpen(true)} className="hover:underline">
          Privacy Policy
        </button>
        <PrivacyDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />
      </div>
    </footer>
  );
};
