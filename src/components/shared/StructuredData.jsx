import { Helmet } from 'react-helmet-async';
import { company } from '@/data/company';

// Absolute production URL — used for canonical/OG in SEO.jsx and for schema `url`.
export const SITE_URL = 'https://pro-techitconsulting.com';

/**
 * Organization / LocalBusiness JSON-LD structured data. Rendered once globally via
 * Layout so every prerendered page ships it in the <head>. Helps search engines and
 * AI assistants understand the business (name, contact, address, social profiles).
 */
function StructuredData() {
  const sameAs = Object.values(company.social).filter(Boolean);
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: company.name,
    description: company.mission,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    image: `${SITE_URL}/og-image.png`,
    email: company.email,
    telephone: company.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.province,
      postalCode: company.address.postal,
      addressCountry: company.address.country,
    },
    // Only emit sameAs when we have verified social profiles.
    ...(sameAs.length > 0 && { sameAs }),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

export default StructuredData;
