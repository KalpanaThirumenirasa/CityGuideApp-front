// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./en/translation.json";
import translationDE from "./de/translation.json";
import translationTA from "./ta/translation.json";
import LanguageDetector from "i18next-browser-languagedetector";


const resources = {
  en: {
    translation: translationEN,
  },
  de: {
    translation: translationDE,
  },
  ta: {
    translation: translationTA,
  },
  
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    lng: "en", 
    debug:true,
    fallbackLng: "en", 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
