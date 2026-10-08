import React from 'react';
import { EVENT_STATUS_ENUM } from '../../data/eventConfig';

export const StatusBadge = ({ status, className = '' }) => {
  const statusMap = {
    [EVENT_STATUS_ENUM.REGISTRATIONS_OPEN]: {
      label: 'Registrations Open',
      dotColor: 'bg-emerald-400',
      textColor: 'text-emerald-300',
      bgColor: 'bg-emerald-950/40 border-emerald-800/50',
      ping: true,
    },
    [EVENT_STATUS_ENUM.COMING_SOON]: {
      label: 'Coming Soon',
      dotColor: 'bg-amber-400',
      textColor: 'text-amber-300',
      bgColor: 'bg-amber-950/40 border-amber-800/50',
      ping: false,
    },
    [EVENT_STATUS_ENUM.REGISTRATIONS_CLOSED]: {
      label: 'Registrations Closed',
      dotColor: 'bg-rose-400',
      textColor: 'text-rose-300',
      bgColor: 'bg-rose-950/40 border-rose-800/50',
      ping: false,
    },
    [EVENT_STATUS_ENUM.SHORTLISTING]: {
      label: 'Shortlisting in Progress',
      dotColor: 'bg-sky-400',
      textColor: 'text-sky-300',
      bgColor: 'bg-sky-950/40 border-sky-800/50',
      ping: true,
    },
    [EVENT_STATUS_ENUM.LIVE]: {
      label: 'Hackathon Live Now',
      dotColor: 'bg-emerald-400',
      textColor: 'text-emerald-300',
      bgColor: 'bg-emerald-950/40 border-emerald-800/50',
      ping: true,
    },
    [EVENT_STATUS_ENUM.COMPLETED]: {
      label: 'Event Completed',
      dotColor: 'bg-neutral-400',
      textColor: 'text-neutral-300',
      bgColor: 'bg-neutral-900 border-neutral-800',
      ping: false,
    },
  };

  const current = statusMap[status] || statusMap[EVENT_STATUS_ENUM.COMING_SOON];

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border ${current.bgColor} ${current.textColor} ${className}`}>
      <span className="relative flex h-2 w-2">
        {current.ping && (
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${current.dotColor} opacity-75`} />
        )}
        <span className={`relative inline-flex rounded-full h-2 w-2 ${current.dotColor}`} />
      </span>
      <span>{current.label}</span>
    </div>
  );
};
