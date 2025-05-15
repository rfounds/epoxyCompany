'use client';

import React from 'react';
import { AnimatedSubmitButton } from '../AnimatedButton';

const ContactSection = ({ companyColors }) => {
  return (
    <section id="contact" className="py-5" style={{backgroundColor: 'rgba(255,255,255,0.05)'}}>
      <div className="container">
        <h2 className="text-center mb-5 display-5" style={{color: companyColors.primary}}>Request a Quote</h2>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <form id="contact-form" action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST"> {/* Replace YOUR_FORMSPREE_ID */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label" style={{color: companyColors.secondary}}>*Full Name</label>
                <input type="text" className="form-control" id="name" name="name" required style={{backgroundColor: 'rgba(255,255,255,0.1)', color:'#fff', borderColor: companyColors.secondary}}/>
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label" style={{color: companyColors.secondary}}>*Phone Number</label>
                <input type="tel" className="form-control" id="phone" name="phone" required style={{backgroundColor: 'rgba(255,255,255,0.1)', color:'#fff', borderColor: companyColors.secondary}}/>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label" style={{color: companyColors.secondary}}>*Email Address</label>
                <input type="email" className="form-control" id="email" name="email" required style={{backgroundColor: 'rgba(255,255,255,0.1)', color:'#fff', borderColor: companyColors.secondary}}/>
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label" style={{color: companyColors.secondary}}>*Project Address</label>
                <input type="text" className="form-control" id="address" name="address" required style={{backgroundColor: 'rgba(255,255,255,0.1)', color:'#fff', borderColor: companyColors.secondary}}/>
              </div>
              <div className="mb-3">
                <label htmlFor="floorType" className="form-label" style={{color: companyColors.secondary}}>*Type of Floor</label>
                <select className="form-select" id="floorType" name="floorType" required style={{backgroundColor: 'rgba(255,255,255,0.1)', color:'#fff', borderColor: companyColors.secondary}}>
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
                <label htmlFor="finish" className="form-label" style={{color: companyColors.secondary}}>*Finish Wanted</label>
                <select className="form-select" id="finish" name="finish" required style={{backgroundColor: 'rgba(255,255,255,0.1)', color:'#fff', borderColor: companyColors.secondary}}>
                  <option value="">-- Select Finish --</option>
                  <option value="solid">Solid Color</option>
                  <option value="flake">Decorative Flake</option>
                  <option value="metallic-solid">Metallic Solid</option>
                  <option value="metallic-marbled">Metallic Marbled</option>
                  <option value="custom">Custom</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="engraving" className="form-label" style={{color: companyColors.secondary}}>Engraving or Logo?</label>
                <select className="form-select" id="engraving" name="engraving" style={{backgroundColor: 'rgba(255,255,255,0.1)', color:'#fff', borderColor: companyColors.secondary}}>
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
               <div className="mb-3">
                <label htmlFor="squareFootage" className="form-label" style={{color: companyColors.secondary}}>*Square Footage (approx.)</label>
                <input type="text" className="form-control" id="squareFootage" name="squareFootage" required style={{backgroundColor: 'rgba(255,255,255,0.1)', color:'#fff', borderColor: companyColors.secondary}}/>
              </div>
               <div className="mb-3">
                <label htmlFor="quotedPrice" className="form-label" style={{color: companyColors.secondary}}>Quoted Price (if any)</label>
                <input type="text" className="form-control" id="quotedPrice" name="quotedPrice" style={{backgroundColor: 'rgba(255,255,255,0.1)', color:'#fff', borderColor: companyColors.secondary}}/>
              </div>
              <div className="mb-3">
                <label htmlFor="notes" className="form-label" style={{color: companyColors.secondary}}>Additional Notes</label>
                <textarea className="form-control" id="notes" name="notes" rows="3" style={{backgroundColor: 'rgba(255,255,255,0.1)', color:'#fff', borderColor: companyColors.secondary}}></textarea>
              </div>
              <div className="text-center">
                <AnimatedSubmitButton 
                  className="btn btn-lg" 
                  style={{
                    backgroundColor: companyColors.primary, 
                    borderColor: companyColors.primary, 
                    color: '#fff', 
                    padding: '10px 40px',
                    fontFamily: 'var(--font-oswald), sans-serif',
                    fontWeight: '600',
                    letterSpacing: '1px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}
                  variant="primary"
                >
                  Submit Request
                </AnimatedSubmitButton>
              </div>
            </form>
            <p className="text-center mt-3"><small>* Required field</small></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
