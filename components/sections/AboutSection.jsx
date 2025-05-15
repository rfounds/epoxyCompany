'use client';

import React from 'react';

const AboutSection = ({ companyColors }) => {
  // Subtle About Section Enhancements
  return (
    <section id="about" className="py-5" style={{
      backgroundColor: 'rgba(25,30,40,0.25)',  // Softer, less harsh background
      borderTop: '1px solid rgba(255,255,255,0.05)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      boxShadow: 'inset 0 0 25px rgba(0,0,0,0.15)',
    }}>
      <div className="container">
        {/* Subtle decorative element */}
        <div className="text-center mb-2">
          <div style={{
            height: '3px',
            width: '60px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
            margin: '0 auto 15px',
            borderRadius: '2px'
          }}></div>
        </div>
        
        <h2 className="text-center mb-5 display-5" style={{
          color: '#fff', 
          fontFamily: 'var(--font-oswald), sans-serif',
          fontWeight: '700',
          textTransform: 'uppercase',
          letterSpacing: '1.5px',
          textShadow: '1px 1px 5px rgba(0,0,0,0.4)'
        }}>About 1st Gen Epoxy</h2>
        
        <div className="row">
          <div className="col-lg-10 mx-auto text-center" style={{
            padding: '20px',
            backgroundColor: 'rgba(255,255,255,0.03)',
            borderRadius: '12px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
          }}>
            <p className="lead mb-4" style={{
              fontSize: '1.2rem',
              lineHeight: '1.6'
            }}>
              At 1st Gen Epoxy Floors, we're more than just a flooring company — we're a first-generation, family-owned business built on pride, craftsmanship, and a vision for generational success. We specialize in high-quality epoxy flooring solutions that transform ordinary concrete into durable, stunning surfaces that last.
            </p>
            <p style={{fontSize: '1.1rem', marginBottom: '16px'}}>
              From residential garages to commercial spaces, every project we take on is treated like it's our own. We value honesty, hard work, and exceeding expectations — because for us, this isn't just a job, it's a legacy in the making.
            </p>
            <p style={{fontSize: '1.1rem', color: '#eaeaea'}}>
              Let us help you elevate your space with style, strength, and a finish you'll love for years to come.
            </p>
            
            {/* Simple accent element */}
            <div style={{
              height: '2px',
              width: '40px',
              background: 'rgba(255,255,255,0.2)',
              margin: '20px auto 5px',
              borderRadius: '2px'
            }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
