import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Problem from './components/Problem';
import Team from './components/Team';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Problem />
      <Team />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
