import React, { useState } from 'react';
import { Calendar, Download, ExternalLink, X, Check } from 'lucide-react';
import { eventConfig } from '../../data/eventConfig';
import { Button } from './Button';

export const CalendarModal = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const eventTitle = `${eventConfig.eventName} (${eventConfig.shortName}) ${eventConfig.editionYear}`;
  const eventLocation = eventConfig.venue.fullAddress;
  const eventDescription = `${eventConfig.tagline}\n\nVenue: ${eventConfig.venue.name}\nWebsite: ${window?.location?.href || 'https://hft.excelmec.org'}\nContact: ${eventConfig.contact.email}`;
  
  // Format for Google Calendar (YYYYMMDDTHHmmssZ)
  // Converting 2026-01-04 09:00 IST (UTC 03:30) to UTC format
  const startUtc = "20260104T033000Z";
  const endUtc = "20260105T063000Z";

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${startUtc}/${endUtc}&details=${encodeURIComponent(eventDescription)}&location=${encodeURIComponent(eventLocation)}`;

  const handleDownloadICS = () => {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Hack For Tomorrow//Excel MEC//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      `SUMMARY:${eventTitle}`,
      `DESCRIPTION:${eventDescription.replace(/\n/g, '\\n')}`,
      `LOCATION:${eventLocation}`,
      `DTSTART:${startUtc}`,
      `DTEND:${endUtc}`,
      `STATUS:CONFIRMED`,
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `HackForTomorrow_${eventConfig.editionYear}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md border rounded-2xl p-6 shadow-2xl"
        style={{
          backgroundColor: '#1A0614',
          borderColor: 'rgba(214, 26, 112, 0.45)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 30px rgba(214, 26, 112, 0.2)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 transition-colors rounded-lg"
          style={{ color: '#C4A5B5' }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#FAEEF4'; e.currentTarget.style.backgroundColor = 'rgba(214, 26, 112, 0.15)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = '#C4A5B5'; e.currentTarget.style.backgroundColor = 'transparent'; }}
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-xl border flex items-center justify-center"
            style={{
              backgroundColor: 'rgba(214, 26, 112, 0.15)',
              borderColor: 'rgba(214, 26, 112, 0.4)',
              color: '#F42E88',
            }}
          >
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold font-display" style={{ color: '#FAEEF4' }}>Add to Calendar</h3>
            <p className="text-xs font-mono" style={{ color: '#C4A5B5' }}>{eventConfig.dates.display}</p>
          </div>
        </div>

        <p className="text-sm mb-6 leading-relaxed" style={{ color: '#C4A5B5' }}>
          Save the 24-hour hackathon dates to your calendar so you never miss team check-in, kickoff, or mentorship rounds.
        </p>

        <div className="space-y-3">
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full px-4 py-3 rounded-xl border text-sm font-medium transition-all"
            style={{
              backgroundColor: '#260A1C',
              borderColor: 'rgba(93, 27, 64, 0.6)',
              color: '#FAEEF4',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(214, 26, 112, 0.6)';
              e.currentTarget.style.backgroundColor = 'rgba(214, 26, 112, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(93, 27, 64, 0.6)';
              e.currentTarget.style.backgroundColor = '#260A1C';
            }}
          >
            <span className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4" style={{ color: '#F42E88' }} />
              Google Calendar
            </span>
            <span className="text-xs" style={{ color: '#C4A5B5' }}>Open in Web →</span>
          </a>

          <button
            type="button"
            onClick={handleDownloadICS}
            className="flex items-center justify-between w-full px-4 py-3 rounded-xl border text-sm font-medium transition-all cursor-pointer"
            style={{
              backgroundColor: '#260A1C',
              borderColor: 'rgba(93, 27, 64, 0.6)',
              color: '#FAEEF4',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(214, 26, 112, 0.6)';
              e.currentTarget.style.backgroundColor = 'rgba(214, 26, 112, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(93, 27, 64, 0.6)';
              e.currentTarget.style.backgroundColor = '#260A1C';
            }}
          >
            <span className="flex items-center gap-2">
              {downloaded ? (
                <Check className="w-4 h-4" style={{ color: '#10B981' }} />
              ) : (
                <Download className="w-4 h-4" style={{ color: '#F42E88' }} />
              )}
              {downloaded ? 'Downloaded .ICS File!' : 'Download .iCal / Outlook File'}
            </span>
            <span className="text-xs" style={{ color: '#C4A5B5' }}>Apple / Outlook</span>
          </button>
        </div>

        <div className="mt-6 pt-4 border-t flex justify-end" style={{ borderColor: 'rgba(93, 27, 64, 0.5)' }}>
          <Button variant="ghost" size="sm" onClick={onClose}>
            Done
          </Button>
        </div>
      </div>
    </div>
  );
};

