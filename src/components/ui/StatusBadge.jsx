import React from 'react';
import { EVENT_STATUS_ENUM } from '../../data/eventConfig';

export const StatusBadge = ({ status, className = '' }) => {
  const statusMap = {
    [EVENT_STATUS_ENUM.REGISTRATIONS_OPEN]: {
      label: 'Registrations Open',
      dotHex: '#F42E88',
      textColor: '#FAEEF4',
      bgStyle: { backgroundColor: 'rgba(214, 26, 112, 0.15)', borderColor: 'rgba(214, 26, 112, 0.45)' },
      ping: true,
    },
    [EVENT_STATUS_ENUM.COMING_SOON]: {
      label: 'Coming Soon',
      dotHex: '#F59E0B',
      textColor: '#FCD34D',
      bgStyle: { backgroundColor: 'rgba(245, 158, 11, 0.15)', borderColor: 'rgba(245, 158, 11, 0.35)' },
      ping: false,
    },
    [EVENT_STATUS_ENUM.REGISTRATIONS_CLOSED]: {
      label: 'Registrations Closed',
      dotHex: '#F43F5E',
      textColor: '#FECDD3',
      bgStyle: { backgroundColor: 'rgba(244, 63, 94, 0.15)', borderColor: 'rgba(244, 63, 94, 0.35)' },
      ping: false,
    },
    [EVENT_STATUS_ENUM.SHORTLISTING]: {
      label: 'Shortlisting in Progress',
      dotHex: '#D61A70',
      textColor: '#FAEEF4',
      bgStyle: { backgroundColor: 'rgba(150, 16, 66, 0.2)', borderColor: 'rgba(214, 26, 112, 0.45)' },
      ping: true,
    },
    [EVENT_STATUS_ENUM.LIVE]: {
      label: 'Hackathon Live Now',
      dotHex: '#10B981',
      textColor: '#6EE7B7',
      bgStyle: { backgroundColor: 'rgba(16, 185, 129, 0.15)', borderColor: 'rgba(16, 185, 129, 0.35)' },
      ping: true,
    },
    [EVENT_STATUS_ENUM.COMPLETED]: {
      label: 'Event Completed',
      dotHex: '#9CA3AF',
      textColor: '#D1D5DB',
      bgStyle: { backgroundColor: 'rgba(75, 85, 99, 0.15)', borderColor: 'rgba(75, 85, 99, 0.35)' },
      ping: false,
    },
  };

  const current = statusMap[status] || statusMap[EVENT_STATUS_ENUM.COMING_SOON];

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border backdrop-blur-md ${className}`}
      style={{
        ...current.bgStyle,
        color: current.textColor,
      }}
    >
      <span className="relative flex h-2 w-2">
        {current.ping && (
          <span
            className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
            style={{ backgroundColor: current.dotHex }}
          />
        )}
        <span
          className="relative inline-flex rounded-full h-2 w-2"
          style={{ backgroundColor: current.dotHex }}
        />
      </span>
      <span>{current.label}</span>
    </div>
  );
};

