import { useSearchParams } from 'react-router-dom';
import SEO from '@/components/shared/SEO';
import PageHero from '@/components/shared/PageHero';
import Container from '@/components/ui/Container';
import ContactForm from '@/components/shared/ContactForm';
import ContactInfoCard from '@/components/shared/ContactInfoCard';
import MapEmbed from '@/components/shared/MapEmbed';
import { company } from '@/data/company';

function Contact() {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

  return (
    <>
      <SEO
        title="Contact Pro-Tech IT Consulting · Get a Quote"
        description="Get in touch with Pro-Tech IT Consulting. Request a quote, discuss your IT needs, or schedule a consultation with our expert team."
      />

      {/* Section 1: Page Hero */}
      <PageHero
        title="Get In Touch"
        subtitle="Let's discuss how we can support your IT needs."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />

      {/* Section 2: Contact Content */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Contact Form — 2/3 width */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-bold text-navy-dark">Send Us a Message</h2>
              <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
              <div className="mt-8">
                <ContactForm preselectedService={preselectedService} />
              </div>
            </div>

            {/* Contact Info — 1/3 width */}
            <div className="space-y-4">
              <ContactInfoCard icon="LuMapPin" title="Our Office">
                <address className="not-italic">
                  <p>{company.address.street}</p>
                  <p>
                    {company.address.city}, {company.address.province} {company.address.postal}
                  </p>
                </address>
              </ContactInfoCard>

              <ContactInfoCard icon="LuPhone" title="Phone">
                <a
                  href={`tel:${company.phone}`}
                  className="text-primary-dark transition-colors hover:text-primary"
                >
                  {company.phone}
                </a>
              </ContactInfoCard>

              <ContactInfoCard icon="LuMail" title="Email">
                <a
                  href={`mailto:${company.email}`}
                  className="text-primary-dark transition-colors hover:text-primary"
                >
                  {company.email}
                </a>
              </ContactInfoCard>

              <ContactInfoCard icon="LuClock" title="Business Hours">
                <p>Monday - Friday: {company.businessHours.weekday}</p>
                <p>Saturday - Sunday: {company.businessHours.weekend}</p>
              </ContactInfoCard>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 3: Map */}
      <section className="bg-gray-50 py-16 md:py-20">
        <Container>
          <MapEmbed
            address={`${company.address.street}, ${company.address.city}, ${company.address.province}`}
          />
        </Container>
      </section>

      {/* No CTA Banner on Contact page — the page itself is the conversion point */}
    </>
  );
}

export default Contact;
