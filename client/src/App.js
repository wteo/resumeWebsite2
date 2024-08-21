import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer';
import Resume from './components/Resume';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Error404 from './pages/Error404';

import Article from './articles/templates/Article';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Routes>
              <Route path="/" element={<Home />} />
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
