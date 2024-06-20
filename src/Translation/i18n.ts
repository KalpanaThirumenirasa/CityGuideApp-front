// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./en/translation.json";
import translationDE from "./de/translation.json";
import LanguageDetector from "i18next-browser-languagedetector";
import { debug } from "console";
// Import other translations as needed

const resources = {
  en: {
    translation: translationEN,
  },
  de: {
    translation: translationDE,
  },
  // Add other languages here
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    lng: "en", // default language
    debug:true,
    fallbackLng: "en", // fallback language in case selected language file is missing
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
