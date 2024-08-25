import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer';
import Resume from './components/Resume';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Error404 from './pages/Error404';

// Blog Posts
import Etikette from './articles/projects/Etikette';
import Play from './articles/projects/Play';
import Plico from './articles/projects/Plico';
import Automic from './articles/projects/Automic';
import Blockchain from './articles/projects/Blockchain';
import Gotsauss from './articles/projects/Gotsauss';
import TLS from './articles/projects/TLS';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/etikette" element={<Etikette />} />
              <Route path="/projects/play" element={<Play />} />
              <Route path="/projects/plico" element={<Plico />} />
              <Route path="/projects/automic" element={<Automic />} />
              <Route path="/projects/blockchain" element={<Blockchain />} />
              <Route path="/projects/gotsauss" element={<Gotsauss />} />
              <Route path="/projects/tls" element={<TLS />} />
              <Route path="/contact" element={<Contact />}/>
              <Route path="/blogs" element={<Error404 />} />
              <Route path="/*" element={<Error404 />} />
            </Routes>
            <Footer />
        <Resume />
      </Router>
    </div>
  );
}

export default App;
