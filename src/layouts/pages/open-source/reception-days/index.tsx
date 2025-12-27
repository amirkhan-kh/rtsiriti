import React from "react";
import "./_style.scss";
import { useTranslation } from "react-i18next";
import { receptionDays } from "../../../../store/employess";
import FadeContent from "../../../../components/FadeContent";
const ReceptionDays: React.FC = () => {
  const { t } = useTranslation("ReceptionDays");
  return (
    <section className="">
      <FadeContent
        blur={true}
        duration={2000}
        initialOpacity={0}
      >
      <h2 className="text-2xl text-center py-6 dark:text-white">{t("title")}</h2>

        <div className="bg-[#4c75f6] dark:bg-[#7c96ff] border-b-2 border-white">
        <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8">
          {receptionDays.map((item, i) => (
            <div key={i} className="flex flex-row sm:flex-col items-center lg:flex-row shadow  shadow-[#f6f5f577] hover:shadow-sm p-4 gap-4 text-white group hover:bg-white/4">
              <img
                className="w-30 rounded-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                src={`/public/images/optimized/${item.img}.avif`}
                alt={t(item.emName)}
                />
              <div className="flex flex-col lg:flex-row gap-2">
                <div className="flex flex-col justify-between">
                  <p className="font-semibold">{t(item.emName)}</p>
                  <p className="text-[14px]">{t(item.condition)}</p>
                </div>
                <div className="text-[14px] w-full lg:w-[40%] flex flex-col justify-between">
                  <div>

                  <p>{t(item.phone)}</p>
                  <p>{t(item.emeil)}</p>
                  </div>
                  <p>{t(item.day)}</p>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
      </FadeContent>
    </section>
  );
};

export default ReceptionDays;
