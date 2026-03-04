function Input({
  label,
  name,
  type = 'text',
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
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`mt-1 block w-full rounded-lg border px-4 py-3 outline-none transition-colors ${
          error
            ? 'border-error ring-2 ring-error/20'
            : 'border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20'
        }`}
        {...rest}
      />
      {error && (
        <p id={`${name}-error`} role="alert" className="mt-1 text-sm text-error">
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;
