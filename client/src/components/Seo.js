import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://wendyteo.dev';
const DEFAULT_TITLE = 'Wendy Teo | Business Systems Integration Specialist based in Sydney';
const DEFAULT_DESCRIPTION = 'Freelance Business Systems Integration Specialist in Sydney. HubSpot, Shopify and finance system API integrations for SMEs across APAC.';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

function Seo({ title, description, path, jsonLd, ogType = 'website', image }) {
  const fullTitle = title ? `${title} | Wendy Teo` : DEFAULT_TITLE;
  const fullDescription = description || DEFAULT_DESCRIPTION;
  const canonical = path ? `${SITE_URL}${path}` : SITE_URL;
  const ogImage = image ? (image.startsWith('http') ? image : `${SITE_URL}${image}`) : DEFAULT_OG_IMAGE;

  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Wendy Teo" />

      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Wendy Teo" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content="Wendy Teo, Business Systems Integration Specialist based in Sydney" />
      <meta property="og:locale" content="en_AU" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="Wendy Teo, Business Systems Integration Specialist based in Sydney" />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>
      ))}
    </Helmet>
  );
}

export default Seo;
