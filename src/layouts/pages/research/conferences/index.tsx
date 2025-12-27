import React from 'react'
import './_style.scss'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';
import { newsCards } from '../../../../store/news';
const Conferences :React.FC = () => {
  const {t} = useTranslation("Carousel")
  return (
    <section className='container mx-auto px-4 py-10'>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-x-6 items-stretch min-h-[400px]">
        {newsCards.slice(13, 15).map((item, i) => (
            <div
              key={i}
              className="flex flex-col h-full relative group  overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 rounded-[2px]"
            >
              <div className="flex-1 overflow-hidden relative">
                <img
                  src={`/images/optimized/${item.img}.avif`}
                  alt={t(item.title)}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="bg-white h-20 py-4 px-4 flex flex-col justify-between">
                <h3 className="font-semibold text-sm md:text-base line-clamp-2 group-hover:text-gray-500 transition-colors duration-300">
                  {t(item.title)}
                </h3>
                <div className="flex items-end justify-between mt-2">
                  <p className="text-xs text-gray-500"> {t(item.date)}</p>
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
    </section>
  )
}

export default Conferences
