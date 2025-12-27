import React from "react";
import { useTranslation } from "react-i18next";
import {  DialogDemoDoc } from "../../../../shared/ui-components/modal-documents";
import {  documentsPdfDoct } from "../../../../store/documents";

const Doctarate: React.FC = () => {
  const { t } = useTranslation("Doctoral");
 

  return (
    <section className="container mx-auto px-4">
      <h2 className="text-center text-2xl p-6 dark:text-white">{t("title")}</h2>
      
      <div className="">
        {documentsPdfDoct.map((doc) => (
          <div key={doc.id} className="space-y-2">
            {/* Document row with justify-between */}
            <div className="flex items-center justify-between w-full border-b border-[#4c75f6] py-3 px-2 ">
              <span className="font-medium text-gray-800 dark:text-white">{t(doc.title)}</span>
              
              <div className="flex items-center gap-3">
               
                
                <DialogDemoDoc documentId={doc.id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Doctarate;