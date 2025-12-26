// // useLazyImage hook
// import { useEffect, useRef, useState } from 'react';

// export function useLazyImage(threshold = 0.1) {
//   const [isVisible, setIsVisible] = useState(false);
//   const ref = useRef<HTMLImageElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => observer.disconnect();
//   }, [threshold]);

//   return { ref, isVisible };
// }

// // Komponentda foydalanish
// function OptimizedImage({ src, alt }: ImageProps) {
//   const { ref, isVisible } = useLazyImage();
//   const imageBase = "/images/optimized";
//   const imageName = src.split('/').pop()?.split('.')[0] || '';

//   return (
//     <picture ref={ref}>
//       {isVisible && (
//         <>
//           <source srcSet={`${imageBase}/${imageName}.avif`} type="image/avif" />
//           <source srcSet={`${imageBase}/${imageName}.webp`} type="image/webp" />
//         </>
//       )}
//       <img
//         src={src}
//         alt={alt}
//         loading="lazy"
//         decoding="async"
//       />
//     </picture>
//   );
// }