import React from "react";
import { useTranslation } from "react-i18next";
import { labarotories } from "../../../../store/part-institut";
const Laboratories: React.FC = () => {
  const { t } = useTranslation("Laboratories");
  return (
    <section className="container mx-auto px-4">
      <h1 className="text-2xl text-center px-6 py-6 dark:text-white">{t("title")}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 py-6 gap-6">
        {labarotories.map((item, i) => (
          <div
            key={i}
            className="group bg-white rounded-[3px] overflow-hidden shadow  shadow-[#4c75f6] hover:shadow-sm
               transition-all duration-500 border border-[#f0f0f0]"
          >
            <div className="relative h-40 overflow-hidden bg-gradient-to-br from-[#f0f0f0] to-white">
              <img
                className="w-full h-full object-contain transition-transform duration-700 
                   group-hover:scale-105"
                src={`/public/images/webp/${item.img}.webp`}
                alt={t(item.li)}
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r  from-[#4c75f6] via-[#8eaaf8] to-transparent"
              />
            </div>

            <div className="p-5">
              <div className="flex items-start gap-3">
                <div
                  className="flex-shrink-0 w-8 h-8 bg-[#4c75f6] text-white rounded-full 
                        flex items-center justify-center font-bold text-sm"
                >
                  {i + 1}
                </div>

                <div>
                  <h3
                    className="font-semibold text-gray-800 group-hover:text-[#4c75f6] 
                         transition-colors duration-300"
                  >
                    {t(item.li)}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Laboratories;
