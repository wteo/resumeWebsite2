import { useState } from 'react';

import Files from './components/Files';
import Resume from './components/Resume';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroBanner from './components/HeroBanner';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './App.scss';

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="App">
      <Header />
        <Files />
        { 
          /* 
        <Files />
        <Resume />
        <HeroBanner />
        <About />
        <Experience />
        <Skills />
        <Projects />
          */
        }
        <Contact />
      <Footer />
    </div>
  );
}

export default App;
