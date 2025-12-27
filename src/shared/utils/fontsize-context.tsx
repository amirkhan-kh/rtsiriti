import { createContext, useContext, useState, } from "react";
import type {ReactNode} from "react"
type FontSize = "normal" | "large";

type FontSizeContextType = {
  fontSize: FontSize;
  toggleFontSize: () => void;
};

const FontSizeContext = createContext<FontSizeContextType | null>(null);

export const FontSizeProvider = ({ children }: { children: ReactNode }) => {
  const [fontSize, setFontSize] = useState<FontSize>("normal");

  const toggleFontSize = () => {
    setFontSize((prev) => (prev === "normal" ? "large" : "normal"));
  };

  return (
    <FontSizeContext.Provider value={{ fontSize, toggleFontSize }}>
      <div data-font={fontSize}>
        {children}
      </div>
    </FontSizeContext.Provider>
  );
};

export const useFontSize = () => {
  const ctx = useContext(FontSizeContext);
  if (!ctx) throw new Error("useFontSize must be used inside provider");
  return ctx;
};
