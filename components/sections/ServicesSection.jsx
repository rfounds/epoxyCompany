'use client';

import React from 'react';
import { applications, finishes } from '../../data/services';
import { FaCog, FaPaintRoller, FaHome, FaBath, FaPalette, FaTools, FaAward, FaRing, FaFillDrip, FaRegImage } from 'react-icons/fa';

// Helper function to get the appropriate icon for each service
const getServiceIcon = (id) => {
  switch(id) {
    case 'garage': return <FaHome size={24} />;
    case 'basement': return <FaHome size={24} />;
    case 'bathroom': return <FaBath size={24} />;
    case 'studio': return <FaPalette size={24} />;
    case 'trailer': return <FaTools size={24} />;
    case 'other': return <FaCog size={24} />;
    default: return <FaCog size={24} />;
  }
};

// Helper function to get the appropriate icon for each finish
const getFinishIcon = (id) => {
  switch(id) {
    case 'flake': return <FaPaintRoller size={24} />;
    case 'metallic': return <FaRing size={24} />;
    case 'solid': return <FaFillDrip size={24} />;
    case 'custom': return <FaPalette size={24} />;
    case 'logo': return <FaRegImage size={24} />;
    default: return <FaAward size={24} />;
  }
};

const ServicesSection = ({ companyColors }) => {
  return (
    <section id="services" className="py-5" style={{
      backgroundColor: 'rgba(25,30,40,0.25)',  // Match About section background
      borderTop: '1px solid rgba(255,255,255,0.05)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      boxShadow: 'inset 0 0 25px rgba(0,0,0,0.15)',
    }}>
      <div className="container">
        {/* Subtle decorative element - similar to About section */}
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
        }}>Our Services</h2>
        
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <p className="lead mb-5" style={{ fontSize: '1.2rem', lineHeight: '1.6', color: 'rgba(255,255,255,0.9)' }}>
              We offer premium epoxy flooring solutions for a variety of applications and finishes. Our expert team ensures a flawless installation every time.
            </p>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-6 mb-5">
            <h3 className="text-center mb-4" style={{
              color: companyColors.primary,
              fontFamily: 'var(--font-oswald), sans-serif',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>Applications</h3>
            
            <div className="list-group">
              {applications.map((app) => (
                <div 
                  key={app.id} 
                  className="list-group-item mb-4" 
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.05)',
                    padding: '20px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    overflow: 'hidden',
                    position: 'relative'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 10px 15px rgba(0,0,0,0.1)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                  }}
                >
                  <div className="d-flex align-items-center mb-2">
                    <div style={{
                      width: '45px',
                      height: '45px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: '15px',
                      color: companyColors.secondary
                    }}>
                      {getServiceIcon(app.id)}
                    </div>
                    <h5 className="mb-0" style={{
                      color: companyColors.secondary,
                      fontFamily: 'var(--font-oswald), sans-serif',
                      fontWeight: '600'
                    }}>{app.title}</h5>
                  </div>
                  <p className="mb-0 text-white-50" style={{ marginLeft: '60px' }}>{app.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="col-md-6 mb-4">
            <h3 className="text-center mb-4" style={{
              color: companyColors.primary,
              fontFamily: 'var(--font-oswald), sans-serif',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>Finishes & Customization</h3>
            
            <div className="list-group">
              {finishes.map((finish) => (
                <div 
                  key={finish.id} 
                  className="list-group-item mb-4" 
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.05)',
                    padding: '20px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    overflow: 'hidden',
                    position: 'relative'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 10px 15px rgba(0,0,0,0.1)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                  }}
                >
                  <div className="d-flex align-items-center mb-2">
                    <div style={{
                      width: '45px',
                      height: '45px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: '15px',
                      color: companyColors.secondary
                    }}>
                      {getFinishIcon(finish.id)}
                    </div>
                    <h5 className="mb-0" style={{
                      color: companyColors.secondary,
                      fontFamily: 'var(--font-oswald), sans-serif',
                      fontWeight: '600'
                    }}>{finish.title}</h5>
                  </div>
                  <p className="mb-0 text-white-50" style={{ marginLeft: '60px' }}>{finish.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
