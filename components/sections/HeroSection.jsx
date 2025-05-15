'use client';

import React from 'react';
import { AnimatedButton } from '../AnimatedButton';

const HeroSection = ({ companyColors }) => {
  return (
    <section 
      id="hero" 
      className="text-white text-center d-flex align-items-center justify-content-center" 
      style={{ 
        height: '100vh', // Full viewport height
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#000000', // Fallback color
        padding: 0,
        margin: 0
      }}
    >
      {/* Marbled Epoxy Background Image */}
      <div 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          zIndex: 0,
          backgroundImage: 'url("/images/epoxyBackground1.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100vh',
          overflow: 'hidden'
        }}
      ></div>
      
      {/* Content */}
      <div className="container pb-5" style={{ position: 'relative', zIndex: 2, paddingTop: 0, marginTop: 0 }}>
        <h1 className="display-3 fw-bold mb-4" style={{
          textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
          color: '#fff',
          fontFamily: 'var(--font-oswald), sans-serif',
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}>
          Premium Epoxy Floors
        </h1>
        <p className="lead col-lg-8 mx-auto mb-5" style={{fontSize: '1.5rem', textShadow: '1px 1px 3px rgba(0,0,0,0.5)'}}>
          Built from the Ground Up
        </p>
        <div>
          <AnimatedButton 
            href="#contact" 
            className="btn btn-lg mt-3 me-3" 
            style={{
              backgroundColor: companyColors.primary, 
              borderColor: companyColors.primary, 
              color: '#fff', 
              padding: '15px 30px', 
              fontSize: '1.2rem',
              fontFamily: 'var(--font-oswald), sans-serif',
              fontWeight: '600',
              letterSpacing: '1px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}
            variant="primary"
            hoverEffect="lift"
          >
            Get a Free Quote
          </AnimatedButton>
          <AnimatedButton 
            href="#contact" 
            className="btn btn-outline-light btn-lg mt-3" 
            style={{
              borderColor: '#fff', 
              color: '#fff', 
              padding: '15px 30px', 
              fontSize: '1.2rem',
              fontFamily: 'var(--font-oswald), sans-serif',
              fontWeight: '600',
              letterSpacing: '1px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}
            variant="outline"
            hoverEffect="lift"
          >
            Book Now
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
