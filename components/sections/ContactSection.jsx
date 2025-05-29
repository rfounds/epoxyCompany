'use client';

import React, { useEffect, useRef } from 'react';

const ContactSection = ({ companyColors }) => {
  // Reference to the form container
  const formContainerRef = useRef(null);
  
  // Function to load the Jobber script
  const loadJobberForm = () => {
    // Check if container exists
    if (!formContainerRef.current) return;
    
    // Clear any existing content in the container
    while (formContainerRef.current.firstChild) {
      formContainerRef.current.removeChild(formContainerRef.current.firstChild);
    }
    
    // Create the container div
    const containerDiv = document.createElement('div');
    containerDiv.id = '87d3fa2d-7e6c-43ff-b8ae-40b65755f406';
    formContainerRef.current.appendChild(containerDiv);
    
    // Add the stylesheet
    const linkElem = document.createElement('link');
    linkElem.rel = 'stylesheet';
    linkElem.href = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css';
    linkElem.media = 'screen';
    formContainerRef.current.appendChild(linkElem);
    
    // Create and add the script
    const scriptElem = document.createElement('script');
    scriptElem.src = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js';
    scriptElem.setAttribute('clienthub_id', '87d3fa2d-7e6c-43ff-b8ae-40b65755f406');
    scriptElem.setAttribute('form_url', 'https://clienthub.getjobber.com/client_hubs/87d3fa2d-7e6c-43ff-b8ae-40b65755f406/public/work_request/embedded_work_request_form');
    formContainerRef.current.appendChild(scriptElem);
  };
  
  // Initialize the form on component mount
  useEffect(() => {
    // Load the form initially
    loadJobberForm();
    
    // Handle hash navigation (when someone clicks a link to #contact)
    const handleHashChange = () => {
      if (window.location.hash === '#contact') {
        // Small delay to ensure DOM is ready after navigation
        setTimeout(() => {
          loadJobberForm();
        }, 100);
      }
    };
    
    // Check initial hash
    if (window.location.hash === '#contact') {
      setTimeout(loadJobberForm, 100);
    }
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Clean up
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
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
              {/* JobberCRM form container - dynamically loaded via useEffect */}
              <div ref={formContainerRef} className="jobber-form-container"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
