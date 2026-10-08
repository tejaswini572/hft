import React, { useState, useEffect } from 'react';

export const Countdown = ({ targetDate, isConfirmed = true, className = '' }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    if (!targetDate || !isConfirmed) return;

    const calculateTime = () => {
      const target = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isExpired: false,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, [targetDate, isConfirmed]);

  if (!isConfirmed || !targetDate) {
    return (
      <div className={`p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 text-center ${className}`}>
        <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
          Event Dates
        </p>
        <p className="text-sm font-semibold text-neutral-200 mt-1">
          Dates to be announced soon
        </p>
      </div>
    );
  }

  const timeUnits = [
    { label: 'Days', value: String(timeLeft.days).padStart(2, '0') },
    { label: 'Hours', value: String(timeLeft.hours).padStart(2, '0') },
    { label: 'Minutes', value: String(timeLeft.minutes).padStart(2, '0') },
    { label: 'Seconds', value: String(timeLeft.seconds).padStart(2, '0') },
  ];

  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="flex items-center">
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center shadow-inner">
              <span className="text-xl sm:text-2xl md:text-3xl font-extrabold font-mono text-white tracking-wider">
                {unit.value}
              </span>
            </div>
            <span className="text-[10px] sm:text-xs font-mono text-neutral-400 uppercase tracking-wider mt-1.5 font-medium">
              {unit.label}
            </span>
          </div>
          {index < timeUnits.length - 1 && (
            <span className="text-neutral-600 font-mono text-lg font-bold mx-1 sm:mx-1.5 -mt-4">:</span>
          )}
        </div>
      ))}
    </div>
  );
};
