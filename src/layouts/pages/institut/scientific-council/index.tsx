import React from "react";
import "./_style.scss";
import { useTranslation } from "react-i18next";
import { employessCard } from "../../../../store/employess";
const ScientificCouncil: React.FC = () => {
  const { t } = useTranslation("ScientificCouncil");

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl">{t("title")}</h2>
        <h3 className="text-center text-md font-semibold px-4 md:px-20">
          {t("desc")}
        </h3>
        <p className="py-8 px-4 text-center">{t("descriptionFull")}</p>
      </div>


      <div className="bg-[#4c75f6] w-full py-10 mb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl text-white">{t("cardSort")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-6 py-8">
            {employessCard.map((item, i) => (
              <div key={i}
               className="bg-[#ffffff26] backdrop-blur-sm flex flex-row sm:flex-col md:flex-row h-40 sm:h-100 md:h-40  shadow shadow-white rounded-md overflow-hidden group">
                <img
                className="transition-transform duration-500 ease-in-out group-hover:scale-105"
                src={`/public/images/webp/${item.img}.webp`} alt="" />
                <div className="p-4 text-[12px] md:text-[14px] font-semibold text-white flex flex-col gap-3 justify-center">
                  <p>{t(item.employeeName)}</p>
                  <p>{t(item.prof)}</p>
                  <p>{t(item.level)}</p>
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
