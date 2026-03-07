import { motion, useReducedMotion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

function Hero({ title, subtitle, primaryCTA, secondaryCTA }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="gradient-navy-radial relative overflow-hidden py-24 md:py-32 lg:py-40">
      {/* Decorative grid pattern */}
      <div className="hero-grid-pattern absolute inset-0" aria-hidden="true" />

      {/* Decorative floating shapes */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Top-right glowing orb */}
        <div className="animate-pulse-glow absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl md:h-96 md:w-96" />
        {/* Bottom-left glowing orb */}
        <div
          className="animate-pulse-glow absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
          style={{ animationDelay: '2s' }}
        />

        {/* Floating geometric shapes */}
        <div
          className="animate-float-slow absolute right-[10%] top-[15%] h-20 w-20 rounded-2xl border border-primary/10 md:h-28 md:w-28"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="animate-float absolute bottom-[20%] left-[8%] h-16 w-16 rounded-full border border-primary/10 md:h-20 md:w-20"
          style={{ animationDelay: '3s' }}
        />
        <div
          className="animate-float-slow absolute bottom-[30%] right-[15%] h-10 w-10 rounded-lg bg-primary/5 md:h-14 md:w-14"
          style={{ animationDelay: '0.5s' }}
        />
        <div
          className="animate-float absolute left-[15%] top-[60%] h-8 w-8 rounded-full bg-primary/5 md:h-12 md:w-12"
          style={{ animationDelay: '2.5s' }}
        />
      </div>

      {/* Subtle bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-dark/50 to-transparent"
        aria-hidden="true"
      />

      <Container className="relative z-10 text-center">
        {/* Overline tag */}
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
          className="mx-auto mb-6 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-primary"
        >
          Pro-Tech IT Consulting Inc
        </motion.p>

        <motion.h1
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
            delay: shouldReduceMotion ? 0 : 0.1,
          }}
          className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: shouldReduceMotion ? 0 : 0.25,
            }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl"
          >
            {subtitle}
          </motion.p>
        )}

        {(primaryCTA || secondaryCTA) && (
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: shouldReduceMotion ? 0 : 0.4,
            }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            {primaryCTA && (
              <Button href={primaryCTA.to} variant="primary" size="lg">
                {primaryCTA.label}
              </Button>
            )}
            {secondaryCTA && (
              <Button href={secondaryCTA.to} variant="outline" size="lg">
                {secondaryCTA.label}
              </Button>
            )}
          </motion.div>
        )}

        {/* Trust indicators */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.8,
            delay: shouldReduceMotion ? 0 : 0.7,
          }}
          className="mt-14 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 md:gap-8"
        >
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            500+ Projects Delivered
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            15+ Years Experience
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            24/7 Support
          </span>
        </motion.div>
      </Container>
    </section>
  );
}

export default Hero;
