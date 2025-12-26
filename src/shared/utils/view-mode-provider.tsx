import { useState } from "react";
import type { ReactNode } from "react";
import { ViewModeContext } from "./view-mode-context";

export type ViewMode = "normal" | "dark" | "light" | "high-contrast" | "grayscale" | "hidden-img";

interface Props {
  children: ReactNode;
}

export const ViewModeProvider = ({ children }: Props) => {
  const [mode, setMode] = useState<ViewMode>("normal");

  return (
    <ViewModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ViewModeContext.Provider>
  );
};
