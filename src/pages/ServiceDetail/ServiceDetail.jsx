import { motion, useReducedMotion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import SEO from '@/components/shared/SEO';
import PageHero from '@/components/shared/PageHero';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import FeatureCard from '@/components/shared/FeatureCard';
import ProcessStep from '@/components/shared/ProcessStep';
import ServiceCard from '@/components/shared/ServiceCard';
import CTABanner from '@/components/shared/CTABanner';
import Badge from '@/components/ui/Badge';
import Icon from '@/components/ui/Icon';
import { services } from '@/data/services';
import { industries } from '@/data/industries';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function ServiceDetail() {
  const shouldReduceMotion = useReducedMotion();
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  // If slug not found, render inline 404
  if (!service) {
    return (
      <>
        <SEO title="Service Not Found" description="The requested service could not be found." />
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
          <h1 className="font-heading text-6xl font-bold text-navy-dark">404</h1>
          <p className="mt-4 text-xl text-slate">Sorry, this service could not be found.</p>
          <Link
            to="/services"
            className="mt-8 inline-block rounded-lg bg-primary px-6 py-3 font-semibold text-navy-dark transition-all duration-200 hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            View All Services
          </Link>
        </div>
      </>
    );
  }

  const relatedServices = services.filter((s) => service.relatedServices.includes(s.slug));
  const relatedIndustries = industries.filter((i) => service.relatedIndustries.includes(i.slug));

  return (
    <>
      <SEO title={`${service.name} · Pro-Tech IT Consulting`} description={service.tagline} />

      {/* Section 1: Page Hero */}
      <PageHero
        title={service.name}
        subtitle={service.tagline}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: service.name },
        ]}
      />

      {/* Section 2: Service Overview */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-3xl font-bold text-navy-dark">Overview</h2>
              <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
              <p className="mt-6 whitespace-pre-line text-lg leading-relaxed text-slate">
                {service.description || service.shortDescription}
              </p>
            </div>
            <div className="flex items-center justify-center">
              {/* PLACEHOLDER — service feature image */}
              <div className="flex h-72 w-full items-center justify-center rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-inner lg:h-80">
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <Icon name={service.icon} size="lg" className="text-primary-dark" />
                  </div>
                  <span className="text-sm font-medium text-slate">{service.name}</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 3: Key Features */}
      {service.features.length > 0 && (
        <section className="bg-gray-50 py-16 md:py-20 lg:py-24">
          <Container>
            <SectionHeading title="Key Features" />
            <motion.div
              variants={shouldReduceMotion ? {} : containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {service.features.map((feature) => (
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
      )}

      {/* Section 4: Our Approach */}
      {service.approach.length > 0 && (
        <section className="bg-white py-16 md:py-20 lg:py-24">
          <Container>
            <SectionHeading title="Our Approach" />
            <div className="mt-12">
              <ProcessStep steps={service.approach} />
            </div>
          </Container>
        </section>
      )}

      {/* Section 5: Related Industries */}
      {relatedIndustries.length > 0 && (
        <section className="bg-gray-50 py-16 md:py-20 lg:py-24">
          <Container>
            <SectionHeading title="Industries That Benefit" />
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {relatedIndustries.map((industry) => (
                <Badge key={industry.slug} variant="gray" size="md">
                  {industry.name}
                </Badge>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Section 6: Related Services */}
      {relatedServices.length > 0 && (
        <section className="bg-white py-16 md:py-20 lg:py-24">
          <Container>
            <SectionHeading title="Related Services" />
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((related) => (
                <ServiceCard
                  key={related.slug}
                  icon={related.icon}
                  title={related.name}
                  description={related.shortDescription}
                  slug={related.slug}
                  variant="grid"
                />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Section 7: CTA Banner */}
      <CTABanner
        headline={`Ready to Get Started with ${service.name}?`}
        subtitle={`Let our experts help you implement the perfect ${service.name.toLowerCase()} solution for your business.`}
        primaryCTA={{ label: 'Request This Service', to: `/contact?service=${service.slug}` }}
        variant="dark"
      />
    </>
  );
}

export default ServiceDetail;
