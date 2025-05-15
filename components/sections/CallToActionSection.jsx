'use client';

import React from 'react';
import { AnimatedButton } from '../AnimatedButton';

const CallToActionSection = ({ companyColors }) => {
  return (
    <section id="cta" className="py-5 text-center" style={{backgroundColor: companyColors.primary}}>
      <div className="container">
        <h2 className="display-5 fw-bold mb-4 text-white">Ready to Transform Your Space?</h2>
        <p className="lead text-white mb-4">Let's discuss your project and how we can bring your vision to life.</p>
        <AnimatedButton 
          href="#contact" 
          className="btn btn-light btn-lg me-3" 
          style={{
            padding: '15px 30px', 
            fontSize: '1.2rem', 
            color: companyColors.primary,
            backgroundColor: '#fff',
            fontFamily: 'var(--font-oswald), sans-serif',
            fontWeight: '600',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}
          variant="light"
          hoverEffect="lift"
        >
          Request a Quote
        </AnimatedButton>
        <AnimatedButton 
          href="tel:405-780-2438" 
          className="btn btn-outline-light btn-lg" 
          style={{
            padding: '15px 30px', 
            fontSize: '1.2rem', 
            borderColor: '#fff', 
            color: '#fff',
            fontFamily: 'var(--font-oswald), sans-serif',
            fontWeight: '600',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}
          variant="outline"
          hoverEffect="lift"
        >
          Call Us Now
        </AnimatedButton>
      </div>
    </section>
  );
};

export default CallToActionSection;
