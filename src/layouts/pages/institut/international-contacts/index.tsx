import React from "react";
import "./_style.scss";
import { partnersImg } from "../../../../store/partnesrs";
import { useTranslation } from "react-i18next";
import FadeContent from "../../../../components/FadeContent";
const InternContacts: React.FC = () => {
  const {t} = useTranslation("InternContacts")
  return (
    <section className="container mx-auto px-4 dark:text-white">
       <FadeContent
        blur={true}
        duration={2000}
        initialOpacity={0}
      >
      <h2 className="text-center text-2xl py-6">{t("title")}</h2>
      <h3 className="text-center text-lg font-semibold">{t("desc")}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-10 gap-4">
        {partnersImg.map((item, i) => (
          <div
            key={i}
            className="grid place-content-center p-4  shadow-sm hover:transition-transform duration-500 ease-in-out hover:shadow-sm shadow-[#4c75f6] group rounded-[2px] dark:bg-white "
          >
            <img
              className="w-50 h-24 transition-transform duration-500 ease-in-out group-hover:scale-105"
              src={`/images/webp/${item.img}.webp`}
              alt=""
            />
          </div>
        ))}
      </div>
      </FadeContent>
    </section>
  );
};

export default InternContacts;
