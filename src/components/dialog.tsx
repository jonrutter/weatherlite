import React from 'react';

// components
import { Transition, Dialog as HUIDialog } from '@headlessui/react';

// prop types
type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
};

export const Dialog: React.FC<React.PropsWithChildren<Props>> = ({
  open,
  onClose,
  title,
  children,
}) => (
  <Transition show={open} as={React.Fragment}>
    <HUIDialog className="relative z-10" onClose={onClose}>
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
            <HUIDialog.Panel
              className="w-full max-w-md overflow-hidden rounded-2xl bg-white text-slate-900 p-6 text-left align-middle shadow-xl transition-all"
              data-testid="privacy-dialog"
            >
              <HUIDialog.Title
                as="h2"
                className="text-2xl font-bold text-slate-900 mb-4"
              >
                {title}
              </HUIDialog.Title>
              {children}
            </HUIDialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </HUIDialog>
  </Transition>
);
