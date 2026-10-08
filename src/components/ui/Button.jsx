import React from 'react';

export const Button = ({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent'
  size = 'md', // 'sm' | 'md' | 'lg'
  href,
  onClick,
  target,
  rel,
  className = '',
  disabled = false,
  icon,
  iconPosition = 'right',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 disabled:opacity-50 disabled:cursor-not-allowed select-none cursor-pointer";
  
  const sizeStyles = {
    sm: "text-xs px-3 py-1.5 rounded-md gap-1.5",
    md: "text-sm px-4 py-2.5 rounded-lg gap-2 font-semibold",
    lg: "text-base px-6 py-3.5 rounded-xl gap-2.5 font-bold tracking-tight",
  };

  const variantStyles = {
    primary: "bg-white text-neutral-950 hover:bg-neutral-200 active:bg-neutral-300 shadow-sm shadow-white/5",
    secondary: "bg-neutral-900 text-neutral-100 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 active:bg-neutral-950",
    accent: "bg-sky-500 text-neutral-950 hover:bg-sky-400 active:bg-sky-600 font-semibold shadow-sm shadow-sky-500/10",
    outline: "bg-transparent text-neutral-300 border border-neutral-800 hover:border-neutral-600 hover:text-white active:bg-neutral-900",
    ghost: "bg-transparent text-neutral-400 hover:text-white hover:bg-neutral-900 active:bg-neutral-800",
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
        className={combinedClass}
        onClick={onClick}
        {...props}
      >
        {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={combinedClass}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
