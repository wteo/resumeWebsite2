import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://wendyteo.dev';
const DEFAULT_TITLE = 'Wendy Teo | Business Systems Integration Specialist based in Sydney';
const DEFAULT_DESCRIPTION = 'Freelance Business Systems Integration Specialist in Sydney. HubSpot, Shopify and finance system API integrations for SMEs across APAC.';

function Seo({ title, description, path, jsonLd }) {
  const fullTitle = title ? `${title} | Wendy Teo` : DEFAULT_TITLE;
  const fullDescription = description || DEFAULT_DESCRIPTION;
  const canonical = path ? `${SITE_URL}${path}` : SITE_URL;

  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Wendy Teo" />
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>
      ))}
    </Helmet>
  );
}

export default Seo;
