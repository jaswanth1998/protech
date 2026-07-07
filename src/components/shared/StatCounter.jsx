import { useEffect, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

function StatCounter({ value, label, suffix = '', prefix = '' }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  // Seed with the real value so it is present in the initial render + pre-rendered HTML
  // (crawlers never see "0", and hydration matches the prerendered snapshot).
  const [count, setCount] = useState(value);

  useEffect(() => {
    if (!isVisible) return;

    // Respect reduced motion (and the prerender, which emulates it): keep the seeded
    // real value, no count-up.
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const interval = duration / steps;

    // Count up from 0 → value when the section scrolls into view. The first tick (and
    // every setCount) runs inside the timer callback, never synchronously in the effect.
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
