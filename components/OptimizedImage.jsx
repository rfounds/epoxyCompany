'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function OptimizedImage({ src, alt, width, height, className, priority = false }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`image-container ${className || ''}`} style={{ position: 'relative' }}>
      <Image
        src={src}
        alt={alt || "1st Gen Epoxy Flooring"}
        width={width}
        height={height}
        quality={85}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
