import React from 'react';

export const SectionHeader = ({
  badge,
  title,
  subtitle,
  align = 'left', // 'left' | 'center'
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase mb-3 bg-neutral-900 border border-neutral-800 text-sky-400 ${isCenter ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          <span>{badge}</span>
        </div>
      )}
      
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
        {title}
      </h2>
      
      {subtitle && (
        <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
