import React from 'react';

export const Button = ({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent'
  size = 'md',         // 'sm' | 'md' | 'lg'
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
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F42E88] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070206] disabled:opacity-40 disabled:cursor-not-allowed select-none cursor-pointer";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 rounded-md gap-1.5 font-semibold",
    md: "text-sm px-5 py-2.5 rounded-lg gap-2 font-semibold",
    lg: "text-base px-7 py-3.5 rounded-xl gap-2.5 font-bold tracking-wide",
  };

  const variantStyles = {
    // Solid vivid magenta — primary actions (Register, Submit)
    primary:
      "bg-[#D61A70] text-white hover:bg-[#F42E88] active:bg-[#A91455] shadow-lg shadow-[rgba(214,26,112,0.28)] hover:shadow-[rgba(214,26,112,0.42)] hover:-translate-y-[1px]",

    // Dark burgundy surface — secondary & nav CTAs
    secondary:
      "bg-[#1A0614] text-[#FAEEF4] border border-[rgba(93,27,64,0.60)] hover:bg-[#260A1C] hover:border-[rgba(214,26,112,0.40)] active:bg-[#12040E]",

    // Transparent outlined — tertiary actions
    outline:
      "bg-transparent text-[#C4A5B5] border border-[rgba(93,27,64,0.55)] hover:border-[#D61A70] hover:text-[#FAEEF4] active:bg-[#1A0614]",

    // Fully ghost — lowest hierarchy
    ghost:
      "bg-transparent text-[#C4A5B5] hover:text-[#FAEEF4] hover:bg-[#1A0614] active:bg-[#12040E]",

    // Accent filled — ETHIndia bounty, special highlights
    accent:
      "bg-[#961042] text-white hover:bg-[#A91455] active:bg-[#7A0D35] shadow-sm shadow-[rgba(150,16,66,0.30)]",
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
