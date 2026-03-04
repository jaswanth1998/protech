import { motion, useReducedMotion } from 'framer-motion';
import SEO from '@/components/shared/SEO';
import PageHero from '@/components/shared/PageHero';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/shared/ServiceCard';
import ProcessStep from '@/components/shared/ProcessStep';
import CTABanner from '@/components/shared/CTABanner';
import { services } from '@/data/services';

const processSteps = [
  {
    step: 1,
    title: 'Assess',
    description:
      'We evaluate your current infrastructure and understand your business requirements.',
  },
  {
    step: 2,
    title: 'Plan',
    description: 'Our team designs a tailored solution with clear timelines and deliverables.',
  },
  {
    step: 3,
    title: 'Implement',
    description:
      'We deploy your solution with minimal disruption, following industry best practices.',
  },
  {
    step: 4,
    title: 'Support',
    description: 'Ongoing monitoring, maintenance, and 24/7 support to keep you running smoothly.',
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

function Services() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <SEO
        title="IT Services & Solutions · Pro-Tech IT Consulting"
        description="Explore Pro-Tech's comprehensive IT services: network infrastructure, structured cabling, Wi-Fi, VoIP, CCTV security, managed IT, cloud solutions, and project management."
      />

      {/* Section 1: Page Hero */}
      <PageHero
        title="Our Services"
        subtitle="Comprehensive IT solutions tailored to your business needs."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
      />

      {/* Section 2: Services Grid */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <Container>
          <motion.div
            variants={shouldReduceMotion ? {} : containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2"
          >
            {services.map((service) => (
              <motion.div key={service.slug} variants={shouldReduceMotion ? {} : itemVariants}>
                <ServiceCard
                  icon={service.icon}
                  title={service.name}
                  description={service.shortDescription}
                  slug={service.slug}
                  variant="grid"
                />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Section 3: Our Process */}
      <section className="bg-gray-50 py-16 md:py-20 lg:py-24">
        <Container>
          <SectionHeading
            title="Our Process"
            subtitle="A proven methodology for delivering results"
          />
          <div className="mt-12">
            <ProcessStep steps={processSteps} />
          </div>
        </Container>
      </section>

      {/* Section 4: CTA Banner */}
      <CTABanner
        headline="Need a Custom Solution?"
        subtitle="Every business is unique. Let our experts design the perfect IT solution for yours."
        primaryCTA={{ label: 'Talk to Our Experts', to: '/contact' }}
        variant="dark"
      />
    </>
  );
}

export default Services;
