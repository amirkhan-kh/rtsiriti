import React, { useState } from "react";
import HeaderMedia from "../../shared/ui-components/header-media";
import { useTranslation } from "react-i18next";
import { NavigationMenuDemo } from "../../shared/ui-components/navigation-menu";
import ToggleMenu from "../../shared/ui-components/toggle-menu";
import clsx from "clsx";

const Header: React.FC = () => {
  const { t } = useTranslation("HeaderLang");
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-white">
      <div className="container mx-auto px-4">
      <div className="w-full flex flex-col md:flex-row justify-between items-center py-4 sm:pb-6">
        <div className="flex items-center  gap-4 w-full md:w-[50%] h-full pb-6 sm:pb-0">
          <picture className="w-26 h-full">
            <source
              srcSet={`/images/optimized/airilogo-removebg-preview.avif`}
              type="image/avif"
            />
            <source
              srcSet={`/images/webp/airilogo-removebg-preview.webp`}
              type="image/webp"
            />
            <img
              src={`/images/original/airilogo-removebg-preview.jpg`}
              alt={"Airi Logo"}
              className={""}
              loading="lazy"
            />
          </picture>
          <h1 className="text-[12px] md:text-[15px] font-medium w-full h-10">
            <a href="">{t("title")}</a>
          </h1>
        </div>

        <div className="hidden md:block">
          <HeaderMedia />
        </div>

        <div className=" flex md:hidden items-center w-full md:w-[50%] p-3 md:p-0 bg-[#F0F0F0] md:bg-transparent relative ov">
          <HeaderMedia />
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="relative w-6 h-4 z-20"
          >
            <span
              className={clsx(
                "absolute top-0 left-0 h-0.5 w-full bg-black transition-all duration-300 origin-center",
                open && "top-1/2 rotate-45"
              )}
            />

            <span
              className={clsx(
                "absolute top-1/2 left-0 h-0.5 w-full bg-black transition-all duration-300 origin-center -translate-y-1/2",
                open && "opacity-0"
              )}
            />

            <span
              className={clsx(
                "absolute bottom-0 left-0 h-0.5 w-full bg-black transition-all duration-300 origin-center",
                open && "top-1/2 -rotate-45"
              )}
            />
          </button>

          <ToggleMenu open={open} />
        </div>
      </div>

      <nav className="px-2 bg-[#F0F0F0]">
        <NavigationMenuDemo />
      </nav>
      </div>
    </header>
  );
};

export default Header;
