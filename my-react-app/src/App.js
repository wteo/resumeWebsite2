import Files from './components/Files';
import Resume from './components/Resume';
import ContentContainer from './ui/ContentContainer';
import About from './components/About';
import Footer from './components/Footer';
import HeroBanner from './components/HeroBanner';
import Experience from './components/Experience';
import Tools from './components/Tools';

import './App.scss';

function App() {

  return (
    <div className="App">
      <header className="header__menu">
      </header>
      <Files />
      <Resume />
      <ContentContainer>
        <HeroBanner />
        <About />
        <Experience />
        <Tools />
        <Footer />
      </ContentContainer>
    </div>
  );
}

export default App;
