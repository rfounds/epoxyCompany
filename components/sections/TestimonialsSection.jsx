'use client';

import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const TestimonialsSection = ({ companyColors }) => {
  return (
    <section id="testimonials" className="py-5" style={{
      backgroundColor: 'rgba(25,30,40,0.25)',  // Match other sections background
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
        }}>Client Love</h2>
        
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            <div 
              className="p-5 rounded position-relative" 
              style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                overflow: 'hidden'
              }}
            >
              <FaQuoteLeft 
                size={50} 
                style={{
                  color: 'rgba(255,255,255,0.05)', 
                  position: 'absolute',
                  top: 30,
                  left: 30,
                  transform: 'scale(2)',
                  opacity: 0.4
                }}
              />
              
              <div className="d-flex flex-column align-items-center justify-content-center">
                <div className="mb-4" style={{ color: companyColors.secondary }}>
                  <FaStar size={20} style={{ marginRight: '2px' }} />
                  <FaStar size={20} style={{ marginRight: '2px' }} />
                  <FaStar size={20} style={{ marginRight: '2px' }} />
                  <FaStar size={20} style={{ marginRight: '2px' }} />
                  <FaStar size={20} />
                </div>
                
                <p className="lead mb-4" style={{ 
                  fontSize: '1.3rem', 
                  fontStyle: 'italic', 
                  color: '#fff',
                  maxWidth: '700px'
                }}>
                  Testimonials and Before/After Photos Coming Soon!
                </p>
                
                <div 
                  className="text-center py-2 px-4 rounded-pill mt-2" 
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <p className="mb-0" style={{ color: companyColors.secondary, fontWeight: 600 }}>
                    Share your experience with us on Instagram or TikTok!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
