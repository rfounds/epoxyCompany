'use client';

import React from 'react';
import { applications, finishes } from '../../data/services';

const ServicesSection = ({ companyColors }) => {
  return (
    <section id="services" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 display-5" style={{color: companyColors.secondary}}>Our Services</h2>
        
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <p className="lead">We offer premium epoxy flooring solutions for a variety of applications and finishes. Our expert team ensures a flawless installation every time.</p>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-6 mb-5">
            <h3 className="text-center mb-4" style={{color: companyColors.primary}}>Applications</h3>
            <div className="list-group">
              {applications.map((app) => (
                <div key={app.id} className="list-group-item bg-transparent border-0 mb-3">
                  <h5 className="mb-1" style={{color: companyColors.secondary}}>{app.title}</h5>
                  <p className="mb-1 text-white-50">{app.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="col-md-6 mb-4">
            <h3 className="text-center mb-4" style={{color: companyColors.primary}}>Finishes & Customization</h3>
            <div className="list-group">
              {finishes.map((finish) => (
                <div key={finish.id} className="list-group-item bg-transparent border-0 mb-3">
                  <h5 className="mb-1" style={{color: companyColors.secondary}}>{finish.title}</h5>
                  <p className="mb-1 text-white-50">{finish.description}</p>
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
