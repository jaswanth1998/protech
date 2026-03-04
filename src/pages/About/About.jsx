import { motion, useReducedMotion } from 'framer-motion';
import { LuBuilding, LuTarget, LuEye } from 'react-icons/lu';
import SEO from '@/components/shared/SEO';
import PageHero from '@/components/shared/PageHero';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import FeatureCard from '@/components/shared/FeatureCard';
import TeamCard from '@/components/shared/TeamCard';
import LogoStrip from '@/components/shared/LogoStrip';
import CTABanner from '@/components/shared/CTABanner';
import { company } from '@/data/company';
import { team } from '@/data/team';

// PLACEHOLDER — replace with real certification/partner logos
const certLogos = [
  { alt: 'Cisco Partner' },
  { alt: 'Microsoft Certified' },
  { alt: 'CompTIA' },
  { alt: 'AWS Partner' },
  { alt: 'VMware' },
];

const coreValues = [
  {
    icon: 'LuShieldCheck',
    title: 'Integrity',
    description:
      'We operate with transparency and honesty in every client interaction and project delivery.',
  },
  {
    icon: 'LuZap',
    title: 'Innovation',
    description:
      'We stay ahead of technology trends to bring the most effective solutions to our clients.',
  },
  {
    icon: 'LuShield',
    title: 'Reliability',
    description: 'We deliver on our promises with consistent, dependable service you can count on.',
  },
  {
    icon: 'LuTarget',
    title: 'Client Focus',
    description: 'Every solution is tailored to meet the unique needs and goals of each client.',
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

function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <SEO
        title="About Pro-Tech IT Consulting · Meet Our Expert Team"
        description="Learn about Pro-Tech IT Consulting — our mission, values, and the expert team behind reliable IT infrastructure and networking solutions."
      />

      {/* Section 1: Page Hero */}
      <PageHero
        title="About Us"
        subtitle="Get to know the team and values behind Pro-Tech IT Consulting."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]}
      />

      {/* Section 2: Our Story */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-3xl font-bold text-navy-dark md:text-4xl">
                Our Story
              </h2>
              <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
              {/* PLACEHOLDER — replace with real company story */}
              <p className="mt-6 text-lg leading-relaxed text-slate">
                Founded with a vision to provide dependable IT solutions, Pro-Tech IT Consulting has
                grown into a trusted partner for businesses across North America. We specialize in
                designing, deploying, and managing the technology infrastructure that modern
                organizations depend on.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate">
                Our team of certified professionals brings decades of combined experience across
                networking, cloud computing, security systems, and project management. We believe
                that every business deserves IT solutions that are reliable, scalable, and tailored
                to their unique needs.
              </p>
            </div>
            <div className="flex items-center justify-center">
              {/* PLACEHOLDER — office/team image */}
              <div className="flex h-72 w-full items-center justify-center rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-inner lg:h-80">
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <LuBuilding className="h-8 w-8 text-gray-400" />
                  </div>
                  <span className="text-sm font-medium text-slate">Office Image</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 3: Mission & Vision */}
      <section className="bg-gray-50 py-16 md:py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="group rounded-xl border border-gray-100 bg-white p-8 shadow-md transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-muted">
                <LuTarget className="h-6 w-6 text-primary-dark" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-navy-dark">Our Mission</h3>
              <p className="mt-4 text-lg leading-relaxed text-slate">{company.mission}</p>
            </div>
            <div className="group rounded-xl border border-gray-100 bg-white p-8 shadow-md transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-muted">
                <LuEye className="h-6 w-6 text-primary-dark" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-navy-dark">Our Vision</h3>
              <p className="mt-4 text-lg leading-relaxed text-slate">{company.vision}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 4: Core Values */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <Container>
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide everything we do"
          />
          <motion.div
            variants={shouldReduceMotion ? {} : containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {coreValues.map((value) => (
              <motion.div key={value.title} variants={shouldReduceMotion ? {} : itemVariants}>
                <FeatureCard
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Section 5: Our Team */}
      <section className="bg-gray-50 py-16 md:py-20 lg:py-24">
        <Container>
          <SectionHeading title="Meet Our Team" subtitle="The experts behind your IT success" />
          <motion.div
            variants={shouldReduceMotion ? {} : containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {team.map((member) => (
              <motion.div key={member.name} variants={shouldReduceMotion ? {} : itemVariants}>
                <TeamCard
                  name={member.name}
                  title={member.title}
                  photo={member.photo}
                  bio={member.bio}
                  linkedIn={member.linkedIn}
                />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Section 6: Certifications & Partners */}
      <LogoStrip logos={certLogos} title="Certifications & Partners" />

      {/* Section 7: CTA Banner */}
      <CTABanner
        headline="Let's Work Together"
        subtitle="Ready to partner with a team that puts your business first? Get in touch today."
        primaryCTA={{ label: 'Contact Us', to: '/contact' }}
        variant="dark"
      />
    </>
  );
}

export default About;
