import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NProgress from "nprogress";
NProgress.configure({
  showSpinner: false,
  easing: "ease",
  speed: 200,
  minimum: 1,
});
const RouteChangeLoader = () => {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, [location.pathname]);

  return null;
};

export default RouteChangeLoader;
