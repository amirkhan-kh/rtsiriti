import React from "react";

interface OptimizedImageProps {
  imageName: string;
  alt: string;
  className?: string; 
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ imageName, alt, className }) => {
  return (
    <picture>
      <source 
        srcSet={`/images/cards/${imageName}.avif`} 
        type="image/avif"
      />
      <source 
        srcSet={`/images/cards/${imageName}.webp`} 
        type="image/webp"
      />
      <img
        src={`/images/cards/${imageName}.jpg`} 
        alt={alt}
        className={className}
        loading="lazy"
      />
    </picture>
  );
};

export default OptimizedImage;
