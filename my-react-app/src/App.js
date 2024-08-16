import { useState } from 'react';

import Files from './components/Files';
import Resume from './components/Resume';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroBanner from './components/HeroBanner';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Services from './components/Services';

import Projects from './components/Projects';
import Contact from './components/Contact';
import Blogs from './components/Blogs';

import './App.scss';

function App() {

  const [url, setUrl] = useState('home'); // This state manages the url route 

  const routeHandler = (newUrl) => setUrl(newUrl);

  return (
    <div className="App">
      {url !== 'home' && <Header routeHandler={routeHandler} />}
      {url === 'home' && <Files routeHandler={routeHandler} />}
      <Resume />
      {url === 'home' && <HeroBanner />}
      {url === 'home' && <About routeHandler={routeHandler} /> }
      {url === 'home' && <Experience />}
      {url === 'home' && <Skills />}
      {url === 'home' && <Services />}
      {url === 'projects' && <Projects />}
      {url === 'contact' && <Contact />}
      {url === 'blogs' && <Blogs />}
      <Footer routeHandler={routeHandler} />
    </div>
  );
}

export default App;
