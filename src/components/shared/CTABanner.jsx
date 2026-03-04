import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const variantStyles = {
  dark: {
    section: 'gradient-navy-radial',
    heading: 'text-white',
    subtitle: 'text-gray-300',
    pattern: 'hero-dot-pattern',
  },
  green: {
    section: 'gradient-green',
    heading: 'text-navy-dark',
    subtitle: 'text-navy/80',
    pattern: '',
  },
};

function CTABanner({ headline, subtitle, primaryCTA, secondaryCTA, variant = 'dark' }) {
  const styles = variantStyles[variant] || variantStyles.dark;

  return (
    <section className={`${styles.section} relative overflow-hidden py-16 md:py-20 lg:py-24`}>
      {/* Pattern overlay */}
      {styles.pattern && (
        <div className={`${styles.pattern} absolute inset-0`} aria-hidden="true" />
      )}

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {variant === 'dark' && (
          <>
            <div className="animate-pulse-glow absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
            <div
              className="animate-pulse-glow absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-primary/5 blur-3xl"
              style={{ animationDelay: '2s' }}
            />
          </>
        )}
        {variant === 'green' && (
          <>
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          </>
        )}
      </div>

      <Container className="relative z-10 text-center">
        <h2 className={`font-heading text-3xl font-bold md:text-4xl lg:text-5xl ${styles.heading}`}>
          {headline}
        </h2>
        {subtitle && (
          <p className={`mx-auto mt-4 max-w-2xl text-lg ${styles.subtitle}`}>{subtitle}</p>
        )}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {primaryCTA && (
            <Button
              href={primaryCTA.to}
              variant={variant === 'green' ? 'secondary' : 'primary'}
              size="lg"
            >
              {primaryCTA.label}
            </Button>
          )}
          {secondaryCTA && (
            <Button
              href={secondaryCTA.to}
              variant={variant === 'green' ? 'outline' : 'white'}
              size="lg"
            >
              {secondaryCTA.label}
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}

export default CTABanner;
