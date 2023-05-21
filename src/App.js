import React from 'react';

// import components
import Header from './assets/components/Header';
import Hero from './assets/components/Hero';
import Brands from './assets/components/Brands';
import About from './assets/components/About';
import Skills from './assets/components/Skills';
import Portfolio from './assets/components/Portfolio';
import Services from './assets/components/Services';
import Testimonials from './assets/components/Testimonials';
import Contact from './assets/components/Contact';
import Footer from './assets/components/Footer';
import BackToTop from './assets/components/BackToTop';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Brands />
      <About />
      <Skills />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;
