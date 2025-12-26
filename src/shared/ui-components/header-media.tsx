import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";
import { Button } from "../../components/ui/button";
import { useTranslation } from "react-i18next";
import { IoEyeOutline } from "react-icons/io5";
import { FaCircleHalfStroke, FaRegCircle } from "react-icons/fa6";
import { VscColorMode } from "react-icons/vsc";
import { TbPhotoOff } from "react-icons/tb";
import { useViewMode } from "../utils/use-view-mode";

const HeaderMedia: React.FC = () => {
  const { mode, setMode } = useViewMode();

  const { i18n, t } = useTranslation();
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
          onValueChange={(lng) => i18n.changeLanguage(lng)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Tilni tanlang" />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              <SelectItem value="uz">O‘z</SelectItem>
              <SelectItem value="ru">Рус</SelectItem>
              <SelectItem value="en">Eng</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <IoEyeOutline />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>{t("sheetTitle")}</SheetTitle>
              <div className="flex items-center gap-1.5">
                <Button
                  onClick={() => setMode("normal")}
                  variant={mode === "normal" ? "default" : "outline"}
                >
                  <FaRegCircle />
                </Button>
                <Button
                  onClick={() => setMode("dark")}
                  variant={mode === "dark" ? "default" : "outline"}
                >
                  <FaCircleHalfStroke />
                </Button>
                <Button
                  onClick={() => setMode("light")}
                  variant={mode === "light" ? "default" : "outline"}
                >
                  <VscColorMode />
                </Button>
                <Button
                  onClick={() => setMode("high-contrast")}
                  variant={mode === "high-contrast" ? "default" : "outline"}
                >
                  <TbPhotoOff />
                </Button>
              </div>
            </SheetHeader>

            <SheetFooter>
              <Button type="submit">Save changes</Button>
              <SheetClose asChild>
                <Button variant="outline">Close</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default HeaderMedia;
