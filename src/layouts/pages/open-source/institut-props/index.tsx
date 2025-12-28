import React from "react";
import { useTranslation } from "react-i18next";
import { HiBuildingOffice } from "react-icons/hi2";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import FadeContent from "../../../../components/FadeContent";
const InstitutProps: React.FC = () => {
  const { t } = useTranslation("Props");

  return (
    <section className="container mx-auto px-4">
        <FadeContent
        blur={true}
        duration={2000}
        initialOpacity={0}
      >
      <h2 className="text-2xl text-center py-6 dark:text-white">{t("title")}</h2>
      <div className="bg-[#4c75f6] dark:bg-[#7c96ff] p-4 md:px-6 text-white my-8">
        <h3 className="font-semibold pb-4">{t("mapTitle")} </h3>
        <p className="text-[16px] pb-4">{t("desc").substring(0, 153)}.</p>

        <div className="flex flex-col lg:flex-row justify-between gap-2 lg:gap-8">
          <div className=" w-full md:w-[50%]">
            <div className="p-0 lg:py-2">
              <a
                href="https://maps.google.com/?q=100125, Toshkent sh., Bo'z-2, 17A"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:hover:underline hover:underline-offset-4 hover:decoration-white  transition text-[14px] sm:text-[16px]"
              >
                <HiBuildingOffice size={20} color={""} />
                100125, Toshkent sh., Bo'z-2, 17A
              </a>
            </div>
            <div className=" p-0 lg:py-2">
              <a
                href="tel:+998712634198"
                className="flex items-center gap-2 hover:hover:underline hover:underline-offset-4 hover:decoration-white  transition text-[14px] sm:text-[16px]"
              >
                <IoIosCall size={20} color={""} />
                +998 (71) 263-41-98
              </a>
            </div>
            <div className=" p-0 lg:py-2">
              <a
                href="mailto:info@airi.uz"
                className="flex items-center gap-2 hover:hover:underline hover:underline-offset-4 hover:decoration-white  transition text-[14px] sm:text-[16px]"
              >
                <MdEmail size={20} color={""} />
                info@airi.uz
              </a>
            </div>
            <div className="py-2">
              <p className="hover:hover:underline hover:underline-offset-4 hover:decoration-white ">
                {t("desc1").substring(89, 120)}.
              </p>
            </div>
            <div className="py-2">
              <p className="hover:hover:underline hover:underline-offset-4 hover:decoration-white ">
                {t("desc2").substring(0, 61)}.
              </p>
            </div>
            <div className="py-2">
              <p className="hover:hover:underline hover:underline-offset-4 hover:decoration-white ">
                {t("desc2").substring(62, 120)}.
              </p>
            </div>
          </div>

          <div className=" w-full md:w-[50%] py-2">
            <p className="py-2 hover:hover:underline hover:underline-offset-4 hover:decoration-white ">
              {t("desc").substring(218, 234)}.
            </p>
            <p className="py-2 hover:hover:underline hover:underline-offset-4 hover:decoration-white ">
              {t("desc").substring(236, 248)}.
            </p>
            <p className="py-2 hover:hover:underline hover:underline-offset-4 hover:decoration-white ">
              {t("desc").substring(249, 334)}.
            </p>
            <p className="py-2 hover:hover:underline hover:underline-offset-4 hover:decoration-white ">
              {t("desc").substring(335, 360)}.
            </p>
            <p className="py-2 hover:hover:underline hover:underline-offset-4 hover:decoration-white ">
              {t("desc1").substring(0, 88)}.
            </p>
          </div>
        </div>
        <div className=" py-2">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A64c94f03704611b732ee42f1ffa70f83cba6d7f50e89bcab32b2dc4cd4cf93fb&amp;source=constructor"
            width="100%"
            height="400"
          ></iframe>
        </div>
      </div>
      </FadeContent>
    </section>
  );
};

export default InstitutProps;
