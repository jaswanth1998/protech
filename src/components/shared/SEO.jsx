import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SITE_URL } from '@/components/shared/StructuredData';

const SITE_NAME = 'Pro-Tech IT Consulting';
// PLACEHOLDER — replace favicon.svg with a dedicated 1200x630 social image (PNG) for
// richer link previews; SVG renders in-page but not on all social platforms.
const DEFAULT_OG_IMAGE = `${SITE_URL}/favicon.svg`;

function SEO({ title, description, canonicalUrl, ogImage }) {
  const { pathname } = useLocation();
  const fullTitle = title.includes('Pro-Tech') ? title : `${title} — ${SITE_NAME}`;
  // Build a canonical/OG URL from the current route unless one is passed explicitly.
  const canonical =
    canonicalUrl || `${SITE_URL}${pathname === '/' ? '/' : pathname.replace(/\/+$/, '')}`;
  const image = ogImage || DEFAULT_OG_IMAGE;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

export default SEO;
