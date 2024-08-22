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
import Etikette from './articles/posts/Etikette';
import Plico from './articles/posts/Plico';
import Automic from './articles/posts/Automic';

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
              <Route path="/projects/plico" element={<Plico />} />
              <Route path="/projects/automic" element={<Automic />} />
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
