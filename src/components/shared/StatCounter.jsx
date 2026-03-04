import { useEffect, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

function StatCounter({ value, label, suffix = '', prefix = '' }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = prefersReducedMotion ? 0 : 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const interval = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="relative text-center">
      <p className="font-heading text-4xl font-bold text-primary md:text-5xl lg:text-6xl">
        {prefix}
        {count}
        {suffix}
      </p>
      <p className="mt-3 text-sm font-medium uppercase tracking-wider text-gray-400">{label}</p>
    </div>
  );
}

export default StatCounter;
