import React from 'react';

interface ResponsiveOptimizedImageProps {
  imageName: string;    // "news1", "news2", ...
  alt: string;
  className?: string;
  breakpoints?: {
    sm?: number;  // small breakpoint (default: 400)
    md?: number;  // medium breakpoint (default: 800)  
    lg?: number;  // large breakpoint (default: 1200)
  };
}

const ResponsiveOptimizedImage: React.FC<ResponsiveOptimizedImageProps> = ({ 
  imageName, 
  alt, 
  className = "",
  breakpoints = {}
}) => {
  // Sizning strukturangiz
  const basePath = '/images';
  
  // Breakpoint o'lchamlari
  const { sm = 400, md = 800, lg = 1200 } = breakpoints;
  
  return (
    <picture>
      {/* ========== MOBILE (640px dan kichik) ========== */}
      
      {/* Mobile uchun AVIF (optimized papka) */}
      <source 
        media="(max-width: 640px)"
        srcSet={`
          ${basePath}/optimized/${imageName}.avif ${sm}w,
          ${basePath}/optimized/${imageName}.avif ${md}w
        `}
        type="image/avif"
        sizes="100vw"
      />
      
      {/* Mobile uchun WebP (webp papka) */}
      <source 
        media="(max-width: 640px)"
        srcSet={`
          ${basePath}/webp/${imageName}.webp ${sm}w,
          ${basePath}/webp/${imageName}.webp ${md}w
        `}
        type="image/webp"
        sizes="100vw"
      />
      
      {/* Mobile uchun JPEG (original papka) */}
      <source 
        media="(max-width: 640px)"
        srcSet={`
          ${basePath}/original/${imageName}.jpg ${sm}w,
          ${basePath}/original/${imageName}.jpg ${md}w
        `}
        type="image/jpeg"
        sizes="100vw"
      />
      
      {/* ========== TABLET (641px - 1024px) ========== */}
      
      {/* Tablet uchun AVIF */}
      <source 
        media="(min-width: 641px) and (max-width: 1024px)"
        srcSet={`
          ${basePath}/optimized/${imageName}.avif ${md}w,
          ${basePath}/optimized/${imageName}.avif ${lg}w
        `}
        type="image/avif"
        sizes="50vw"
      />
      
      {/* Tablet uchun WebP */}
      <source 
        media="(min-width: 641px) and (max-width: 1024px)"
        srcSet={`
          ${basePath}/webp/${imageName}.webp ${md}w,
          ${basePath}/webp/${imageName}.webp ${lg}w
        `}
        type="image/webp"
        sizes="50vw"
      />
      
      {/* Tablet uchun JPEG */}
      <source 
        media="(min-width: 641px) and (max-width: 1024px)"
        srcSet={`
          ${basePath}/original/${imageName}.jpg ${md}w,
          ${basePath}/original/${imageName}.jpg ${lg}w
        `}
        type="image/jpeg"
        sizes="50vw"
      />
      
      {/* ========== DESKTOP (1025px dan katta) ========== */}
      
      {/* Desktop uchun AVIF */}
      <source 
        media="(min-width: 1025px)"
        srcSet={`
          ${basePath}/optimized/${imageName}.avif ${lg}w
        `}
        type="image/avif"
        sizes="33vw"
      />
      
      {/* Desktop uchun WebP */}
      <source 
        media="(min-width: 1025px)"
        srcSet={`
          ${basePath}/webp/${imageName}.webp ${lg}w
        `}
        type="image/webp"
        sizes="33vw"
      />
      
      {/* Desktop uchun JPEG */}
      <source 
        media="(min-width: 1025px)"
        srcSet={`
          ${basePath}/original/${imageName}.jpg ${lg}w
        `}
        type="image/jpeg"
        sizes="33vw"
      />
      
      {/* FALLBACK img (eski brauzerlar uchun) */}
      <img
        src={`${basePath}/original/${imageName}.jpg`}
        alt={alt}
        className={className}
        loading="lazy"
        decoding="async"
        srcSet={`
          ${basePath}/original/${imageName}.jpg ${sm}w,
          ${basePath}/original/${imageName}.jpg ${md}w,
          ${basePath}/original/${imageName}.jpg ${lg}w
        `}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </picture>
  );
};

export default ResponsiveOptimizedImage;