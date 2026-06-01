import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Problem from './components/Problem';
import Team from './components/Team';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ContactPage from './pages/ContactPage';
import './index.css';

function HomePage() {
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
