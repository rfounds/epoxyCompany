'use client';

import React from 'react';
import { AnimatedButton } from '../AnimatedButton';
import { FaPhoneAlt, FaComments } from 'react-icons/fa';

const CallToActionSection = ({ companyColors }) => {
  return (
    <section 
      id="cta" 
      className="py-5 text-center position-relative" 
      style={{
        background: `linear-gradient(135deg, ${companyColors.primary} 0%, ${companyColors.primary}dd 70%, ${companyColors.primary}aa 100%)`,
        borderTop: '1px solid rgba(255,255,255,0.1)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2), inset 0 0 50px rgba(0,0,0,0.2)',
        borderRadius: '0px',
        marginTop: '2rem',
        marginBottom: '2rem',
        overflow: 'hidden',
        padding: '3rem 0',
      }}
    >
      {/* Background design elements */}
      <div 
        className="position-absolute" 
        style={{ 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%',
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', 
          backgroundSize: '20px 20px',
          opacity: 0.3,
          zIndex: 1 
        }}
      />

      {/* Diagonal accent line */}
      <div 
        className="position-absolute" 
        style={{ 
          top: 0, 
          right: 0, 
          width: '100%', 
          height: '100%',
          background: `linear-gradient(45deg, transparent 49.5%, rgba(255,255,255,0.1) 49.5%, rgba(255,255,255,0.1) 50.5%, transparent 50.5%)`,
          backgroundSize: '30px 30px',
          opacity: 0.4,
          zIndex: 2
        }}
      />

      <div className="container position-relative" style={{ zIndex: 3 }}>
        {/* Subtle decorative element */}
        <div className="text-center mb-3">
          <div style={{
            height: '3px',
            width: '80px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
            margin: '0 auto 20px',
            borderRadius: '2px'
          }}></div>
        </div>

        <h2 
          className="display-5 fw-bold mb-3" 
          style={{
            color: '#fff',
            fontFamily: 'var(--font-oswald), sans-serif',
            fontWeight: '800',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
          }}
        >
          Ready to Transform Your Space?
        </h2>
        
        <p 
          className="lead mb-5" 
          style={{
            color: 'rgba(255,255,255,0.9)',
            fontSize: '1.25rem',
            maxWidth: '700px',
            margin: '0 auto 2rem',
            textShadow: '1px 1px 3px rgba(0,0,0,0.2)',
          }}
        >
          Let's discuss your project and how we can bring your vision to life.
        </p>
        
        <div className="d-flex justify-content-center flex-wrap">
          <AnimatedButton 
            href="#contact" 
            className="btn btn-light btn-lg me-3 mb-3 d-inline-flex align-items-center" 
            style={{
              padding: '15px 30px', 
              fontSize: '1.2rem', 
              color: companyColors.primary,
              backgroundColor: '#fff',
              fontFamily: 'var(--font-oswald), sans-serif',
              fontWeight: '600',
              boxShadow: '0 8px 15px rgba(0,0,0,0.2)',
              borderRadius: '8px',
              border: 'none',
            }}
            variant="light"
            hoverEffect="lift"
          >
            <FaComments style={{ marginRight: '10px' }} /> Request a Quote
          </AnimatedButton>
          
          <AnimatedButton 
            href="tel:405-780-2438" 
            className="btn btn-outline-light btn-lg mb-3 d-inline-flex align-items-center" 
            style={{
              padding: '15px 30px', 
              fontSize: '1.2rem', 
              borderColor: 'rgba(255,255,255,0.8)', 
              borderWidth: '2px',
              color: '#fff',
              fontFamily: 'var(--font-oswald), sans-serif',
              fontWeight: '600',
              boxShadow: '0 8px 15px rgba(0,0,0,0.15)',
              borderRadius: '8px',
            }}
            variant="outline"
            hoverEffect="lift"
          >
            <FaPhoneAlt style={{ marginRight: '10px' }} /> Call Us Now
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
