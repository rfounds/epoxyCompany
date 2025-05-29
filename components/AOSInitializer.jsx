'use client';

import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

// Client component to initialize AOS
export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);
  
  return null; // This component doesn't render anything
}
