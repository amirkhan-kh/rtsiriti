import React from 'react';

interface ResponsiveOptimizedImageProps {
  imageName: string;    
  alt: string;
  className?: string;
  breakpoints?: {
    sm?: number;  
    md?: number;  
    lg?: number;  
  };
}

const ResponsiveOptimizedImage: React.FC<ResponsiveOptimizedImageProps> = ({ 
  imageName, 
  alt, 
  className = "",
  breakpoints = {}
}) => {
  const basePath = '/images';
  
  const { sm = 400, md = 800, lg = 1200 } = breakpoints;
  
  return (
    <picture>
      <source 
        media="(max-width: 640px)"
        srcSet={`
          ${basePath}/optimized/${imageName}.avif ${sm}w,
          ${basePath}/optimized/${imageName}.avif ${md}w
        `}
        type="image/avif"
        sizes="100vw"
      />
      <source 
        media="(max-width: 640px)"
        srcSet={`
          ${basePath}/webp/${imageName}.webp ${sm}w,
          ${basePath}/webp/${imageName}.webp ${md}w
        `}
        type="image/webp"
        sizes="100vw"
      />
      <source 
        media="(max-width: 640px)"
        srcSet={`
          ${basePath}/original/${imageName}.jpg ${sm}w,
          ${basePath}/original/${imageName}.jpg ${md}w
        `}
        type="image/jpeg"
        sizes="100vw"
      />
      <source 
        media="(min-width: 641px) and (max-width: 1024px)"
        srcSet={`
          ${basePath}/optimized/${imageName}.avif ${md}w,
          ${basePath}/optimized/${imageName}.avif ${lg}w
        `}
        type="image/avif"
        sizes="50vw"
      />
      <source 
        media="(min-width: 641px) and (max-width: 1024px)"
        srcSet={`
          ${basePath}/webp/${imageName}.webp ${md}w,
          ${basePath}/webp/${imageName}.webp ${lg}w
        `}
        type="image/webp"
        sizes="50vw"
      />
      <source 
        media="(min-width: 641px) and (max-width: 1024px)"
        srcSet={`
          ${basePath}/original/${imageName}.jpg ${md}w,
          ${basePath}/original/${imageName}.jpg ${lg}w
        `}
        type="image/jpeg"
        sizes="50vw"
      />
      <source 
        media="(min-width: 1025px)"
        srcSet={`
          ${basePath}/optimized/${imageName}.avif ${lg}w
        `}
        type="image/avif"
        sizes="33vw"
      />
      <source 
        media="(min-width: 1025px)"
        srcSet={`
          ${basePath}/webp/${imageName}.webp ${lg}w
        `}
        type="image/webp"
        sizes="33vw"
      />
      <source 
        media="(min-width: 1025px)"
        srcSet={`
          ${basePath}/original/${imageName}.jpg ${lg}w
        `}
        type="image/jpeg"
        sizes="33vw"
      />
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