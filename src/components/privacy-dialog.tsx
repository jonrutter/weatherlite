import React from 'react';

// components
import { Transition, Dialog } from '@headlessui/react';

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
  <Transition show={open} as={React.Fragment}>
    <Dialog className="relative z-10" onClose={onClose}>
      <Transition.Child
        as={React.Fragment}
        enter="transition-all"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-all delay-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-slate-900/50" />
      </Transition.Child>
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Transition.Child
            as={React.Fragment}
            enter="transition-all delay-300"
            enterFrom="opacity-0 translate-y-4"
            enterTo="opacity-100 translate-y-0"
            leave="transition-all"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-4"
          >
            <Dialog.Panel
              className="w-full max-w-md overflow-hidden rounded-2xl bg-white text-slate-900 p-6 text-left align-middle shadow-xl transition-all text-sm"
              data-testid="privacy-dialog"
            >
              <Dialog.Title
                as="h2"
                className="text-2xl font-bold text-slate-900 mb-4"
              >
                Privacy Policy
              </Dialog.Title>
              <p className="mb-2">
                <Link href="https://github.com/rutterjt/weather-app">
                  Weatherlite
                </Link>{' '}
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
                Weatherlite optionally allows you to save your current location
                for faster startup times. If you choose to save your location,
                it is only stored in your personal device's{' '}
                <Link href="https://en.wikipedia.org/wiki/Web_storage">
                  local storage
                </Link>
                , and can be easily deleted through your browser settings.
              </p>
              <button
                onClick={onClose}
                className="bg-green-700 text-white py-1 px-3 rounded-md shadow-md"
              >
                Got it! 👍
              </button>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
);
