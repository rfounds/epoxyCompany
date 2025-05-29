'use client';

import React from 'react';

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
              {/* Embed code provided by client - implemented exactly as given */}
              <div 
                dangerouslySetInnerHTML={{
                  __html: `
                    <div id="87d3fa2d-7e6c-43ff-b8ae-40b65755f406"></div>
                    <link rel="stylesheet" href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css" media="screen" />
                    <script src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js" clienthub_id="87d3fa2d-7e6c-43ff-b8ae-40b65755f406" form_url="https://clienthub.getjobber.com/client_hubs/87d3fa2d-7e6c-43ff-b8ae-40b65755f406/public/work_request/embedded_work_request_form"></script>
                  `
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
