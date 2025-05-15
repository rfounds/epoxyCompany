'use client';

import React from 'react';
import Link from 'next/link';

export function AnimatedButton({ href, className, style, children, variant = 'primary', hoverEffect = 'lift' }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isAnimating, setIsAnimating] = React.useState(false);
  
  React.useEffect(() => {
    // Add a subtle pulse animation when component mounts
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  
  const getHoverStyles = () => {
    if (hoverEffect === 'lift') {
      return {
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 8px 15px rgba(0,0,0,0.2)' : '0 4px 6px rgba(0,0,0,0.1)',
        backgroundColor: variant === 'primary' && isHovered ? '#d04aad' : 
                         variant === 'light' && isHovered ? '#f8f9fa' : 
                         variant === 'outline' && isHovered ? 'rgba(255,255,255,0.1)' : style.backgroundColor,
      };
    } else if (hoverEffect === 'scale') {
      return {
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        boxShadow: isHovered ? '0 6px 8px rgba(0,0,0,0.2)' : '0 4px 6px rgba(0,0,0,0.1)',
      };
    } else if (hoverEffect === 'glow') {
      return {
        transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: isHovered ? `0 8px 25px rgba(${variant === 'primary' ? '184, 61, 153' : '24, 156, 205'}, 0.5)` : '0 4px 6px rgba(0,0,0,0.1)',
        backgroundColor: variant === 'primary' && isHovered ? '#d04aad' : style.backgroundColor,
      };
    } else if (hoverEffect === 'shine') {
      return {
        position: 'relative',
        overflow: 'hidden',
        transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 8px 25px rgba(0,0,0,0.2)' : '0 4px 6px rgba(0,0,0,0.1)',
        '&::before': isHovered ? {
          content: '""',
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          backgroundColor: 'rgba(255,255,255,0.1)',
          transform: 'rotate(30deg)',
          transition: 'all 0.5s ease',
          zIndex: 1,
        } : {},
      };
    } else if (hoverEffect === 'pulse') {
      return {
        animation: isAnimating ? 'pulse 1s infinite' : 'none',
        boxShadow: isHovered ? '0 0 0 5px rgba(255,255,255,0.1)' : 'none',
      };
    }
    return {};
  };

  const combinedStyle = {
    ...style,
    ...getHoverStyles(),
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
  };

  return (
    <Link href={href} legacyBehavior>
      <a 
        className={className} 
        style={combinedStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </a>
    </Link>
  );
}

export function AnimatedSocialLink({ href, className, style, children }) {
  const [isHovered, setIsHovered] = React.useState(false);
  
  const combinedStyle = {
    ...style,
    transform: isHovered ? 'scale(1.2)' : 'scale(1)',
    color: isHovered ? style.hoverColor || '#b83d99' : '#fff',
    transition: 'all 0.3s ease',
  };

  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={combinedStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </a>
  );
}

export function AnimatedSubmitButton({ className, style, children, variant = 'primary' }) {
  const [isHovered, setIsHovered] = React.useState(false);
  
  const combinedStyle = {
    ...style,
    transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
    boxShadow: isHovered ? '0 8px 15px rgba(0,0,0,0.2)' : '0 4px 6px rgba(0,0,0,0.1)',
    backgroundColor: variant === 'primary' && isHovered ? '#d04aad' : style.backgroundColor,
    transition: 'all 0.3s ease',
  };

  return (
    <button 
      type="submit"
      className={className}
      style={combinedStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
}
