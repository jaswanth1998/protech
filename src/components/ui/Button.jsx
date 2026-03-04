import { Link } from 'react-router-dom';

const variants = {
  primary:
    'bg-primary text-navy-dark hover:bg-primary-light active:bg-primary-dark focus:ring-primary',
  secondary: 'bg-navy text-white hover:bg-navy-light active:bg-navy-dark focus:ring-navy',
  outline:
    'border-2 border-primary text-primary-dark bg-transparent hover:bg-primary hover:text-navy-dark focus:ring-primary',
  ghost: 'text-primary-dark bg-transparent hover:bg-primary/10 focus:ring-primary',
  white: 'bg-white text-navy-dark hover:bg-gray-100 active:bg-gray-200 focus:ring-white',
};

const sizes = {
  sm: 'min-h-[36px] px-4 py-1.5 text-sm',
  md: 'min-h-[44px] px-6 py-2.5 text-base',
  lg: 'min-h-[52px] px-8 py-3 text-lg',
};

function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  icon: IconComponent,
  iconPosition = 'left',
  ...rest
}) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const classes =
    `${baseClasses} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`.trim();

  const content = (
    <>
      {IconComponent && iconPosition === 'left' && <IconComponent className="h-5 w-5" />}
      {children}
      {IconComponent && iconPosition === 'right' && <IconComponent className="h-5 w-5" />}
    </>
  );

  // Internal link
  if (href && href.startsWith('/')) {
    return (
      <Link to={href} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  // External link
  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes} {...rest}>
      {content}
    </button>
  );
}

export default Button;
