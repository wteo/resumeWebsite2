const SITE_URL = 'https://wendyteo.dev';

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: 'Wendy Teo',
  jobTitle: 'Business Systems Integration Specialist',
  description: 'Freelance Business Systems Integration Specialist in Sydney. 10+ years in finance operations, now specialising in HubSpot, Shopify, and finance system API integrations for SMEs across APAC.',
  url: SITE_URL,
  email: 'hello@wendyteo.dev',
  telephone: '+61458369510',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sydney',
    addressRegion: 'NSW',
    addressCountry: 'AU'
  },
  worksFor: {
    '@type': 'Organization',
    name: 'T&H Digital',
    url: SITE_URL
  },
  knowsAbout: [
    'HubSpot API',
    'Shopify API',
    'CRM Integration',
    'Business Systems Integration',
    'Accounts Receivable',
    'Quote-to-Cash Automation',
    'Finance Operations',
    'Node.js',
    'Express'
  ],
  knowsLanguage: ['English', 'Malay', 'Mandarin', 'Hokkien'],
  sameAs: [
    'https://linkedin.com/in/wendy-teo-36821461',
    'https://github.com/wteo',
    'https://medium.com/@wendyteo.wy'
  ]
};

export const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#business`,
  name: 'T&H Digital',
  description: 'Business systems integration consultancy connecting CRM, finance, and e-commerce platforms for Australian and APAC SMEs.',
  url: SITE_URL,
  founder: { '@id': `${SITE_URL}/#person` },
  areaServed: [
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Place', name: 'APAC' }
  ],
  serviceType: [
    'HubSpot Custom Integration',
    'Shopify Backend Integration',
    'CRM & Finance System Integration',
    'Quote-to-Cash Automation',
    'Platform Migration'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@wendyteo.dev',
    telephone: '+61458369510',
    contactType: 'customer service',
    areaServed: 'AU'
  }
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'Wendy Teo — Business Systems Integration Specialist',
  publisher: { '@id': `${SITE_URL}/#person` },
  inLanguage: 'en-AU'
};

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`
    }))
  };
}

export function faqPageSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

export function articleSchema({ headline, description, path, image, datePublished }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url: `${SITE_URL}${path}`,
    image: image ? `${SITE_URL}${image}` : undefined,
    datePublished,
    author: { '@id': `${SITE_URL}/#person` },
    publisher: { '@id': `${SITE_URL}/#person` },
    mainEntityOfPage: `${SITE_URL}${path}`
  };
}
