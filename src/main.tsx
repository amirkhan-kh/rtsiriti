import "./lang/index.ts";
import 'nprogress/nprogress.css';

import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routers/main-router.tsx";
import { ViewModeProvider } from "./shared/utils/view-mode-provider.tsx";
import { FontSizeProvider } from "./shared/utils/fontsize-context.tsx";
import { ThemeProvider } from "./shared/utils/theme-provider-props.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <ViewModeProvider>
        <FontSizeProvider>
          
          <RouterProvider router={router} />
        </FontSizeProvider>
    </ViewModeProvider>
  </ThemeProvider>
);
