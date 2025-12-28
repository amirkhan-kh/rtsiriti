import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";


import { ThemeToggle } from "./theme-toggle";
import { useTranslation } from "react-i18next";

const HeaderMedia: React.FC = () => {
const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng); // 👈 SAQLASH
  };
  return (
    <div className="flex w-full items-center gap-3 sm:gap-8">
      <picture className="w-12 h-full ">
        <source
          srcSet={`/images/optimized/gerb-removebg-preview.avif`}
          type="image/avif"
        />
        <source
          srcSet={`/images/webp/gerb-removebg-preview.webp`}
          type="image/webp"
        />
        <img
          src={`/images/original/gerb-removebg-preview.png`}
          alt={"Airi Logo"}
          className={""}
          loading="lazy"
        />
      </picture>
      <div className="flex items-center gap-1.5 sm:gap-4.5">
        <Select
       
          value={i18n.language}
      onValueChange={changeLanguage}
        >
          <SelectTrigger>
            <SelectValue className="dark:text-white" placeholder="Tilni tanlang" />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              <SelectItem className="dark:text-white" value="uz">O‘z</SelectItem>
              <SelectItem className="dark:text-white" value="ru">Рус</SelectItem>
              <SelectItem className="dark:text-white" value="en">Eng</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
          <ThemeToggle />        
      </div>
    </div>
  );
};

export default HeaderMedia;
