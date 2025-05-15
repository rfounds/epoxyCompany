'use client';

import React from 'react';
import { benefits } from '../../data/services';

const WhyChooseUsSection = ({ companyColors }) => {
  return (
    <section id="why-choose-us" className="py-5" style={{backgroundColor: 'rgba(255,255,255,0.05)'}}>
      <div className="container">
        <h2 className="text-center mb-5 display-5" style={{color: companyColors.primary}}>Why Choose Us?</h2>
        
        <div className="row mb-4">
          <div className="col-lg-8 mx-auto text-center">
            <p className="lead">At 1st Gen Epoxy, we're committed to excellence in every project. Here's why customers throughout Oklahoma choose us for their epoxy flooring needs:</p>
          </div>
        </div>
        
        <div className="row">
          {benefits.map((benefit) => (
            <div className="col-md-3 mb-4 text-center" key={benefit.id}>
              <div className="p-4 rounded h-100" style={{border: `2px solid ${companyColors.secondary}`, backgroundColor: 'rgba(255,255,255,0.03)'}}>
                <h5 className="fw-bold mb-3" style={{color: companyColors.secondary}}>{benefit.title}</h5>
                <p className="mb-0 text-white-50">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
