import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import type { ReactNode } from "react";
type RevealProps = {
  children: ReactNode;
  width?: "fit-content" | "100%" | "auto" | string;
  className?: string;
};

export const Reveal = ({ children, width = "fit-content", className = "" }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div 
      ref={ref} 
      className={`relative  ${className}`}
      style={{ width }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ 
          duration: 0.5, 
          delay: 0.25,
          ease: "easeOut"
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};


interface RevalAboutImgProps {
  children: ReactNode;
  width?: string;
  delay?: number;
  duration?: number;
  direction?: "left" | "right";
  gradientColor?: string;
}

export const RevalLeft = ({ 
  children, 
  width = "100%", 
  delay = 0.25,
  duration = 1,
  direction = "left",
  gradientColor = "rgba(255,255,255,1)"
}: RevalAboutImgProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible"); 
    }
  }, [isInView, mainControls, slideControls]);

  const gradientDirection = direction === "left" 
    ? "to right" 
    : "to left";

  const mainVariants = {
    hidden: { 
      opacity: 0, 
      x: direction === "left" ? 195 : -195 
    },
    visible: { 
      opacity: 1, 
      x: 0 
    }
  };

  const slideVariants = {
    hidden: { 
      opacity: 0, 
      x: direction === "left" ? 195 : -195 
    },
    visible: { 
      opacity: 1, 
      x: 0 
    }
  };

  return (
    <div 
      ref={ref} 
      style={{ 
        position: "relative" as const, 
        width, 
        overflow: "hidden" as const 
      }}
    >
      <motion.div
        variants={mainVariants}
        initial="hidden"
        animate={mainControls}
        transition={{ 
          duration, 
          delay,
          ease: "easeOut" 
        }}
      >
        {children}
      </motion.div>
      
      <motion.div
        variants={slideVariants}
        initial="hidden"
        animate={slideControls}
        transition={{ 
          duration: duration * 0.8, 
          ease: "easeIn",
          delay: delay * 0.5 
        }}
        style={{
          position: "absolute",
          top: 4,
          left: 0,
          right: 0,
          bottom: 4,
          zIndex: 20,
        }}
      />
    </div>
  );
};

export const RevalRight = ({ 
  children, 
  width = "100%", 
  delay = 0.25,
  duration = 1,
  direction = "left",
  gradientColor = "rgba(255,255,255,1)"
}: RevalAboutImgProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible"); 
    }
  }, [isInView, mainControls, slideControls]);

  const gradientDirection = direction === "left" 
    ? "to right" 
    : "to left";

  const mainVariants = {
    hidden: { 
      opacity: 0, 
      x: direction === "left" ? 1-95 : 195 
    },
    visible: { 
      opacity: 1, 
      x: 0 
    }
  };

  const slideVariants = {
    hidden: { 
      opacity: 0, 
      x: direction === "left" ? -195 : 195 
    },
    visible: { 
      opacity: 1, 
      x: 0 
    }
  };

  return (
    <div 
      ref={ref} 
      style={{ 
        position: "relative" as const, 
        width, 
        overflow: "hidden" as const 
      }}
    >
      <motion.div
        variants={mainVariants}
        initial="hidden"
        animate={mainControls}
        transition={{ 
          duration, 
          delay,
          ease: "easeOut" 
        }}
      >
        {children}
      </motion.div>
      
      <motion.div
        variants={slideVariants}
        initial="hidden"
        animate={slideControls}
        transition={{ 
          duration: duration * 0.8, 
          ease: "easeIn",
          delay: delay * 0.5 
        }}
        style={{
          position: "absolute",
          top: 4,
          left: 0,
          right: 0,
          bottom: 4,
          zIndex: 20,
        }}
      />
    </div>
  );
};