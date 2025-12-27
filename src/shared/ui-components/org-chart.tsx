import React from "react";
import { useTranslation } from "react-i18next";

const BasicDoc: React.FC = () => {
  const { t } = useTranslation("InstitutStructure");

  const structure = {
    title: t("title"),
    sections: [
      {
        title: t("ik"),
        items: [t("do"), t("d"), t("yok")]
      },
      {
        title: t("d"),
        subsections: [
          {
            title: t("dibo"),
            items: [
              t("btl"), t("ttol"), t("ttqil"), t("simol"), 
              t("idtql"), t("mtml"), t("ttbrll"), t("atbil")
            ]
          },
          {
            title: t("dichbo"),
            items: [t("dmichb"), t("dmso"), t("dmjqb"), t("akt")]
          },
          {
            title: t("mk"),
            items: [t("bi"), t("ptb"), t("dm"), t("ijt")]
          }
        ]
      },
      {
        title:  t("mk"),
        items: [
          t("mk"), t("ilk"), t("byk"), t("b"), 
          t("xbib"), t("mibm"), t("xab")
        ]
      }
    ]
  };

  return (
    <div className="institut-structure py-10">
      <div className="flex justify-center">
        <div className="border-l-4 gradient-border pl-8 space-y-12">
          {structure.sections.map((section, index) => (
            <div key={index} className="relative">
              
              <div className="bg-blue-100 p-4  mb-4 rounded-[2px]">
                <h2 className="text-xl font-semibold text-[#4c75f6]">{section.title}</h2>
              </div>
              
              {section.subsections ? (
                <div className="ml-8 space-y-8">
                  {section.subsections.map((subsection, subIndex) => (
                    <div key={subIndex} className="relative">
                      <div className="mb-2 p-2 shadow-sm hover:transition-transform duration-500 ease-in-out hover:shadow-sm shadow-[#4c75f6] group rounded-[2px]">
                        <h3 className="font-medium text-[#4c75f6]">{subsection.title}</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ml-4">
                        {subsection.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="p-2 shadow-sm hover:transition-transform duration-500 ease-in-out hover:shadow-sm shadow-[#4c75f6] group rounded-[2px] dark:text-white">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ml-4">
                  {section.items?.map((item, itemIndex) => (
                    <div key={itemIndex} className="p-3 bg-gray-50  shadow-sm hover:transition-transform duration-500 ease-in-out hover:shadow-sm shadow-[#4c75f6] group rounded-[2px]">
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BasicDoc;