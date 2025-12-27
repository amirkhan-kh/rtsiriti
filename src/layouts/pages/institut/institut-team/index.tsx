import React from "react";
import "./_style.scss";
import { useTranslation } from "react-i18next";
import { employeesAll } from "../../../../store/employess";
import { IoIosCall } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import FadeContent from "../../../../components/FadeContent";
const InstitutTeam: React.FC = () => {
  const { t } = useTranslation("InstitutTeam");
  return (
    <section>
      <h2 className="text-2xl text-center px-6 py-6 dark:text-white">{t("title")}</h2>

      <div className="bg-[#4c75f6] w-full py-10 mb-20 dark:bg-[#7c96ff]">
        <div className="container px-4 mx-auto">
          <FadeContent blur={true} duration={2000} easing="ease-out" initialOpacity={0}>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-6 py-8">
            {employeesAll.map((item, i) => (
              <div
              key={i}
  className=" hover:bg-white/5 backdrop-blur-sm flex flex-row sm:flex-col md:flex-row h-40 sm:h-100 md:h-40  shadow shadow-white rounded-[3px] overflow-hidden group"              >
                <img
                  className="transition-transform duration-500 ease-in-out group-hover:scale-105"
                  src={`/public/images/webp/${item.emLevel}.webp`}
                  alt=""
                  />
                <div className="p-4 text-[12px] md:text-[14px] font-semibold text-white flex flex-col gap-3 justify-center">
                  <p className="font-semibold">{t(item.img)}</p>
                  <p>{t(item.emName)}</p>
                  <div className="flex items-center gap-2">
                    <IoIosCall size={20} color={"#fff"} />
                    <FaLinkedin size={20} color={"#fff"} />
                    <MdEmail size={25} color={"#fff"} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          </FadeContent>
        </div>
      </div>
    </section>
  );
};

export default InstitutTeam;
