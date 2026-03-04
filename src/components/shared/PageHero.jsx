import { motion, useReducedMotion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Breadcrumb from './Breadcrumb';

function PageHero({ title, subtitle, breadcrumbs = [] }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="gradient-navy-radial relative overflow-hidden py-16 md:py-20 lg:py-24">
      {/* Decorative pattern */}
      <div className="hero-dot-pattern absolute inset-0" aria-hidden="true" />

      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="animate-pulse-glow absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />
        <div
          className="animate-pulse-glow absolute -bottom-20 -left-16 h-40 w-40 rounded-full bg-primary/5 blur-3xl"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="animate-float-slow absolute right-[10%] top-[20%] h-12 w-12 rounded-xl border border-primary/10"
          style={{ animationDelay: '1s' }}
        />
      </div>

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-navy-dark/30 to-transparent"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {breadcrumbs.length > 0 && <Breadcrumb items={breadcrumbs} />}
        <motion.h1
          initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
          className="font-heading text-4xl font-bold text-white md:text-5xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.5,
              delay: shouldReduceMotion ? 0 : 0.15,
            }}
            className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-300"
          >
            {subtitle}
          </motion.p>
        )}
      </Container>
    </section>
  );
}

export default PageHero;
