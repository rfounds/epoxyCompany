'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatedButton } from '../AnimatedButton';
import { FaChevronRight } from 'react-icons/fa';

const Navbar = ({ companyColors }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  // Handle scroll effect for transparent to solid background transition
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Custom styles for nav links with enhanced hover effect
  const navLinkStyle = {
    color: '#fff',
    fontFamily: 'var(--font-oswald), sans-serif',
    transition: 'all 0.3s ease',
    position: 'relative',
    padding: '0.8rem 1.2rem',
    display: 'inline-block',
    fontSize: '1rem',
    fontWeight: '500',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
  };

  return (
    <header className="sticky-top" style={{ 
      zIndex: 1000,
    }}>
      {/* Enhanced CSS for nav animations */}
      <style jsx global>{`
        .navbar-glass {
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          transition: all 0.4s ease;
        }
        
        .nav-link-effect {
          position: relative;
          overflow: hidden;
        }
        
        .nav-link-effect::before {
          content: '';
          position: absolute;
          width: 0%;
          height: 2px;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          background-color: ${companyColors.primary};
          transition: width 0.3s ease;
          z-index: -1;
        }
        
        .nav-link-effect:hover::before {
          width: 80%;
        }
        
        .nav-link-effect.active::before {
          width: 80%;
          background-color: ${companyColors.primary};
        }
        
        .logo-text {
          position: relative;
          z-index: 1;
        }
        
        .logo-text::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, ${companyColors.primary}, transparent);
          z-index: -1;
        }
        
        @media (max-width: 991.98px) {
          .navbar-collapse {
            background-color: rgba(10, 10, 10, 0.95);
            border-radius: 0 0 15px 15px;
            padding: 1rem;
            box-shadow: 0 10px 25px rgba(0,0,0,0.15);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.05);
            border-top: none;
          }
        }
        
        /* Custom hamburger menu */
        .navbar-toggler {
          border: none;
          padding: 0;
          width: 30px;
          height: 20px;
          position: relative;
          transition: .5s ease-in-out;
          outline: none !important;
          box-shadow: none !important;
        }
        
        .navbar-toggler span {
          display: block;
          position: absolute;
          height: 2px;
          width: 100%;
          background: white;
          border-radius: 9px;
          opacity: 1;
          left: 0;
          transform: rotate(0deg);
          transition: .25s ease-in-out;
        }
        
        .navbar-toggler span:nth-child(1) {
          top: 0px;
        }
        
        .navbar-toggler span:nth-child(2), .navbar-toggler span:nth-child(3) {
          top: 9px;
        }
        
        .navbar-toggler span:nth-child(4) {
          top: 18px;
        }
        
        .navbar-toggler[aria-expanded="true"] span:nth-child(1) {
          top: 9px;
          width: 0%;
          left: 50%;
        }
        
        .navbar-toggler[aria-expanded="true"] span:nth-child(2) {
          transform: rotate(45deg);
        }
        
        .navbar-toggler[aria-expanded="true"] span:nth-child(3) {
          transform: rotate(-45deg);
        }
        
        .navbar-toggler[aria-expanded="true"] span:nth-child(4) {
          top: 9px;
          width: 0%;
          left: 50%;
        }
      `}</style>

      <nav 
        className={`navbar navbar-expand-lg navbar-dark ${scrolled ? 'navbar-scrolled' : ''}`} 
        style={{ 
          backgroundColor: scrolled ? 'rgba(0,0,0,0.9)' : 'rgba(0,0,0,0.3)', 
          padding: scrolled ? '0.5rem 1rem' : '0.75rem 1rem',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
          boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.3)' : 'none',
          transition: 'all 0.4s ease'
        }}
      >
        <div className="container">
          {/* SVG Logo */}
          <Link href="/" legacyBehavior>
            <a className="navbar-brand" style={{ 
              fontFamily: 'var(--font-oswald), sans-serif', 
              letterSpacing: '1.5px', 
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              transition: 'transform 0.3s ease',
              transform: scrolled ? 'scale(0.95)' : 'scale(1)',
              transformOrigin: 'left center',
              height: scrolled ? '60px' : '75px',
              overflow: 'visible',
              marginRight: '3rem'
            }}>
              <div className="logo-container" style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                maxHeight: '100%',
                transition: 'all 0.3s ease'
              }}>
                <Image 
                  src="/images/1stgenlogo.svg" 
                  alt="1st Gen Epoxy Logo" 
                  width={scrolled ? 320 : 400} 
                  height={scrolled ? 85 : 105} 
                  priority 
                  style={{
                    transition: 'all 0.3s ease',
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                    maxHeight: scrolled ? '60px' : '75px',
                    width: 'auto'
                  }}
                />
              </div>
            </a>
          </Link>
          
          {/* Custom hamburger button */}
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded={mobileOpen ? "true" : "false"} 
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          {/* Navbar links with enhanced hover effect */}
          <div className={`collapse navbar-collapse ${mobileOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <Link href="#about" legacyBehavior>
                  <a 
                    className="nav-link-effect" 
                    style={navLinkStyle} 
                    onClick={() => setMobileOpen(false)}
                  >
                    About
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#services" legacyBehavior>
                  <a 
                    className="nav-link-effect" 
                    style={navLinkStyle} 
                    onClick={() => setMobileOpen(false)}
                  >
                    Services
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#gallery" legacyBehavior>
                  <a 
                    className="nav-link-effect" 
                    style={navLinkStyle} 
                    onClick={() => setMobileOpen(false)}
                  >
                    Gallery
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#testimonials" legacyBehavior>
                  <a 
                    className="nav-link-effect" 
                    style={navLinkStyle} 
                    onClick={() => setMobileOpen(false)}
                  >
                    Testimonials
                  </a>
                </Link>
              </li>
              <li className="nav-item ms-lg-2 mt-3 mt-lg-0">
                <AnimatedButton 
                  href="#contact" 
                  className="btn animated-btn" 
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.4)', 
                    borderColor: companyColors.primary,
                    borderWidth: '2px',
                    color: '#fff',
                    fontFamily: 'var(--font-oswald), sans-serif',
                    fontWeight: '600',
                    padding: '0.6rem 1.5rem',
                    fontSize: '0.95rem',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                    backdropFilter: 'blur(5px)',
                    WebkitBackdropFilter: 'blur(5px)',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    position: 'relative',
                    overflow: 'hidden',
                    animation: 'pulse-border 2s infinite'
                  }}
                  variant="primary"
                  hoverEffect="pulse"
                >
                  <span>Get a Quote</span>
                  <FaChevronRight size={12} className="arrow-icon" />
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
