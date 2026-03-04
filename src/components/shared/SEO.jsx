import { Helmet } from 'react-helmet-async';

function SEO({ title, description, canonicalUrl, ogImage }) {
  const fullTitle = title.includes('Pro-Tech') ? title : `${title} — Pro-Tech IT Consulting`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:type" content="website" />
    </Helmet>
  );
}

export default SEO;
