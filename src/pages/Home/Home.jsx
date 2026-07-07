import { motion, useReducedMotion } from 'framer-motion';
import SEO from '@/components/shared/SEO';
import Hero from '@/components/shared/Hero';
import LogoStrip from '@/components/shared/LogoStrip';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/shared/ServiceCard';
import FeatureCard from '@/components/shared/FeatureCard';
import IndustryBadge from '@/components/shared/IndustryBadge';
import StatCounter from '@/components/shared/StatCounter';
import CTABanner from '@/components/shared/CTABanner';
import Button from '@/components/ui/Button';
import { services } from '@/data/services';
import { industries } from '@/data/industries';
import { stats } from '@/data/stats';

// Vendor logos are served as static files from public/logos/ (stable URLs, no inline
// data-URIs bloating the pre-rendered HTML).
const partnerLogos = [
  { src: '/logos/cisco.svg', alt: 'Cisco' },
  { src: '/logos/dell.svg', alt: 'Dell' },
  { src: '/logos/microsoft.svg', alt: 'Microsoft' },
  { src: '/logos/fortinet.svg', alt: 'Fortinet' },
  { src: '/logos/hp.svg', alt: 'HP' },
  { src: '/logos/vmware.svg', alt: 'VMware', sizeClass: 'h-16 md:h-20' },
  { src: '/logos/aws.svg', alt: 'AWS' },
  { src: '/logos/juniper.svg', alt: 'Juniper', sizeClass: 'h-16 md:h-20' },
  { src: '/logos/paloalto.svg', alt: 'Palo Alto Networks' },
  { src: '/logos/azure.svg', alt: 'Azure' },
  { src: '/logos/google-cloud.svg', alt: 'Google Cloud', sizeClass: 'h-12 md:h-16' },
  { src: '/logos/oracle.svg', alt: 'Oracle', sizeClass: 'h-7 md:h-8' },
];

const whyChooseUs = [
  {
    icon: 'LuUsers',
    title: 'Experienced Team',
    description:
      'Certified professionals with deep industry expertise across networking, cloud, and security.',
  },
  {
    icon: 'LuShieldCheck',
    title: '24/7 Support',
    description:
      'Round-the-clock monitoring and rapid incident response to keep your systems running.',
  },
  {
    icon: 'LuAward',
    title: 'Certified Professionals',
    description: 'Industry-recognized certifications from Cisco, Microsoft, AWS, and more.',
  },
  {
    icon: 'LuTarget',
    title: 'Client-First Approach',
    description:
      'Tailored solutions designed around your specific business requirements and goals.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Home() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <SEO
        title="Structured Cabling, Wireless Surveys & IT Field Services | Dartmouth–Halifax, NS | Pro-Tech IT Consulting"
        description="Pro-Tech IT Consulting delivers structured cabling, Ekahau Wi-Fi surveys, network infrastructure, CCTV, and 24/7 IT field services for businesses across Dartmouth, Halifax and Nova Scotia."
      />

      {/* Section 1: Hero */}
      <Hero
        title="Your Reliable Service Partner"
        subtitle="Expert IT consulting, network infrastructure, and technology solutions tailored to your business needs. Trusted by organizations across industries."
        primaryCTA={{ label: 'Explore Our Services', to: '/services' }}
        secondaryCTA={{ label: 'Contact Us', to: '/contact' }}
      />

      {/* Section 2: Trusted By / Partners */}
      <LogoStrip logos={partnerLogos} title="Technologies We Work With" />
      {/* Section 6: Stats / Impact */}
      <section className="gradient-navy-radial relative overflow-hidden py-16 md:py-20 lg:py-24">
        <div className="hero-dot-pattern absolute inset-0" aria-hidden="true" />
        <Container className="relative z-10">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={stat.label} className="relative">
                <StatCounter
                  value={stat.value}
                  label={stat.label}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                />
                {/* Divider (not on last item, desktop only) */}
                {index < stats.length - 1 && (
                  <div
                    className="absolute -right-4 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-white/10 lg:block"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>
      {/* Section 3: Services Overview */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <Container>
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive IT solutions tailored to your business needs"
          />
          <motion.div
            variants={shouldReduceMotion ? {} : containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {services.map((service) => (
              <motion.div key={service.slug} variants={shouldReduceMotion ? {} : itemVariants}>
                <ServiceCard
                  icon={service.icon}
                  title={service.name}
                  description={service.shortDescription}
                  slug={service.slug}
                  variant="compact"
                />
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-10 text-center">
            <Button href="/services" variant="ghost">
              View All Services &rarr;
            </Button>
          </div>
        </Container>
      </section>

      {/* Section 4: Why Choose Us */}
      <section className="bg-gray-50 py-16 md:py-20 lg:py-24">
        <Container>
          <SectionHeading title="Why Choose Pro-Tech" subtitle="What sets us apart from the rest" />
          <motion.div
            variants={shouldReduceMotion ? {} : containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {whyChooseUs.map((feature) => (
              <motion.div key={feature.title} variants={shouldReduceMotion ? {} : itemVariants}>
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Section 5: Industries We Serve */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <Container>
          <SectionHeading
            title="Industries We Serve"
            subtitle="Trusted by organizations across key sectors"
          />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-6">
            {industries.map((industry) => (
              <IndustryBadge
                key={industry.slug}
                icon={industry.icon}
                name={industry.name}
                slug={industry.slug}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/industries" variant="ghost">
              See All Industries &rarr;
            </Button>
          </div>
        </Container>
      </section>

      {/* Section 7: CTA Banner */}
      <CTABanner
        headline="Ready to Transform Your IT Infrastructure?"
        subtitle="Let our experts design the perfect technology solution for your business."
        primaryCTA={{ label: 'Get a Quote', to: '/contact' }}
        variant="green"
      />
    </>
  );
}

export default Home;
