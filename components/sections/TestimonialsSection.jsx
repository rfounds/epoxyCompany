'use client';

import React from 'react';

const TestimonialsSection = ({ companyColors }) => {
  return (
    <section id="testimonials" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 display-5" style={{color: companyColors.secondary}}>Client Love</h2>
         <div className="text-center p-5 border rounded" style={{borderColor: companyColors.secondary, backgroundColor: 'rgba(255,255,255,0.03)'}}>
          <p className="lead"><em>Testimonials and Before/After Photos Coming Soon!</em></p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
