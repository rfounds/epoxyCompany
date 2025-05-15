'use client';

import React from 'react';
import { benefits } from '../../data/services';
import { FaUsers, FaAward, FaPalette, FaMoneyBillWave } from 'react-icons/fa';

// Helper function to get the appropriate icon for each benefit
const getBenefitIcon = (id) => {
  switch(id) {
    case 'family': return <FaUsers size={36} />;
    case 'durable': return <FaAward size={36} />;
    case 'stylish': return <FaPalette size={36} />;
    case 'affordable': return <FaMoneyBillWave size={36} />;
    default: return <FaAward size={36} />;
  }
};

const WhyChooseUsSection = ({ companyColors }) => {
  return (
    <section id="why-choose-us" className="py-5" style={{
      backgroundColor: 'rgba(25,30,40,0.25)',  // Match About section background
      borderTop: '1px solid rgba(255,255,255,0.05)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      boxShadow: 'inset 0 0 25px rgba(0,0,0,0.15)',
    }}>
      <div className="container">
        {/* Subtle decorative element - consistent with other sections */}
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
        }}>Why Choose Us?</h2>
        
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <p className="lead mb-5" style={{ fontSize: '1.2rem', lineHeight: '1.6', color: 'rgba(255,255,255,0.9)' }}>
              At 1st Gen Epoxy, we're committed to excellence in every project. Here's why customers throughout Oklahoma choose us for their epoxy flooring needs:
            </p>
          </div>
        </div>
        
        <div className="row">
          {benefits.map((benefit) => (
            <div className="col-md-3 mb-4" key={benefit.id}>
              <div 
                className="p-4 rounded h-100 text-center" 
                style={{
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
                }}
              >
                <div style={{
                  width: '70px',
                  height: '70px',
                  margin: '0 auto 20px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: companyColors.secondary,
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                }}>
                  {getBenefitIcon(benefit.id)}
                </div>
                <h5 
                  className="fw-bold mb-3" 
                  style={{
                    color: companyColors.secondary,
                    fontFamily: 'var(--font-oswald), sans-serif',
                    letterSpacing: '0.5px',
                  }}
                >
                  {benefit.title}
                </h5>
                <p className="mb-0" style={{ color: 'rgba(255,255,255,0.7)' }}>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
