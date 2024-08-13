import Files from './components/Files';
import Resume from './components/Resume';
import About from './components/About';
import Footer from './components/Footer';
import HeroBanner from './components/HeroBanner';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';

import './App.scss';

function App() {

  return (
    <div className="App">
      <header className="header__menu">
      </header>
      
      { /*
      <Files />
      <Resume />
      <HeroBanner />
      <About />
      <Experience />
      <Skills />
            */ }
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
