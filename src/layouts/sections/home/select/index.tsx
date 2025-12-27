import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Reveal } from "../../../../shared/ui-components/reval-animation";

const SelectHome: React.FC = () => {
  const { t } = useTranslation("HomeMainCard");

  return (
    <section className="py-6 container mx-auto px-4">
      <h2 className="text-lg text-[#4c75f6] font-semibold">{t("title")}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 py-6">
        <div className="space-y-6 md:space-y-4">
            <Reveal width="100%">
          <Accordion type="single" collapsible className="w-full ">
              <AccordionItem
                className="shadow-sm hover:shadow-md shadow-[#4c75f6] p-4 bg-white  dark:bg-black"
                value="item-1"
              >
                <AccordionTrigger className="text-[#4c75f6] text-[14px] sm:text-2xl border-[#4c75f6] border-l-4 pl-2.5 hover:no-underline ">
                  {t("title1")}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-lg py-2">
                  <span className="text-gray-700 dark:text-[#4c75f6]">{t("description1")}</span>
                  <div className="text-end">
                    <NavLink
                      to={"/about-institut"}
                      className="text-sm text-[#4c75f6] hover:text-[#3a5bc4] font-medium"
                    >
                      {t("btn")}
                    </NavLink>
                  </div>
                </AccordionContent>
              </AccordionItem>
          </Accordion>
            </Reveal>

            <Reveal width="100%">
          <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                className="shadow-sm hover:shadow-md shadow-[#4c75f6] p-4 bg-white dark:bg-black"
                value="item-3"
              >
                <AccordionTrigger className="text-[#4c75f6] text-[14px] sm:text-2xl border-[#4c75f6] border-l-4 pl-2.5 hover:no-underline">
                  {t("title3")}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-lg py-2">
                  <span className="text-gray-700 dark:text-[#4c75f6]">{t("description3")}</span>
                  <div className="text-end">
                    <NavLink
                      to={"/institut-structure"}
                      className="text-sm text-[#4c75f6] hover:text-[#3a5bc4] font-medium"
                    >
                      {t("btn")}
                    </NavLink>
                  </div>
                </AccordionContent>
              </AccordionItem>
          </Accordion>
            </Reveal>
        </div>

        <div className="space-y-6 md:space-y-4">
            <Reveal width="100%">
          <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                className="shadow-sm hover:shadow-md shadow-[#4c75f6] p-4 bg-white dark:bg-black"
                value="item-2"
              >
                <AccordionTrigger className="text-[#4c75f6] text-[14px] sm:text-2xl border-[#4c75f6] border-l-4 pl-2.5 hover:no-underline">
                  {t("title2")}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-lg py-2">
                  <span className="text-gray-700 dark:text-[#4c75f6]">{t("description2")}</span>
                  <div className="text-end">
                    <NavLink
                      to={"/institut-team"}
                      className="text-sm text-[#4c75f6] hover:text-[#3a5bc4] font-medium"
                    >
                      {t("btn")}
                    </NavLink>
                  </div>
                </AccordionContent>
              </AccordionItem>
          </Accordion>
            </Reveal>

            <Reveal width="100%">
          <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                className="shadow-sm hover:shadow-md shadow-[#4c75f6] p-4 bg-white dark:bg-black"
                value="item-4"
              >
                <AccordionTrigger className="text-[#4c75f6] text-[14px] sm:text-2xl border-[#4c75f6] border-l-4 pl-2.5 hover:no-underline">
                  {t("title4")}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-lg py-2">
                  <span className="text-gray-700 dark:text-[#4c75f6]">{t("description4")}</span>
                  <div className="text-end">
                    <NavLink
                      to={"/laboratories"}
                      className="text-sm text-[#4c75f6] hover:text-[#3a5bc4] font-medium"
                    >
                      {t("btn")}
                    </NavLink>
                  </div>
                </AccordionContent>
              </AccordionItem>
          </Accordion>
            </Reveal>
        </div>
      </div>
    </section>
  );
};

export default SelectHome;
