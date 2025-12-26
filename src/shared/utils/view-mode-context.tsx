import { createContext } from "react";
import type { ViewMode } from "./view-mode-provider";

export interface ViewModeContextType {
  mode: ViewMode;
  setMode: (mode: ViewMode) => void;
}

// Contextni yaratamiz
export const ViewModeContext = createContext<ViewModeContextType | undefined>(undefined);
