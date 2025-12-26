import { initReactI18next } from "react-i18next";
import i18next from "i18next";
import uz from '../locale/uz';
import ru from '../locale/ru';
import en from '../locale/en';

i18next
    .use(initReactI18next)
    .init({
    resources: {
      en,
      ru,
      uz,
    },
    lng: "uz",
    fallbackLng: "uz",
    ns:["HeaderLang",
        "Intro",
        "Carousel", 
        "HomeMainCard", 
        "About",
        "InternContacts",
        "ScientificCouncil",
        "InstitutStructure",
        "InternalDocuments",
        "InstitutTeam",
        "EventsRanking",
        "Laboratories"
        ,
    ],
    defaultNS: "HeaderLang",
    interpolation: {
      escapeValue: false,
    },
  });
