'use client';

import React from 'react';
import Link from 'next/link';
import { AnimatedSocialLink } from '../AnimatedButton';

const Footer = ({ companyColors }) => {
  return (
    <footer className="text-white text-center py-5" style={{ backgroundColor: '#0a0a0a'}}>
      <div className="container">
        <div className="mb-3">
          <Link href="tel:405-780-2438" legacyBehavior>
            <a className="text-white me-3" style={{
              color: '#fff', 
              fontSize: '1.1rem',
              fontFamily: 'var(--font-oswald), sans-serif',
              transition: 'all 0.3s ease'
            }}>
              Phone: 405-780-2438
            </a>
          </Link>
          <Link href="mailto:1stgenepoxy@gmail.com" legacyBehavior>
            <a className="text-white" style={{
              color: '#fff', 
              fontSize: '1.1rem',
              fontFamily: 'var(--font-oswald), sans-serif',
              transition: 'all 0.3s ease'
            }}>
              Email: 1stgenepoxy@gmail.com
            </a>
          </Link>
        </div>
        <div className="mb-3">
          <AnimatedSocialLink 
            href="https://www.instagram.com/1stgenepoxy?igsh=eWc3NGo3dXNnY3A4&utm_source=qr" 
            className="text-white me-3"
            style={{
              hoverColor: companyColors.primary
            }}
          >
            <span style={{fontSize: '1.5rem', fontWeight: 'bold'}}>Instagram</span>
          </AnimatedSocialLink>
          <AnimatedSocialLink 
            href="https://www.tiktok.com/@1stgenepoxy?_t=ZT-8w8VhdNOGaZ&_r=1" 
            className="text-white"
            style={{
              hoverColor: companyColors.secondary
            }}
          >
            <span style={{fontSize: '1.5rem', fontWeight: 'bold'}}>TikTok</span>
          </AnimatedSocialLink>
        </div>
        <p>&copy; {new Date().getFullYear()} 1st Gen Epoxy. All Rights Reserved.</p>
        <p>
          <span style={{color: 'rgba(255,255,255,0.7)'}}>Built with passion in Oklahoma.</span>
        </p>
        <p className="mb-0">Oklahoma's Choice for Premium Epoxy Floors.</p>
      </div>
    </footer>
  );
};

export default Footer;
