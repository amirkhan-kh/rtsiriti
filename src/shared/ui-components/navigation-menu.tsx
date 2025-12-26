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

export function NavigationMenuDemo() {
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  return (
    <NavigationMenu viewport={isMobile} className="">
      <NavigationMenuList className="">
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger className="">{t("nav1")}</NavigationMenuTrigger>
          <NavigationMenuContent className="-translate-y-[6px]">
            {navLink.slice(0, 7).map((item, i) => (
              <li key={i} className="px-5 py-2 text-white hover:bg-[#8eaaf8] ">
                <NavLink to={item.srcLink}>{t(item.linkName)}</NavLink>
              </li>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>{t("nav2")}</NavigationMenuTrigger>
          <NavigationMenuContent className="-translate-y-[6px]">
            {navLink.slice(7, 10).map((item, i) => (
              <li key={i} className="px-7 py-2 text-white hover:bg-[#8eaaf8] ">
                <NavLink to={item.srcLink} key={i}>
                  {t(item.linkName)}
                </NavLink>
              </li>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>{t("nav3")}</NavigationMenuTrigger>
          <NavigationMenuContent className="-translate-y-[6px]">
            {navLink.slice(10, 14).map((item, i) => (
              <li key={i} className="w-full px-20 text-center py-2 text-white hover:bg-[#8eaaf8] ">
                <NavLink to={item.srcLink} key={i}>
                  {t(item.linkName)}
                </NavLink>
              </li>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>{t("nav4")}</NavigationMenuTrigger>
          <NavigationMenuContent className="-translate-y-[6px]">
            {navLink.slice(-2).map((item, i) => (
              <li key={i} className="w-full px-20 text-center py-2 text-white hover:bg-[#8eaaf8] ">
                <NavLink to={item.srcLink} key={i}>
                  {t(item.linkName)}
                </NavLink>
              </li>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
