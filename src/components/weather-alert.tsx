import React, { useState } from 'react';

// types
import type { WeatherAlert as WeatherAlertType } from '../types';
import { SecondaryButton } from './buttons';

// components
import { Dialog } from './dialog';
import { ExclamationIcon } from '@heroicons/react/solid';

// util funcs
import format from 'date-fns/format';

const SubTitle: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <h3 className="text-base font-bold mb-1">{children}</h3>
);

// prop types
type Props = {
  alert: WeatherAlertType;
};

export const WeatherAlert: React.FC<Props> = ({ alert }) => {
  const [open, setOpen] = useState(false);
  if (!alert) return null;
  const { description, event, sender_name: senderName, start, end } = alert;
  if (!event || !description || !senderName || !start || !end) return null;

  const startDate = new Date(start * 1000);
  const endDate = new Date(end * 1000);

  return (
    <>
      <SecondaryButton onClick={() => setOpen(true)}>
        <ExclamationIcon className="w-5 h-5 inline-block" /> {event}
      </SecondaryButton>
      <Dialog open={open} onClose={() => setOpen(false)} title={event}>
        <div className="text-sm">
          <div className="mb-4">
            <SubTitle>Issued by</SubTitle>
            <p>{senderName}</p>
          </div>
          <div className="mb-4">
            <SubTitle>Start</SubTitle>
            <time dateTime={startDate.toISOString()}>
              {format(startDate, 'p, cccc')}
            </time>
          </div>
          <div className="mb-4">
            <SubTitle>End</SubTitle>
            <time dateTime={endDate.toISOString()}>
              {format(endDate, 'p, cccc')}
            </time>
          </div>
          <div className="mb-8">
            <SubTitle>Description</SubTitle>
            {description}
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => setOpen(false)}
              className="bg-slate-900 hover:opacity-70 transition-all text-white py-1 px-3 rounded-md shadow-md"
            >
              Close
            </button>
          </div>
        </div>
      </Dialog>
    </>
  );
};
