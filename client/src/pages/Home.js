import React from 'react';

import HeroBanner from '../sections/HeroBanner';
import About from '../sections/About';
import Experience from '../sections/Experience';
import Process from '../sections/Process';
import Services from '../sections/Services';

function Home() {
  return (
    <>
      <HeroBanner />
      <About />
      <Experience />
      <Process />
      <Services />
    </>
  );
}

export default Home;
