import React from 'react'
import { useTranslation } from 'react-i18next';
import FadeContent from '../../../../components/FadeContent';
import { teachersInstitute } from '../../../../store/employess';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
const Teachers :React.FC = () => {
    const { t } = useTranslation("Teachers");
    const navigate = useNavigate();
  return (
    <section>
      <h2 className="text-2xl text-center px-6 py-6 dark:text-white">{t("title")}</h2>

      <div className="bg-[#4c75f6] dark:bg-[#7c96ff] w-full py-10 border-b-2 border-white">
        <div className="container px-4 mx-auto">
          <FadeContent blur={true} duration={2000} easing="ease-out" initialOpacity={0}>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-20 gap-y-6 py-8">
            {teachersInstitute.map((item, i) => (
              <div
              key={i}
              onClick={() => navigate(`/single/teachers/${item.id}`)}
              className="flex flex-col h-full relative group  overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 rounded-[3px]">
                <img
                  className="transition-transform duration-500 ease-in-out group-hover:scale-105"
                  src={`/public/images/webp/${item.img}.webp`}
                  alt=""
                  />
                <div className="p-4 text-[12px] md:text-[14px] font-semibold text-white flex flex-col gap-3 justify-between">
                  <p className="font-semibold">{t(item.title)}</p>
                  <div className="flex justify-between items-center">
                  <p>{t(item.date)}</p>
                    <NavLink className={"border border-white rounded-full p-2"} to={"#"}><FaArrowRightLong /></NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </FadeContent>
        </div>
      </div>
    </section>
  )
}

export default Teachers
