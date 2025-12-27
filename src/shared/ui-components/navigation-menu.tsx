import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../components/ui/navigation-menu";
import { NavLink } from "react-router-dom";
import { useIsMobile } from "../../hooks/use-mobile";
import { navLink } from "../../store/navigation";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export function NavigationMenuDemo() {
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  const [openMenuItem, setOpenMenuItem] = useState<string | null>(null);

 
  const handleNavClick = (navId: string) => {
    setOpenMenuItem(openMenuItem === navId ? null : navId);
  };

  const handleLinkClick = () => {
    setOpenMenuItem(null);
  };

  return (
    <NavigationMenu viewport={isMobile} className="">
      <NavigationMenuList className="">
        <NavigationMenuItem
          className="hidden md:block"
          onMouseEnter={() => setOpenMenuItem("nav1")}
          onMouseLeave={() => setOpenMenuItem(null)}
        >
          <NavigationMenuTrigger 
            className=""
            onClick={() => handleNavClick("nav1")}
          >
            {t("nav1")}
          </NavigationMenuTrigger>
          <NavigationMenuContent
            style={{
              display: openMenuItem === "nav1" ? "block" : "none", 
            }}
            className="-translate-y-[6px]"
          >
            <div 
              className="flex flex-col min-w-[200px]"
              onClick={handleLinkClick} 
            >
              {navLink.slice(0, 7).map((item, i) => (
                <NavLink
                  key={i}
                  to={item.srcLink}
                  className={({ isActive }) =>
                    `px-5 py-2 text-white hover:bg-[#9cb0f3] hover:text-white transition-colors
                    ${isActive ? "bg-[#4c75f6] text-white" : ""}`
                  }
                >
                  {t(item.linkName)}
                </NavLink>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem
          className="hidden md:block"
          onMouseEnter={() => setOpenMenuItem("nav2")} 
          onMouseLeave={() => setOpenMenuItem(null)}
        >
          <NavigationMenuTrigger 
            onClick={() => handleNavClick("nav2")} 
          >
            {t("nav2")}
          </NavigationMenuTrigger>
          <NavigationMenuContent
            style={{
              display: openMenuItem === "nav2" ? "block" : "none", 
            }}
            className="-translate-y-[6px]"
          >
            <div 
              className="flex flex-col min-w-[200px]"
              onClick={handleLinkClick}
            >
              {navLink.slice(7, 10).map((item, i) => (
                <NavLink
                  key={i}
                  to={item.srcLink}
                  className={({ isActive }) =>
                    `px-5 py-2 text-white hover:bg-[#9cb0f3] hover:text-white transition-colors
                    ${isActive ? "bg-[#4c75f6] text-white" : ""}`
                  }
                >
                  {t(item.linkName)}
                </NavLink>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem
          className="hidden md:block"
          onMouseEnter={() => setOpenMenuItem("nav3")} 
          onMouseLeave={() => setOpenMenuItem(null)}
        >
          <NavigationMenuTrigger 
            onClick={() => handleNavClick("nav3")} 
          >
            {t("nav3")}
          </NavigationMenuTrigger>
          <NavigationMenuContent
            style={{
              display: openMenuItem === "nav3" ? "block" : "none", 
            }}
            className="-translate-y-[6px]"
          >
            <div 
              className="flex flex-col min-w-[200px]"
              onClick={handleLinkClick}
            >
              {navLink.slice(10, 14).map((item, i) => (
                <NavLink
                  key={i}
                  to={item.srcLink}
                  className={({ isActive }) =>
                    `px-5 py-2 text-white hover:bg-[#9cb0f3] hover:text-white transition-colors
                    ${isActive ? "bg-[#4c75f6] text-white" : ""}`
                  }
                >
                  {t(item.linkName)}
                </NavLink>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem
          className="hidden md:block"
          onMouseEnter={() => setOpenMenuItem("nav4")} 
          onMouseLeave={() => setOpenMenuItem(null)}
        >
          <NavigationMenuTrigger 
            onClick={() => handleNavClick("nav4")} 
            
          >
            {t("nav4")}
          </NavigationMenuTrigger>
          <NavigationMenuContent
            style={{
              display: openMenuItem === "nav4" ? "block" : "none", 
            }}
            className="-translate-y-[6px]"
          >
            <div 
              className="flex flex-col min-w-[200px]"
              onClick={handleLinkClick}
            >
              {navLink.slice(-2).map((item, i) => (
                <NavLink
                  key={i}
                  to={item.srcLink}
                  className={({ isActive }) =>
                    `px-5 py-2 text-white hover:bg-[#9cb0f3] hover:text-white transition-colors
                    ${isActive ? "bg-[#4c75f6] text-white" : ""}`
                  }
                >
                  {t(item.linkName)}
                </NavLink>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}