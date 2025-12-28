import React from "react";
import "./_style.scss";
import { useTranslation } from "react-i18next";
import { students } from "../../../../store/employess";
import { NavLink, useNavigate } from "react-router-dom";
import FadeContent from "../../../../components/FadeContent";
const Students: React.FC = () => {
  const { t } = useTranslation("Students");
      const navigate = useNavigate();

  return (
    <section className="container mx-auto px-4 py-8">
      <FadeContent blur={true} duration={2000} initialOpacity={0}>
        <h1 className="text-2xl text-center px-6 dark:text-white">
          {t("title")}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-6 gap-6">
          {students.map((item, i) => (
            <div
              key={i}
              onClick={() => navigate(`/single/students/${item.id}`)}
              className="flex flex-col h-full relative group  overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 rounded-[3px]"
            >
              <div className="flex-1 overflow-hidden relative">
                <img
                  src={`/images/optimized/${item.img}.avif`}
                  alt={t(item.title)}
                  className="w-full h-80 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="bg-white h-30 py-4 px-4 flex flex-col justify-between">
                <h3 className="font-semibold text-sm md:text-base line-clamp-2 group-hover:text-[#4c75f6] transition-colors duration-300">
                  {t(item.description)}
                </h3>
                <div className="flex items-end justify-between mt-2">
                  <p className="text-xs text-gray-500 group-hover:text-[#4c75f6]">
                    {" "}
                    {t(item.date)}
                  </p>
                  <NavLink
                    to="/news"
                    className="text-xs text-[#4c75f6] hover:text-[#3a5bc4] transition-colors duration-300 font-medium"
                  >
                    {t("btn")}
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </FadeContent>
    </section>
  );
};

export default Students;
