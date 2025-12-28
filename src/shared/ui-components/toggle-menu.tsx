import React from "react";
import clsx from "clsx";
import { navLink } from "../../store/navigation";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface Props {
  open: boolean;
  onClose: () => void;
}

const ToggleMenu: React.FC<Props> = ({ open, onClose }) => {
  const { t } = useTranslation("HeaderLang");

  return (
    <div
      className={clsx(
        "absolute left-0 top-full w-full bg-[#4c75f6] z-10",
        "transition-all duration-300 ease-out ",
        open
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-4 pointer-events-none"
      )}
    >
      <div className="p-1 grid grid-cols-2 sm:grid-cols-4 gap-2">
        <ul>
          <p className="px-5 text-white text-[14px] font-bold">{t("nav1")}</p>
          {navLink.slice(0, 7).map((item, i) => (
            <li
              key={i}
              className="px-5 py-1 sm:py-2 text-white hover:bg-[#8eaaf8] text-[13px]"
            >
              <NavLink to={item.srcLink} onClick={onClose}>{t(item.linkName)}</NavLink>
            </li>
          ))}
        </ul>
        <ul>
          <p className="px-5 text-white text-[14px] font-bold">{t("nav2")}</p>

          {navLink.slice(7, 10).map((item, i) => (
            <li
              key={i}
              className="px-2 py-1 sm:py-2 text-white hover:bg-[#8eaaf8] text-[13px]"
            >
              <NavLink to={item.srcLink} key={i} onClick={onClose}>
                {t(item.linkName)}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul>
          <p className="px-5 text-white text-[14px] font-bold">{t("nav3")}</p>

          {navLink.slice(10, 14).map((item, i) => (
            <li
              key={i}
              className="w-full px-4 py-1 sm:py-2 text-white hover:bg-[#8eaaf8] text-[13px]"
            >
              <NavLink to={item.srcLink} key={i} onClick={onClose}>
                {t(item.linkName)}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul>
          <p className="px-5 text-white text-[14px] font-bold">{t("nav4")}</p>

          {navLink.slice(-2).map((item, i) => (
            <li
              key={i}
              className="w-full px-4  py-1 sm:py-2 text-white hover:bg-[#8eaaf8] text-[13px]"
            >
              <NavLink to={item.srcLink} key={i} onClick={onClose}>
                {t(item.linkName)}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToggleMenu;
