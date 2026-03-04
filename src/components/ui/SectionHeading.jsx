function SectionHeading({ title, subtitle, align = 'center', light = false }) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  const titleColor = light ? 'text-white' : 'text-navy-dark';
  const subtitleColor = light ? 'text-gray-300' : 'text-slate';
  const accentAlign = align === 'center' ? 'mx-auto' : '';

  return (
    <div className={alignClass}>
      <h2 className={`font-heading text-3xl font-bold md:text-4xl ${titleColor}`}>{title}</h2>
      <div className={`mt-4 h-1 w-16 rounded-full bg-primary ${accentAlign}`} />
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed ${subtitleColor} ${align === 'center' ? 'mx-auto max-w-2xl' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
