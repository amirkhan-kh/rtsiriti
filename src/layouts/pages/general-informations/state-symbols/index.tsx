import React from "react";
import "./_style.scss";
import { useTranslation } from "react-i18next";
import FadeContent from "../../../../components/FadeContent";
const StateSymbols: React.FC = () => {
  const { t } = useTranslation("StateAwards");

  return (
    <section className="">
        <FadeContent
        blur={true}
        duration={2000}
        easing="ease-out"
        initialOpacity={0}
      >
      <h1 className="text-2xl text-center p-6 dark:text-white">{t("title")}</h1>

      <div className="py-8 w-full bg-[#f0f0f0] dark:bg-[#7c96ff] dark:text-white border-b-2 border-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-6 items-center">
            <img
              className="h-40"
              src={`/public/images/optimized/gerb-removebg-preview.avif`}
              alt={t("card1")}
            />
            <p className="font-semibold">{t("card1")}</p>
            <p className="pb-6 text-[16px] text-center">{t("cardDesc1")}</p>
          </div>

          <div className="flex flex-col gap-6 items-center">
            <img
              className="h-40"
              src={`/public/images/optimized/bayrog.avif`}
              alt={t("card2")}
            />
            <p className="font-semibold">{t("card2")}</p>
            <p className="pb-6 text-[16px] text-center">{t("cardDesc2")}</p>
          </div>
          <div className="flex flex-col gap-6 items-center">
            <p className="font-semibold">{t("card3")}</p>
            <p className="pb-6 text-[16px] text-center">{t("cardDesc3")}</p>
            <div className="text-center text-[14px] font-semibold">
              <p>{t("autor")}</p>
              <p>{t("poet")}</p>
            </div>
            <p className="w-78 font-bold">{t("hymn")}</p>
          </div>
        </div>
      </div>
      </FadeContent>
    </section>
  );
};

export default StateSymbols;
