import { motion, useReducedMotion } from 'framer-motion';
import SEO from '@/components/shared/SEO';
import PageHero from '@/components/shared/PageHero';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import IndustryCard from '@/components/shared/IndustryCard';
import FeatureCard from '@/components/shared/FeatureCard';
import CTABanner from '@/components/shared/CTABanner';
import { industries } from '@/data/industries';
import { services } from '@/data/services';

const coreStrengths = [
  {
    icon: 'LuAward',
    title: 'Certified Professionals',
    description: 'Industry-recognized certifications from leading technology vendors.',
  },
  {
    icon: 'LuShieldCheck',
    title: '24/7 Support',
    description: 'Round-the-clock monitoring and rapid incident response.',
  },
  {
    icon: 'LuGlobe',
    title: 'Scalable Solutions',
    description: 'Infrastructure that grows with your business demands.',
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

function Industries() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <SEO
        title="Industries We Serve · Pro-Tech IT Consulting"
        description="Pro-Tech IT Consulting serves healthcare, finance, education, government, retail, and industrial sectors with tailored IT infrastructure and networking solutions."
      />

      {/* Section 1: Page Hero */}
      <PageHero
        title="Industries We Serve"
        subtitle="Cross-sector expertise delivering tailored IT solutions for your industry."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Industries' }]}
      />

      {/* Section 2: Industries Grid */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <Container>
          <motion.div
            variants={shouldReduceMotion ? {} : containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2"
          >
            {industries.map((industry) => {
              const industryServices = services.filter((s) => industry.services.includes(s.slug));
              return (
                <motion.div key={industry.slug} variants={shouldReduceMotion ? {} : itemVariants}>
                  <IndustryCard
                    icon={industry.icon}
                    name={industry.name}
                    description={industry.description}
                    services={industryServices}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* Section 3: Cross-Industry Strip */}
      <section className="bg-gray-50 py-16 md:py-20 lg:py-24">
        <Container>
          <SectionHeading title="Every Industry Benefits From Our Core Strengths" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {coreStrengths.map((strength) => (
              <FeatureCard
                key={strength.title}
                icon={strength.icon}
                title={strength.title}
                description={strength.description}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Section 4: CTA Banner */}
      <CTABanner
        headline="Discuss Your Industry-Specific Needs"
        subtitle="No matter your industry, we have the expertise to deliver IT solutions that meet your unique requirements."
        primaryCTA={{ label: 'Get In Touch', to: '/contact' }}
        variant="dark"
      />
    </>
  );
}

export default Industries;
