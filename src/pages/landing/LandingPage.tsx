import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import PacksGrid from './components/PacksGrid';
import Faq from './components/Faq';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <PacksGrid />
        <Faq />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
