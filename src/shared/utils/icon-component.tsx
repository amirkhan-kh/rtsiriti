import React from "react";
import { useViewMode } from "./use-view-mode";

const Icon: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const { mode } = useViewMode();

  let className = "";
  switch (mode) {
    case "normal":
      className = "";
      break;
    case "high-contrast":
      className = "contrast-200";
      break;
    case "grayscale":
      className = "grayscale";
      break;
    case "hidden-img":
      className = "hidden";
      break;
  }

  return <img src={src} alt={alt} className={className} />;
};

export default Icon;
