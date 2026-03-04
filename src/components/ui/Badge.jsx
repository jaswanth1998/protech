const variants = {
  green: 'bg-primary-muted text-primary-dark',
  navy: 'bg-navy text-white',
  gray: 'bg-gray-100 text-navy',
};

const sizes = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
};

function Badge({ children, variant = 'green', size = 'md', className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full font-semibold ${variants[variant] || variants.green} ${sizes[size] || sizes.md} ${className}`.trim()}
    >
      {children}
    </span>
  );
}

export default Badge;
