import "./lang/index.ts";
import { PrimeReactProvider } from "primereact/api";

import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import { router } from "./routers/main-router.tsx";
import { ViewModeProvider } from "./shared/utils/view-mode-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <ViewModeProvider>
    <PrimeReactProvider>
    <RouterProvider router={router} />
    </PrimeReactProvider>
  </ViewModeProvider>
);
