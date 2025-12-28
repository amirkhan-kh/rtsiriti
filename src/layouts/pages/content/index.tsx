import React from "react";
import { useParams } from "react-router-dom";
import { newsCards } from "../../../store/news";
import { students, teachersInstitute } from "../../../store/employess";
import { useTranslation } from "react-i18next";

const Content: React.FC = () => {
  const { type, id } = useParams();

  const getNamespaceByType = (type?: string) => {
    switch (type) {
      case "news":
        return "Carousel";
      case "conferences":
        return "Carousel";
      case "students":
        return "Students";
      case "teachers":
        return "Teachers";
      default:
        return "Common";
    }
  };
  const namespace = getNamespaceByType(type);
  const { t } = useTranslation(namespace);

  let selectedArray: any[] = [];
  const numericId = Number(id);

  switch (type) {
    case "news":
      selectedArray = newsCards;
      break;

    case "conferences":
      selectedArray = newsCards;
      break;

    case "teachers":
      selectedArray = teachersInstitute;
      break;
    case "students":
      selectedArray = students;
      break;

    default:
      selectedArray = [];
  }

  const selectedItem = selectedArray.find((item) => item.id === numericId);

  if (!selectedItem) {
    return (
      <div
        className="group relative bg-white dark:bg-black border border-[#f0f0f0]
              overflow-hidden hover:shadow-md transition-all duration-300 
               h-full flex flex-col rounded-[3px] dark:border-[#7c96ff] gridCard"
      >
        Card Topilmadi
      </div>
    );
  }
  return (
    <section>
      <div>
        <h2 className="text-center text-2xl p-6 dark:text-white">
          {t(selectedItem.title)}
        </h2>
        <div className="bg-[#f0f0f0] py-6 dark:bg-black">
          <div className="container mx-auto p-4">
            <div className="flex justify-center px-0 sm:px-4 md:px-40 gap-6">
              <div className="group relative bg-white dark:bg-black border border-[#f0f0f0] overflow-hidden hover:shadow-md transition-all duration-300    h-full flex flex-col rounded-[3px] dark:border-[#7c96ff]">
                <div className="relative overflow-hidden  from-[#f0f0f0] to-white">
                  <img
                    src={`/images/optimized/${selectedItem.img}.avif`}
                    alt={t(selectedItem.title)}
                    className="w-full object-center transition-transform duration-500 
                    group-hover:scale-102"
                    loading="lazy"
                  />

                  <div
                    className="absolute top-0 right-0 w-12 h-12 bg-[#4c75f6] 
                    transform translate-x-6 -translate-y-6 rotate-45"
                  />
                </div>

                <div className="flex-1 p-5 flex flex-col">
                  <h3
                    className="font-medium text-gray-800 mb-3 line-clamp-2 leading-snug
                    group-hover:text-[#4c75f6] transition-colors duration-300 dark:text-white"
                  >
                    {t(selectedItem.description)}
                  </h3>

                  <div className="mt-auto">
                    <div className="flex items-center justify-between pt-4 border-t border-[#f0f0f0]">
                      <span className="text-xs text-gray-500 font-medium group-hover:text-[#4c75f6] ">
                        {t(selectedItem.date)}
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute inset-0 border-2 border-transparent 
                  transition-all duration-300 pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
