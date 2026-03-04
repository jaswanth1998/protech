function Select({
  label,
  name,
  options = [],
  placeholder,
  error,
  required,
  className = '',
  ...rest
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-medium text-navy-dark">
        {label}
        {required && <span className="ml-1 text-error">*</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`mt-1 block w-full rounded-lg border px-4 py-3 outline-none transition-colors ${
          error
            ? 'border-error ring-2 ring-error/20'
            : 'border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20'
        }`}
        {...rest}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${name}-error`} role="alert" className="mt-1 text-sm text-error">
          {error}
        </p>
      )}
    </div>
  );
}

export default Select;
