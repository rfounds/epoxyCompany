'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { AnimatedButton } from '../AnimatedButton';
import { FaStar, FaCheck, FaArrowDown } from 'react-icons/fa';

const HeroSection = ({ companyColors }) => {
  // Handle smooth scrolling for buttons
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      // Scroll to element smoothly
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // Small offset to account for the fixed navbar
      setTimeout(() => {
        window.scrollBy(0, -80);
      }, 10);
    }
  };
  // States for animations and parallax effects
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);
  
  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    // Set loaded after mount for entrance animations
    setIsLoaded(true);
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // No quality badges as requested

  return (
    <section 
      id="hero" 
      className="hero-section text-white d-flex align-items-center" 
      style={{ 
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#000000',
        padding: 0,
        margin: 0
      }}
    >
      {/* Dynamic Background Elements */}
      <div className="background-elements" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}>
        {/* Main background with parallax effect */}
        <div 
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0,
            transform: `translateY(${scrollPosition * 0.4}px)`,
            transition: 'transform 0.1s ease-out',
            backgroundImage: 'url("/images/epoxyBackground1.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            filter: 'brightness(0.8) contrast(1.2)',
            zIndex: 0,
          }}
        />
        
        {/* Overlay gradient for depth */}
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0,
          background: 'radial-gradient(circle at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%)',
          zIndex: 1,
        }} />
        
        {/* Animated light flare effect */}
        <div style={{ 
          position: 'absolute', 
          top: '10%', 
          left: '50%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)',
          transform: 'translateX(-50%)',
          filter: 'blur(8px)',
          zIndex: 1,
          animation: 'pulse 8s infinite ease-in-out',
        }} />
      </div>
      
      {/* Content container with grid layout */}
      <div className="container hero-container" style={{ 
        position: 'relative', 
        zIndex: 5,
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 1.2s ease-in'
      }}>
        <div className="row align-items-center flex-column flex-lg-row" style={{ minHeight: 'auto', paddingBottom: '80px' }}>
          {/* Left column with main content */}
          <div className="col-lg-7 text-lg-start text-center order-2 order-lg-1 hero-content"
            style={{ 
              transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
              transition: 'transform 1.2s ease-out'
            }}
          >
            {/* Logo element removed as requested */}
            
            {/* Main headline with animated background */}
            <h1 className="fw-bold mb-3 hero-title" 
              style={{
                fontSize: 'calc(2rem + 1.5vw)', // Responsive font size
                color: '#fff',
                fontFamily: 'var(--font-oswald), sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                position: 'relative',
                textShadow: '0 5px 25px rgba(0,0,0,0.8)',
                lineHeight: '1.1',
                WebkitTextStroke: '1px rgba(255,255,255,0.1)',
              }}
            >
              <span style={{ 
                display: 'block',
                fontSize: '0.5em',
                color: companyColors.primary,
                marginBottom: '10px'
              }}>
                Transform Your Space With
              </span>
              Premium Epoxy
              <br />
              <span style={{ 
                background: `-webkit-linear-gradient(45deg, #fff, ${companyColors.secondary})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>
                Flooring
              </span>
            </h1>
            
            {/* Tagline with animated underline */}
            <div className="position-relative mb-5">
              <p className="lead mb-2 hero-subtitle" style={{
                fontSize: '1.5rem', 
                textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
                fontWeight: '400',
                color: 'rgba(255,255,255,0.9)',
                maxWidth: '600px'
              }}>
                Elevating Oklahoma homes with premium flooring solutions that stand the test of time.
              </p>
              <div style={{
                height: '3px',
                width: '120px',
                background: `linear-gradient(to right, ${companyColors.primary}, transparent)`,
                marginTop: '15px',
                marginBottom: '25px',
                animation: 'width-expand 1.5s ease-in-out',
              }}></div>
            </div>
            
            {/* Additional space where quality badges were removed */}
            <div className="mb-5"></div>
            
            {/* CTA Buttons with enhanced styling */}
            <div className="mt-4 hero-cta-buttons" style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1s ease-out 0.8s'
            }}>
              <AnimatedButton 
                href="#contact" 
                onClick={(e) => handleSmoothScroll(e, 'contact')}
                className="btn btn-lg me-3 mb-3 mb-md-0" 
                style={{
                  backgroundColor: companyColors.primary, 
                  borderColor: companyColors.primary, 
                  color: '#fff', 
                  padding: '16px 32px', 
                  fontSize: '1.2rem',
                  fontFamily: 'var(--font-oswald), sans-serif',
                  fontWeight: '600',
                  letterSpacing: '1.5px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2), 0 0 0 5px rgba(255,255,255,0.05)',
                  borderRadius: '8px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                variant="primary"
                hoverEffect="glow"
              >
                Get a Free Quote
              </AnimatedButton>
              
              <AnimatedButton 
                href="#contact" 
                onClick={(e) => handleSmoothScroll(e, 'contact')}
                className="btn btn-outline-light btn-lg" 
                style={{
                  borderColor: 'rgba(255,255,255,0.3)', 
                  color: '#fff', 
                  padding: '16px 32px', 
                  fontSize: '1.2rem',
                  fontFamily: 'var(--font-oswald), sans-serif',
                  fontWeight: '600',
                  letterSpacing: '1.5px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                  borderRadius: '8px',
                  backdropFilter: 'blur(5px)',
                  background: 'rgba(255,255,255,0.05)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                variant="outline"
                hoverEffect="shine"
              >
                Call Us
              </AnimatedButton>
            </div>
          </div>
          
          {/* Logo column - appears on top on mobile */}
          <div className="col-lg-5 col-md-6 col-10 mx-auto mx-lg-0 text-center pt-3 pt-lg-0 d-flex justify-content-center order-1 order-lg-2"
            style={{ 
              transform: isLoaded ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
              opacity: isLoaded ? 1 : 0,
              transition: 'all 1.4s ease-out 0.4s'
            }}
          >
            <div className="hero-logo" style={{
              position: 'relative',
              width: '100%',
              maxWidth: '450px',
              margin: '0 auto',
              filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.4))',
              animation: 'float 8s ease-in-out infinite',
            }}>
              <Image 
                src="/images/1stgenlogo.svg" 
                alt="1st Gen Epoxy Logo" 
                width={500}  
                height={500}  
                priority 
                style={{
                  width: '100%',
                  height: 'auto',
                  filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.15))',
                }}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator - positioned lower on mobile */}
      <div className="scroll-indicator" style={{
        position: 'absolute',
        bottom: '5px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10,
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 1s ease-in 1.5s',
        animation: 'bounce 2s infinite',
        cursor: 'pointer',
      }} onClick={(e) => handleSmoothScroll(e, 'about')}>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
        }}>
          <span style={{ 
            fontSize: '0.8rem', 
            marginBottom: '5px',
            opacity: 0.8,
            letterSpacing: '1px',
            textTransform: 'uppercase',
          }}>Scroll</span>
          <FaArrowDown style={{ color: companyColors.primary }} />
        </div>
      </div>
      
      {/* CSS Animations */}
      <style jsx global>{`
        /* iPhone SE specific optimizations */
        @media (max-width: 375px) and (max-height: 667px) {
          .hero-section {
            padding-top: 60px !important;
          }
          .hero-container {
            padding-top: 0 !important;
          }
          .hero-logo {
            width: 50% !important;
            max-width: 120px !important;
          }
          .hero-content {
            padding-top: 0 !important;
            padding-bottom: 20px !important;
          }
          .hero-title {
            font-size: calc(1.2rem + 1vw) !important;
            margin-bottom: 0.3rem !important;
          }
          .hero-subtitle {
            font-size: 0.9rem !important;
            margin-bottom: 0.5rem !important;
          }
          .hero-cta-buttons {
            margin-top: 0.5rem !important;
          }
          .hero-cta-buttons .btn {
            padding: 8px 16px !important;
            font-size: 0.9rem !important;
          }
        }
        
        @media (max-height: 700px) {
          .hero-section {
            min-height: auto !important;
            height: auto !important;
          }
          .hero-logo {
            width: 70% !important;
            max-width: 250px !important;
          }
          .hero-content {
            padding-top: 60px !important;
            padding-bottom: 40px !important;
          }
          .hero-title {
            font-size: calc(1.5rem + 1vw) !important;
            margin-bottom: 0.5rem !important;
          }
          .hero-subtitle {
            font-size: 1rem !important;
            margin-bottom: 1rem !important;
          }
          .hero-cta-buttons {
            margin-top: 1rem !important;
          }
          .hero-cta-buttons .btn {
            padding: 10px 20px !important;
            font-size: 1rem !important;
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); } /* Reduced motion for smaller screens */
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: translateX(-50%) scale(1); }
          50% { opacity: 0.6; transform: translateX(-50%) scale(1.2); }
        }
        
        @keyframes width-expand {
          from { width: 0; }
          to { width: 120px; }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
          40% { transform: translateY(-15px) translateX(-50%); }
          60% { transform: translateY(-7px) translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
