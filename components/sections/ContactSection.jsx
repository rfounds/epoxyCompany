'use client';

import React from 'react';
import { AnimatedSubmitButton } from '../AnimatedButton';

const ContactSection = ({ companyColors }) => {
  return (
    <section id="contact" className="py-5" style={{
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
        }}>Request a Quote</h2>
        
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div 
              className="p-4 rounded" 
              style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                borderRadius: '15px'
              }}
            >
              <form id="contact-form" action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST"> {/* Replace YOUR_FORMSPREE_ID */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label" style={{
                    color: companyColors.secondary,
                    fontFamily: 'var(--font-oswald), sans-serif',
                    fontWeight: '500',
                    fontSize: '1.05rem'
                  }}>*Full Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    name="name" 
                    required 
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.05)', 
                      color:'#fff', 
                      borderColor: 'rgba(255,255,255,0.1)',
                      padding: '12px 15px',
                      borderRadius: '8px',
                      boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)',
                      transition: 'all 0.3s ease'
                    }}
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label" style={{
                    color: companyColors.secondary,
                    fontFamily: 'var(--font-oswald), sans-serif',
                    fontWeight: '500',
                    fontSize: '1.05rem'
                  }}>*Phone Number</label>
                  <input 
                    type="tel" 
                    className="form-control" 
                    id="phone" 
                    name="phone" 
                    required 
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.05)', 
                      color:'#fff', 
                      borderColor: 'rgba(255,255,255,0.1)',
                      padding: '12px 15px',
                      borderRadius: '8px',
                      boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)',
                      transition: 'all 0.3s ease'
                    }}
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="email" className="form-label" style={{
                    color: companyColors.secondary,
                    fontFamily: 'var(--font-oswald), sans-serif',
                    fontWeight: '500',
                    fontSize: '1.05rem'
                  }}>*Email Address</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    name="email" 
                    required 
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.05)', 
                      color:'#fff', 
                      borderColor: 'rgba(255,255,255,0.1)',
                      padding: '12px 15px',
                      borderRadius: '8px',
                      boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)',
                      transition: 'all 0.3s ease'
                    }}
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="address" className="form-label" style={{
                    color: companyColors.secondary,
                    fontFamily: 'var(--font-oswald), sans-serif',
                    fontWeight: '500',
                    fontSize: '1.05rem'
                  }}>*Project Address</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="address" 
                    name="address" 
                    required 
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.05)', 
                      color:'#fff', 
                      borderColor: 'rgba(255,255,255,0.1)',
                      padding: '12px 15px',
                      borderRadius: '8px',
                      boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)',
                      transition: 'all 0.3s ease'
                    }}
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="floorType" className="form-label" style={{
                    color: companyColors.secondary,
                    fontFamily: 'var(--font-oswald), sans-serif',
                    fontWeight: '500',
                    fontSize: '1.05rem'
                  }}>*Type of Floor</label>
                  <select 
                    className="form-select" 
                    id="floorType" 
                    name="floorType" 
                    required 
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.05)', 
                      color:'#fff', 
                      borderColor: 'rgba(255,255,255,0.1)',
                      padding: '12px 15px',
                      borderRadius: '8px',
                      boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <option value="">-- Select Floor Type --</option>
                    <option value="garage">Garage</option>
                    <option value="basement">Basement</option>
                    <option value="bathroom">Bathroom</option>
                    <option value="studio">Studio</option>
                    <option value="trailer">Trailer</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="finish" className="form-label" style={{
                    color: companyColors.secondary,
                    fontFamily: 'var(--font-oswald), sans-serif',
                    fontWeight: '500',
                    fontSize: '1.05rem'
                  }}>*Finish Wanted</label>
                  <select 
                    className="form-select" 
                    id="finish" 
                    name="finish" 
                    required 
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.05)', 
                      color:'#fff', 
                      borderColor: 'rgba(255,255,255,0.1)',
                      padding: '12px 15px',
                      borderRadius: '8px',
                      boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <option value="">-- Select Finish --</option>
                    <option value="solid">Solid Color</option>
                    <option value="flake">Decorative Flake</option>
                    <option value="metallic-solid">Metallic Solid</option>
                    <option value="metallic-marbled">Metallic Marbled</option>
                    <option value="custom">Custom</option>
                  </select>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="engraving" className="form-label" style={{
                    color: companyColors.secondary,
                    fontFamily: 'var(--font-oswald), sans-serif',
                    fontWeight: '500',
                    fontSize: '1.05rem'
                  }}>Engraving or Logo?</label>
                  <select 
                    className="form-select" 
                    id="engraving" 
                    name="engraving" 
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.05)', 
                      color:'#fff', 
                      borderColor: 'rgba(255,255,255,0.1)',
                      padding: '12px 15px',
                      borderRadius: '8px',
                      boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="squareFootage" className="form-label" style={{
                    color: companyColors.secondary,
                    fontFamily: 'var(--font-oswald), sans-serif',
                    fontWeight: '500',
                    fontSize: '1.05rem'
                  }}>*Square Footage (approx.)</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="squareFootage" 
                    name="squareFootage" 
                    required 
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.05)', 
                      color:'#fff', 
                      borderColor: 'rgba(255,255,255,0.1)',
                      padding: '12px 15px',
                      borderRadius: '8px',
                      boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)',
                      transition: 'all 0.3s ease'
                    }}
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="quotedPrice" className="form-label" style={{
                    color: companyColors.secondary,
                    fontFamily: 'var(--font-oswald), sans-serif',
                    fontWeight: '500',
                    fontSize: '1.05rem'
                  }}>Quoted Price (if any)</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="quotedPrice" 
                    name="quotedPrice" 
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.05)', 
                      color:'#fff', 
                      borderColor: 'rgba(255,255,255,0.1)',
                      padding: '12px 15px',
                      borderRadius: '8px',
                      boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)',
                      transition: 'all 0.3s ease'
                    }}
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="notes" className="form-label" style={{
                    color: companyColors.secondary,
                    fontFamily: 'var(--font-oswald), sans-serif',
                    fontWeight: '500',
                    fontSize: '1.05rem'
                  }}>Additional Notes</label>
                  <textarea 
                    className="form-control" 
                    id="notes" 
                    name="notes" 
                    rows="3" 
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.05)', 
                      color:'#fff', 
                      borderColor: 'rgba(255,255,255,0.1)',
                      padding: '12px 15px',
                      borderRadius: '8px',
                      boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)',
                      transition: 'all 0.3s ease'
                    }}
                  ></textarea>
                </div>
                
                <div className="text-center mt-4">
                  <AnimatedSubmitButton 
                    className="btn btn-lg" 
                    style={{
                      backgroundColor: companyColors.primary, 
                      borderColor: companyColors.primary, 
                      color: '#fff', 
                      padding: '15px 45px',
                      fontFamily: 'var(--font-oswald), sans-serif',
                      fontWeight: '600',
                      letterSpacing: '1px',
                      boxShadow: '0 8px 15px rgba(0,0,0,0.2)',
                      borderRadius: '8px',
                      fontSize: '1.1rem',
                      transition: 'all 0.3s ease'
                    }}
                    variant="primary"
                  >
                    Submit Request
                  </AnimatedSubmitButton>
                </div>
                
                <p className="text-center mt-3" style={{ color: 'rgba(255,255,255,0.6)' }}><small>* Required field</small></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
