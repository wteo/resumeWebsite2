import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Resume from './components/Resume';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroBanner from './components/HeroBanner';
import Experience from './components/Experience';
import Process from './components/Process';
import Services from './components/Services';

import Projects from './components/Projects';
import Contact from './components/Contact';
import Article from './components/Article';
import Error404 from './components/Error404';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Routes>
              <Route path="/" element={<>
                <HeroBanner />
                <About />
                <Experience />
                <Process />
                <Services />
              </>} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blogs" element={<Article />} />
              <Route path="/*" element={<Error404 />} />
            </Routes>
            <Footer />
        <Resume />
      </Router>
    </div>
  );
}

export default App;
