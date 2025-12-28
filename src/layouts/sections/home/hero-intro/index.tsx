import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { newsCards } from "../../../../store/news";
import { NavLink, useNavigate } from "react-router-dom";

const HeroIntro: React.FC = () => {
  const { t } = useTranslation("Carousel");
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentSlide((prev) =>
          prev === newsCards.length - 1 ? 0 : prev + 1
        );
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const totalItems = newsCards.length;
  const animationDuration = totalItems * 6; 

  return (
    <section className="py-6 container mx-auto px-4">
      <h2 className="text-lg font-semibold text-[#4C75F6]">{t("title")}</h2>

      <div className="py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-x-6 items-stretch min-h-[400px]">
          {newsCards.slice(9, 10).map((item) => (
            <div
              key={item.id}
                onClick={() => navigate(`/single/news/${item.id}`)}
              className="flex flex-col h-full relative group  overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 "
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
                  <a 
                    href={`#`}
                    className="text-xs text-[#4c75f6] hover:text-[#3a5bc4] transition-colors duration-300 font-medium"
                  >
                    {t("btn")}
                  </a>
                </div>
              </div>
            </div>
          ))}

          {newsCards.slice(6, 7).map((item, i) => (
            <div
              key={i}
               onClick={() => navigate(`/single/news/${item.id}`)}
              className="flex flex-col h-full relative group  overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
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

          <div className="hidden md:block h-full">
            <div className="h-full relative bg-[#4c75f6] dark:bg-[#7C96FF] overflow-hidden shadow-lg">
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-[#4c75f6] to-transparent z-10 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#4c75f6] to-transparent z-10 pointer-events-none"></div>

              <div
                ref={containerRef}
                className="h-full overflow-hidden relative"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div
                  ref={contentRef}
                  className="absolute top-0 left-0 right-0 p-2 space-y-4"
                  style={{
                    animation: `scrollUp ${animationDuration}s linear infinite`,
                    animationPlayState: isPaused ? 'paused' : 'running',
                  }}
                >
                  {newsCards.map((item, index) => (
                    <div
                      key={`original-${index}`}
                      className={`p-4 rounded-lg transition-all duration-300 ${
                        index === currentSlide 
                          ? "bg-white/20 shadow-md" 
                          : "bg-white/10 hover:bg-white/15"
                      } cursor-pointer`}
                      onClick={() => setCurrentSlide(index)}
                    >
                      <div className="flex gap-4">
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-medium text-sm line-clamp-2">
                            {t(item.title)}
                          </h4>
                          <p className="text-white/80 text-xs mt-2">
                            {t(item.date)}
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <img
                            src={`/images/optimized/${item.img}.avif`}
                            alt={t(item.title)}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  ))}

                  {newsCards.map((item, index) => (
                    <div
                      key={`duplicate-${index}`}
                      className={`p-4 rounded-lg transition-all duration-300 ${
                        index === currentSlide 
                          ? "bg-white/20 shadow-md" 
                          : "bg-white/10 hover:bg-white/15"
                      } cursor-pointer`}
                      onClick={() => setCurrentSlide(index)}
                    >
                      <div className="flex gap-4">
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-medium text-sm line-clamp-2">
                            {t(item.title)}
                          </h4>
                          <p className="text-white/80 text-xs mt-2">
                            {t(item.date)}
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <img
                            src={`/images/optimized/${item.img}.avif`}
                            alt={t(item.title)}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-end py-4">
          <NavLink 
            className="text-sm text-[#4c75f6] hover:text-[#3a5bc4] transition-colors duration-300 font-medium"
            to="/news"
          >
            {t("more")}
          </NavLink>
        </div>
      </div>

      <style>{`
        @keyframes scrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      `}</style>
    </section>
  );
};

export default HeroIntro;