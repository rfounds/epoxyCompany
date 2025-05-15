'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatedButton } from '../AnimatedButton';

const Navbar = ({ companyColors }) => {
  // Custom styles for nav link hover effect
  const navLinkStyle = {
    color: '#fff',
    fontFamily: 'var(--font-oswald), sans-serif',
    transition: 'all 0.3s ease',
    position: 'relative',  // Required for the pseudo-element positioning
    padding: '0.5rem 0.8rem',
    display: 'inline-block'
  };

  return (
    <header className="sticky-top" style={{ marginTop: '-1px' }}>
      {/* Add CSS for underline animation */}
      <style jsx global>{`
        .nav-link-underline::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 5px;
          left: 0;
          background-color: #fff;
          transition: width 0.3s ease;
          opacity: 0.7;
        }
        
        .nav-link-underline:hover::after {
          width: 100%;
        }
      `}</style>

      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'rgba(0,0,0,0.85)', padding: '0 1rem' }}>
        <div className="container">
          <Link href="/" legacyBehavior>
            <a className="navbar-brand" style={{ 
              fontFamily: 'var(--font-oswald), sans-serif', 
              letterSpacing: '1px', 
              color: '#fff',
              display: 'flex',
              alignItems: 'center'
            }}>
              <Image src="/images/logo.svg" alt="1st Gen Epoxy Logo" width={150} height={50} priority />
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="/" legacyBehavior><a className="nav-link nav-link-underline active" aria-current="page" style={navLinkStyle}>Home</a></Link>
              </li>
              <li className="nav-item">
                <Link href="#about" legacyBehavior><a className="nav-link nav-link-underline" style={navLinkStyle}>About</a></Link>
              </li>
              <li className="nav-item">
                <Link href="#services" legacyBehavior><a className="nav-link nav-link-underline" style={navLinkStyle}>Services</a></Link>
              </li>
              <li className="nav-item">
                <Link href="#why-choose-us" legacyBehavior><a className="nav-link nav-link-underline" style={navLinkStyle}>Why Us</a></Link>
              </li>
               <li className="nav-item">
                <Link href="#testimonials" legacyBehavior><a className="nav-link nav-link-underline" style={navLinkStyle}>Testimonials</a></Link>
              </li>
              <li className="nav-item">
                <AnimatedButton 
                  href="#contact" 
                  className="nav-link btn btn-primary ms-2" 
                  style={{
                    backgroundColor: companyColors.primary, 
                    borderColor: companyColors.primary,
                    color: '#fff',
                    fontFamily: 'var(--font-oswald), sans-serif',
                    fontWeight: '600',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}
                  variant="primary"
                  hoverEffect="scale"
                >
                  Request a Quote
                </AnimatedButton>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
