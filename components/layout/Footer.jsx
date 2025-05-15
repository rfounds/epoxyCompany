'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatedSocialLink } from '../AnimatedButton';
import { FaPhone, FaEnvelope, FaInstagram, FaTiktok, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';

const Footer = ({ companyColors }) => {
  return (
    <footer className="text-white text-center py-5" style={{ 
      backgroundColor: 'rgba(10,10,10,0.95)',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      boxShadow: 'inset 0 15px 25px rgba(0,0,0,0.2)'
    }}>
      {/* Subtle decorative element - consistent with other sections */}
      <div className="container">
        <div className="text-center mb-4">
          <div className="footer-logo-container" style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '25px'
          }}>
            <Image 
              src="/images/1stgenlogo.svg" 
              alt="1st Gen Epoxy Logo" 
              width={450} 
              height={120} 
              priority 
              style={{
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                maxWidth: '100%',
                height: 'auto'
              }}
            />
          </div>
          <div style={{
            height: '3px',
            width: '60px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
            margin: '0 auto 20px',
            borderRadius: '2px'
          }}></div>
        </div>
        
        <div className="row mb-4">
          <div className="col-md-4 mb-4 mb-md-0">
            <h4 style={{
              color: '#fff', 
              fontFamily: 'var(--font-oswald), sans-serif',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '15px',
              fontSize: '1.2rem'
            }}>Contact Us</h4>
            <div className="d-flex align-items-center justify-content-center mb-2">
              <FaPhone style={{ 
                color: companyColors.primary, 
                marginRight: '10px',
                fontSize: '1.1rem' 
              }} />
              <Link href="tel:405-780-2438" legacyBehavior>
                <a className="text-white" style={{
                  color: '#fff', 
                  fontSize: '1.1rem',
                  fontFamily: 'var(--font-oswald), sans-serif',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  '&:hover': {
                    color: companyColors.primary
                  }
                }}>
                  405-780-2438
                </a>
              </Link>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <FaEnvelope style={{ 
                color: companyColors.primary, 
                marginRight: '10px',
                fontSize: '1.1rem' 
              }} />
              <Link href="mailto:1stgenepoxy@gmail.com" legacyBehavior>
                <a className="text-white" style={{
                  color: '#fff', 
                  fontSize: '1.1rem',
                  fontFamily: 'var(--font-oswald), sans-serif',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  '&:hover': {
                    color: companyColors.primary
                  }
                }}>
                  1stgenepoxy@gmail.com
                </a>
              </Link>
            </div>
          </div>
          
          <div className="col-md-4 mb-4 mb-md-0">
            <h4 style={{
              color: '#fff', 
              fontFamily: 'var(--font-oswald), sans-serif',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '15px',
              fontSize: '1.2rem'
            }}>Follow Us</h4>
            <div className="d-flex justify-content-center">
              <AnimatedSocialLink 
                href="https://www.instagram.com/1stgenepoxy?igsh=eWc3NGo3dXNnY3A4&utm_source=qr" 
                className="text-white me-4"
                style={{
                  hoverColor: companyColors.primary,
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <FaInstagram style={{ fontSize: '1.8rem', marginRight: '8px' }} />
                <span style={{
                  fontSize: '1.2rem', 
                  fontWeight: 'bold',
                  fontFamily: 'var(--font-oswald), sans-serif'
                }}>Instagram</span>
              </AnimatedSocialLink>
              <AnimatedSocialLink 
                href="https://www.tiktok.com/@1stgenepoxy?_t=ZT-8w8VhdNOGaZ&_r=1" 
                className="text-white"
                style={{
                  hoverColor: companyColors.secondary,
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <FaTiktok style={{ fontSize: '1.8rem', marginRight: '8px' }} />
                <span style={{
                  fontSize: '1.2rem', 
                  fontWeight: 'bold',
                  fontFamily: 'var(--font-oswald), sans-serif'
                }}>TikTok</span>
              </AnimatedSocialLink>
            </div>
          </div>
          
          <div className="col-md-4">
            <h4 style={{
              color: '#fff', 
              fontFamily: 'var(--font-oswald), sans-serif',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '15px',
              fontSize: '1.2rem'
            }}>Service Area</h4>
            <div className="d-flex align-items-center justify-content-center">
              <FaMapMarkerAlt style={{ 
                color: companyColors.primary, 
                marginRight: '10px',
                fontSize: '1.4rem' 
              }} />
              <span style={{
                fontSize: '1.1rem',
                fontFamily: 'var(--font-oswald), sans-serif',
              }}>
                Perry, OK & Surrounding Areas
              </span>
            </div>
          </div>
        </div>
        
        <div className="border-top pt-4 mt-2" style={{ borderColor: 'rgba(255,255,255,0.1) !important' }}>
          <p className="mb-2" style={{ 
            fontFamily: 'var(--font-oswald), sans-serif',
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.8)'
          }}>&copy; {new Date().getFullYear()} 1st Gen Epoxy. All Rights Reserved.</p>
          <p className="mb-2" style={{ fontSize: '0.9rem' }}>
            <FaHeart style={{ 
              color: companyColors.primary, 
              marginRight: '5px',
              fontSize: '0.8rem' 
            }} />
            <span style={{color: 'rgba(255,255,255,0.7)'}}>Built with passion in Oklahoma.</span>
          </p>
          <p className="mb-0" style={{ 
            fontSize: '1.1rem',
            fontWeight: '500',
            fontFamily: 'var(--font-oswald), sans-serif',
            letterSpacing: '0.5px',
            color: 'rgba(255,255,255,0.9)' 
          }}>Oklahoma's Choice for Premium Epoxy Floors.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
