import React from 'react';
import FAQs from '../components/FAQ';
import About from '../components/About';
import Extras from '../components/Extras';
import { Hero } from '../components';

const Homepage = () => {
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <Hero />
      <About />
      <Extras />
      <FAQs />
    </div>
  );
};

export default Homepage;
