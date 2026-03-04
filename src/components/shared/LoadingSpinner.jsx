const sizes = {
  sm: 'h-6 w-6 border-2',
  md: 'h-10 w-10 border-[3px]',
  lg: 'h-14 w-14 border-4',
};

function LoadingSpinner({ size = 'md' }) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <div
        className={`animate-spin rounded-full border-primary border-t-transparent ${sizes[size] || sizes.md}`}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
      <p className="text-sm font-medium text-slate">Loading...</p>
    </div>
  );
}

export default LoadingSpinner;
