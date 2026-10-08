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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Add to Calendar</h3>
            <p className="text-xs text-neutral-400">{eventConfig.dates.display}</p>
          </div>
        </div>

        <p className="text-sm text-neutral-300 mb-6 leading-relaxed">
          Save the 24-hour hackathon dates to your calendar so you never miss team check-in, kickoff, or mentorship rounds.
        </p>

        <div className="space-y-3">
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full px-4 py-3 rounded-xl bg-neutral-800/80 border border-neutral-700/80 hover:bg-neutral-800 hover:border-neutral-600 text-white font-medium text-sm transition-colors"
          >
            <span className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-sky-400" />
              Google Calendar
            </span>
            <span className="text-xs text-neutral-400">Open in Web →</span>
          </a>

          <button
            type="button"
            onClick={handleDownloadICS}
            className="flex items-center justify-between w-full px-4 py-3 rounded-xl bg-neutral-800/80 border border-neutral-700/80 hover:bg-neutral-800 hover:border-neutral-600 text-white font-medium text-sm transition-colors cursor-pointer"
          >
            <span className="flex items-center gap-2">
              {downloaded ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Download className="w-4 h-4 text-sky-400" />
              )}
              {downloaded ? 'Downloaded .ICS File!' : 'Download .iCal / Outlook File'}
            </span>
            <span className="text-xs text-neutral-400">Apple / Outlook</span>
          </button>
        </div>

        <div className="mt-6 pt-4 border-t border-neutral-800 flex justify-end">
          <Button variant="ghost" size="sm" onClick={onClose}>
            Done
          </Button>
        </div>
      </div>
    </div>
  );
};
