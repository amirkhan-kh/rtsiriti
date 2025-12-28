import React from "react";
import "./_style.scss";
import { useTranslation } from "react-i18next";
import { employessCard } from "../../../../store/employess";
import FadeContent from "../../../../components/FadeContent";
const ScientificCouncil: React.FC = () => {
  const { t } = useTranslation("ScientificCouncil");

  return (
    <section className="py-8 dark:text-white">
      <div className="container mx-auto px-4">
         <FadeContent
        blur={true}
        duration={2000}
        initialOpacity={0}
      >
        <h2 className="text-center text-2xl">{t("title")}</h2>
        <h3 className="text-center text-md font-semibold px-4 md:px-20">
          {t("desc")}
        </h3>
        <p className="py-8 px-4 text-center">{t("descriptionFull")}</p>
      </FadeContent>
      </div>


      <div className="bg-[#4c75f6] w-full py-10 mb-20 dark:bg-[#7c96ff]">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl text-white">{t("cardSort")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-6 py-8">
            {employessCard.map((item, i) => (
              <div key={i}
               className=" hover:bg-white/4 backdrop-blur-sm flex flex-row sm:flex-col md:flex-row h-40 sm:h-100 md:h-40  shadow  shadow-[#f6f5f577] hover:shadow-sm  rounded-[3px] overflow-hidden group">
                <img
                className="transition-transform duration-500 ease-in-out group-hover:scale-105"
                src={`/images/webp/${item.img}.webp`} alt="" />
                <div className="p-4   text-white flex flex-col gap-0 sm:gap-3 justify-center">
                  <p className="text-[14px] md:text-[16px] font-semibold">{t(item.employeeName)}</p>
                  <p className="text-[12px] md:text-[14px]">{t(item.prof)}</p>
                  <p className="text-[12px] md:text-[14px]">{t(item.level)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScientificCouncil;
