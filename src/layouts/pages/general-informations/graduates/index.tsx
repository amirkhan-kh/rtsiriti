import React from "react";
import "./_style.scss";
import { useTranslation } from "react-i18next";
import { graduets } from "../../../../store/employess";
import FadeContent from "../../../../components/FadeContent";
const Graduates: React.FC = () => {
  const { t } = useTranslation("Graduates");

  return (
    <section>
      <div>
        <FadeContent blur={true} duration={2000} initialOpacity={0}>
          <h2 className="text-center text-2xl p-6 dark:text-white">
            {t("title")}
          </h2>
          <div className="bg-[#f0f0f0] py-6 dark:bg-black">
            <div className="container mx-auto p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {graduets.map((item, i) => (
                  <div
                    key={i}
                    className="group relative bg-white dark:bg-black border border-[#f0f0f0]
              overflow-hidden hover:shadow-md transition-all duration-300 
               h-full flex flex-col rounded-[3px] dark:border-[#7c96ff] gridCard"
                  >
                    <div className="relative overflow-hidden  from-[#f0f0f0] to-white">
                      <img
                        src={`/images/optimized/${item.img}.avif`}
                        alt={t(item.desc)}
                        className="w-full object-center transition-transform duration-500 
                    group-hover:scale-102"
                        loading="lazy"
                      />

                      <div
                        className="absolute top-0 right-0 w-12 h-12 bg-[#4c75f6] 
                    transform translate-x-6 -translate-y-6 rotate-45"
                      />
                    </div>

                    <div className="flex-1 p-5 flex flex-col">
                      <h3
                        className="font-medium text-gray-800 mb-3 line-clamp-2 leading-snug
                    group-hover:text-[#4c75f6] transition-colors duration-300 dark:text-white"
                      >
                        {t(item.desc)}
                      </h3>

                      <div className="mt-auto">
                        <div className="flex items-center justify-between pt-4 border-t border-[#f0f0f0]">
                          <span className="text-xs text-gray-500 font-medium group-hover:text-[#4c75f6] ">
                            {t(item.cardDate)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div
                      className="absolute inset-0 border-2 border-transparent 
                  transition-all duration-300 pointer-events-none"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeContent>
      </div>
    </section>
  );
};

export default Graduates;
