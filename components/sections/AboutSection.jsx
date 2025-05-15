'use client';

import React from 'react';

const AboutSection = ({ companyColors }) => {
  return (
    <section id="about" className="py-5" style={{backgroundColor: 'rgba(255,255,255,0.05)'}}>
      <div className="container">
        <h2 className="text-center mb-5 display-5" style={{
          color: '#fff', 
          fontFamily: 'var(--font-oswald), sans-serif',
          fontWeight: '700',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          textShadow: '1px 1px 3px rgba(0,0,0,0.3)'
        }}>About 1st Gen Epoxy</h2>
        <div className="row">
          <div className="col-lg-10 mx-auto text-center">
            <p className="lead mb-4" style={{fontSize: '1.2rem'}}>
              At 1st Gen Epoxy Floors, we're more than just a flooring company — we're a first-generation, family-owned business built on pride, craftsmanship, and a vision for generational success. We specialize in high-quality epoxy flooring solutions that transform ordinary concrete into durable, stunning surfaces that last.
            </p>
            <p style={{fontSize: '1.1rem'}}>
              From residential garages to commercial spaces, every project we take on is treated like it's our own. We value honesty, hard work, and exceeding expectations — because for us, this isn't just a job, it's a legacy in the making.
            </p>
            <p style={{fontSize: '1.1rem'}}>
              Let us help you elevate your space with style, strength, and a finish you'll love for years to come.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
