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
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-widest uppercase mb-4 ${isCenter ? 'mx-auto' : ''}`}
          style={{
            background: 'rgba(214, 26, 112, 0.09)',
            border: '1px solid rgba(214, 26, 112, 0.30)',
            color: '#D61A70',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: '#D61A70' }}
          />
          <span>{badge}</span>
        </div>
      )}

      <h2
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4"
        style={{ fontFamily: 'var(--font-display)', color: '#FAEEF4' }}
      >
        {title}
      </h2>

      {subtitle && (
        <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#C4A5B5' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
