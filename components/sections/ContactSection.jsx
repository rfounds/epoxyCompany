'use client';

import React, { useState } from 'react';
import { AnimatedSubmitButton } from '../AnimatedButton';

const ContactSection = ({ companyColors }) => {
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    success: false,
    message: ''
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Set submitting state
    setFormStatus({
      ...formStatus,
      submitting: true,
      message: 'Sending your request...'
    });
    
    try {
      // Create form data object from the form fields
      const formData = {};
      const formElements = e.target.elements;
      
      for (let i = 0; i < formElements.length; i++) {
        const element = formElements[i];
        if (element.name && element.name !== '') {
          formData[element.name] = element.value;
        }
      }
      
      // Send the form data to our API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (result.success) {
        // Clear the form
        e.target.reset();
        
        // Set success state
        setFormStatus({
          submitting: false,
          submitted: true,
          success: true,
          message: result.message
        });
      } else {
        // Set error state
        setFormStatus({
          submitting: false,
          submitted: true,
          success: false,
          message: result.message || 'Failed to send your request. Please try again.'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      
      // Set error state
      setFormStatus({
        submitting: false,
        submitted: true,
        success: false,
        message: 'An unexpected error occurred. Please try again later.'
      });
    }
  };
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
              <form id="contact-form" onSubmit={handleSubmit}>
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
                    <option value="" style={{ backgroundColor: '#333', color: '#fff' }}>-- Select Floor Type --</option>
                    <option value="garage" style={{ backgroundColor: '#333', color: '#fff' }}>Garage</option>
                    <option value="basement" style={{ backgroundColor: '#333', color: '#fff' }}>Basement</option>
                    <option value="bathroom" style={{ backgroundColor: '#333', color: '#fff' }}>Bathroom</option>
                    <option value="studio" style={{ backgroundColor: '#333', color: '#fff' }}>Studio</option>
                    <option value="trailer" style={{ backgroundColor: '#333', color: '#fff' }}>Trailer</option>
                    <option value="other" style={{ backgroundColor: '#333', color: '#fff' }}>Other</option>
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
                    <option value="" style={{ backgroundColor: '#333', color: '#fff' }}>-- Select Finish --</option>
                    <option value="solid" style={{ backgroundColor: '#333', color: '#fff' }}>Solid Color</option>
                    <option value="flake" style={{ backgroundColor: '#333', color: '#fff' }}>Decorative Flake</option>
                    <option value="metallic-solid" style={{ backgroundColor: '#333', color: '#fff' }}>Metallic Solid</option>
                    <option value="metallic-marbled" style={{ backgroundColor: '#333', color: '#fff' }}>Metallic Marbled</option>
                    <option value="custom" style={{ backgroundColor: '#333', color: '#fff' }}>Custom</option>
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
                    <option value="no" style={{ backgroundColor: '#333', color: '#fff' }}>No</option>
                    <option value="yes" style={{ backgroundColor: '#333', color: '#fff' }}>Yes</option>
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
                
                {/* Status message display */}
                {formStatus.submitted && (
                  <div className={`alert ${formStatus.success ? 'alert-success' : 'alert-danger'} mb-4`} 
                    style={{
                      backgroundColor: formStatus.success ? 'rgba(25, 135, 84, 0.15)' : 'rgba(220, 53, 69, 0.15)',
                      color: formStatus.success ? '#25a560' : '#e74c3c',
                      border: formStatus.success ? '1px solid rgba(25, 135, 84, 0.3)' : '1px solid rgba(220, 53, 69, 0.3)',
                      borderRadius: '8px',
                      padding: '15px'
                    }}>
                    {formStatus.message}
                  </div>
                )}

                <div className="text-center mt-4">
                  <AnimatedSubmitButton 
                    className="btn btn-lg" 
                    style={{
                      backgroundColor: formStatus.submitting ? 'rgba(128,128,128,0.5)' : companyColors.primary, 
                      borderColor: companyColors.primary, 
                      color: '#fff', 
                      padding: '15px 45px',
                      fontFamily: 'var(--font-oswald), sans-serif',
                      fontWeight: '600',
                      letterSpacing: '1px',
                      boxShadow: '0 8px 15px rgba(0,0,0,0.2)',
                      borderRadius: '8px',
                      fontSize: '1.1rem',
                      transition: 'all 0.3s ease',
                      pointerEvents: formStatus.submitting ? 'none' : 'auto',
                      opacity: formStatus.submitting ? 0.7 : 1
                    }}
                    variant="primary"
                    disabled={formStatus.submitting}
                  >
                    {formStatus.submitting ? 'Sending...' : 'Submit Request'}
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
