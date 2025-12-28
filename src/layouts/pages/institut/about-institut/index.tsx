import React from "react";
import "./_style.scss";
import { useTranslation } from "react-i18next";
import { partnersImg } from "../../../../store/partnesrs";
import { RevalLeft } from "../../../../shared/ui-components/reval-animation";
import FadeContent from "../../../../components/FadeContent";
const AboutInstitut: React.FC = () => {
  const { t } = useTranslation("About");
  return (
    <section className="container mx-auto p-4 dark:text-white">
      <FadeContent
        blur={true}
        duration={2000}
        initialOpacity={0}
      >
        <h2 className="text-center text-2xl ">{t("title")}</h2>

        <div className="flex py-8 ">
          <div className="w-8 self-stretch border-[#4c75f6] bg-transparent border-r-4 border-t-4 border-b-4 gradient-border"></div>

          <div className="flex flex-col gap-8">
            <div className="flex items-center">
              <div className="pr-14 border-2 border-[#4c75f6] rounded-r-full gradient-border"></div>
              <p className="pl-4">{t("li1")}</p>
            </div>
            <div className="flex items-center">
              <div className="pr-14 border-2 border-[#4c75f6] rounded-r-full gradient-border"></div>
              <p className="pl-4">{t("li1")}</p>
            </div>
            <div className="flex items-center">
              <div className="pr-14 border-2 border-[#4c75f6] rounded-r-full gradient-border"></div>
              <p className="pl-4">{t("li3")}</p>
            </div>
            <div className="flex items-center">
              <div className="pr-14 border-2 border-[#4c75f6] rounded-r-full gradient-border"></div>
              <p className="pl-4">{t("li4")}</p>
            </div>
          </div>
        </div>
      </FadeContent>
      <div>
        <h2 className="text-center text-2xl">{t("titleMain")}</h2>

        <RevalLeft width="100%">
          <div className="flex flex-col gap-8 py-8">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <img
                className="w-30"
                src="/images/webp/gerb-removebg-preview.webp"
                alt={t("")}
              />
              <p className="font-semibold text-md">{t("li5")}</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <img
                className="w-30"
                src="/images/webp/gerb-removebg-preview.webp"
                alt={t("")}
              />
              <p className="font-semibold text-md">{t("li4")}</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <img
                className=""
                src="/images/webp/raqamliVazirlik.webp"
                alt={t("")}
              />
              <p className="font-semibold text-md">{t("li6")}</p>
            </div>
          </div>
        </RevalLeft>
      </div>
      <div>
        <h2 className="text-center text-2xl">{t("titleFooter")}</h2>
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-10 gap-4">
          {partnersImg.map((item, i) => (
            <div
              key={i}
              className="grid place-content-center p-4 shadow-sm hover:transition-transform duration-500 ease-in-out hover:shadow-sm shadow-[#4c75f6] group rounded-[2px] dark:bg-white gridCard"
            >
              <img
                className="w-50 h-24 transition-transform duration-500 ease-in-out group-hover:scale-105"
                src={`/images/webp/${item.img}.webp`}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutInstitut;
