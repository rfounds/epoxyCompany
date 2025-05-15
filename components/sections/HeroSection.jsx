'use client';

import React, { useEffect, useState, useRef } from 'react';
import { AnimatedButton } from '../AnimatedButton';
import { FaStar, FaCheck, FaArrowDown } from 'react-icons/fa';

const HeroSection = ({ companyColors }) => {
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
      className="text-white d-flex align-items-center" 
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
      <div className="container" style={{ 
        position: 'relative', 
        zIndex: 5,
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 1.2s ease-in'
      }}>
        <div className="row align-items-center" style={{ minHeight: '80vh' }}>
          {/* Left column with main content */}
          <div className="col-lg-7 text-lg-start text-center"
            style={{ 
              transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
              transition: 'transform 1.2s ease-out'
            }}
          >
            {/* Floating logo/badge element */}
            <div className="mb-4 d-inline-block position-relative"
              style={{
                padding: '8px 15px',
                background: 'rgba(0,0,0,0.5)',
                borderLeft: `4px solid ${companyColors.primary}`,
                borderRadius: '0 4px 4px 0',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                animation: 'float 6s infinite ease-in-out',
              }}
            >
              <span style={{ 
                fontFamily: 'var(--font-oswald), sans-serif',
                fontWeight: '600',
                letterSpacing: '1px',
                fontSize: '1.2rem',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center'
              }}>
                <span style={{ 
                  color: companyColors.primary,
                  marginRight: '8px'
                }}>1st</span> Gen Epoxy
              </span>
            </div>
            
            {/* Main headline with animated background */}
            <h1 className="display-3 fw-bold mb-3" 
              style={{
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
              <p className="lead mb-2" style={{
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
            <div className="mt-4" style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1s ease-out 0.8s'
            }}>
              <AnimatedButton 
                href="#contact" 
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
                href="#gallery" 
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
                }}
                variant="outline"
                hoverEffect="shine"
              >
                View Our Work
              </AnimatedButton>
            </div>
          </div>
          
          {/* Right column with showcase elements */}
          <div className="col-lg-5 d-none d-lg-block">
            <div className="position-relative" style={{
              height: '500px',
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateX(0)' : 'translateX(50px)',
              transition: 'all 1.2s ease-out 0.4s',
            }}>
              {/* Floating image card 1 */}
              <div style={{
                position: 'absolute',
                top: '10%',
                right: '10%',
                width: '280px',
                height: '200px',
                background: '#111',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
                transform: `translateY(${scrollPosition * -0.1}px) rotateZ(-3deg)`,
                zIndex: 3,
                border: '5px solid rgba(255,255,255,0.05)',
              }}>
                <img 
                  src="/images/services/garage-floor.jpg" 
                  alt="Epoxy Garage Floor" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }} 
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '15px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                  textAlign: 'left',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-oswald), sans-serif',
                    fontWeight: '600',
                    fontSize: '1rem',
                    textTransform: 'uppercase',
                  }}>Garage Transformation</span>
                </div>
              </div>
              
              {/* Floating image card 2 */}
              <div style={{
                position: 'absolute',
                top: '45%',
                left: '0%',
                width: '250px',
                height: '180px',
                background: '#111',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
                transform: `translateY(${scrollPosition * -0.2}px) rotateZ(5deg)`,
                zIndex: 2,
                border: '5px solid rgba(255,255,255,0.05)',
              }}>
                <img 
                  src="/images/finishes/metallic-finish.jpg" 
                  alt="Metallic Epoxy Floor" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }} 
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '15px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                  textAlign: 'left',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-oswald), sans-serif',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                  }}>Metallic Finish</span>
                </div>
              </div>
              
              {/* Rating badge was removed as requested */}
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="scroll-indicator" style={{
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10,
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 1s ease-in 1.5s',
        animation: 'bounce 2s infinite',
        cursor: 'pointer',
      }} onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
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
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
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
