import { useContext } from "react";
import { ViewModeContext } from "./view-mode-context";

export const useViewMode = () => {
  const context = useContext(ViewModeContext);
  if (!context) {
    throw new Error("useViewMode must be used within ViewModeProvider");
  }
  return context;
};
