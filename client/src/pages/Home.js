import React from 'react';

import Seo from '../components/Seo';

import HeroBanner from '../sections/HeroBanner';
import About from '../sections/About';
import Experience from '../sections/Experience';
import Process from '../sections/Process';
import Services from '../sections/Services';

function Home() {
  return (
    <>
      <Seo
        path="/"
        description="Wendy Teo is a freelance Business Systems Integration Specialist in Sydney. 10+ years in finance operations, now building HubSpot, Shopify and finance system API integrations for SMEs across APAC."
      />
      <HeroBanner />
      <About />
      <Experience />
      <Process />
      <Services />
    </>
  );
}

export default Home;
