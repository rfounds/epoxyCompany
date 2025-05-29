'use client';

import React from 'react';
import Head from 'next/head';

// This component adds targeted keywords in the page metadata
export default function SEOKeywords() {
  return (
    <Head>
      {/* Primary keywords targeting epoxy flooring business */}
      <meta name="keywords" content="epoxy flooring, garage floor epoxy, epoxy floor coating, Oklahoma epoxy floors, epoxy garage floor, commercial epoxy floors, residential epoxy floors" />
      
      {/* Secondary targeting for specific services */}
      <meta name="keywords" content="metallic epoxy floors, decorative concrete coatings, concrete resurfacing, industrial floor coatings, basement floor epoxy, flake system epoxy" />
      
      {/* Local SEO keywords */}
      <meta name="keywords" content="epoxy flooring Oklahoma, garage floor coating Oklahoma City, Tulsa epoxy floors, Norman epoxy contractor, Edmond concrete coating, Broken Arrow epoxy services" />
      
      {/* Targeting specific customer problems */}
      <meta name="keywords" content="garage floor repair, concrete crack repair, waterproof basement flooring, slip-resistant floor coating, chemical resistant epoxy, high-traffic floor solutions" />
    </Head>
  );
}
