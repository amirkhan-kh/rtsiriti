import React from "react";
import { useTranslation } from "react-i18next";
import FadeContent from "../../../../components/FadeContent";
import { RevalLeft, RevalRight } from "../../../../shared/ui-components/reval-animation";

const CardAnimations: React.FC = () => {
  const { t } = useTranslation("HomeMainCard");
  
  return (
    <section className="container mx-auto p-4  ">
      <div className="flex flex-col py-8 gap-10 sm:gap-20">
        <FadeContent
          blur={true}
          duration={1700}
          initialOpacity={0}
        >
          <RevalLeft width="100%">
            <div className="flex flex-col sm:flex-row items-center w-full gap-4 sm:gap-10">
              <img
                className="w-full sm:w-[50%] h-60 object-cover"
                src="/images/webp/news73.webp"
                alt=""
              />
              <div className="w-full sm:w-[50%] h-60">
                <p className="text-[18px] dark:text-white">{t("description1")}</p>
              </div>
            </div>
          </RevalLeft>
        </FadeContent>

        <FadeContent
          blur={true}
          duration={2000}
          initialOpacity={0}
        >
          <RevalRight width="100%" delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center w-full gap-4 sm:gap-10">
              <img
                className="w-full sm:w-[50%] h-60 object-cover"
                src="/images/webp/news69.webp"
                alt=""
              />
              <div className="w-full sm:w-[50%] h-60">
                <p className="text-[18px] dark:text-white">{t("description2")}</p>
              </div>
            </div>
          </RevalRight>
        </FadeContent>

        <FadeContent
          blur={true}
          duration={2000}
          initialOpacity={0}
        >
          <RevalLeft width="100%" delay={0.6}>
            <div className="flex flex-col sm:flex-row items-center w-full gap-4 sm:gap-10">
              <img
                className="w-full sm:w-[50%] h-60 object-cover"
                src="/images/webp/news87.webp"
                alt=""
              />
              <div className="w-full sm:w-[50%] h-60">
                <p className="text-[18px] dark:text-white">{t("description3")}</p>
              </div>
            </div>
          </RevalLeft>
        </FadeContent>

        <FadeContent
          blur={true}
          duration={2000}
          initialOpacity={0}
        >
          <RevalRight width="100%" delay={0.8}>
            <div className="flex flex-col sm:flex-row items-center w-full gap-4 sm:gap-10">
              <img
                className="w-full sm:w-[50%] h-60 object-cover"
                src="/images/webp/news62.webp"
                alt=""
              />
              <div className="w-full sm:w-[50%] h-60">
                <p className="text-[18px] dark:text-white">{t("description4")}</p>
              </div>
            </div>
          </RevalRight>
        </FadeContent>
      </div>
    </section>
  );
};

export default CardAnimations;