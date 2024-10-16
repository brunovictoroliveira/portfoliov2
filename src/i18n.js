import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json";
import ptTranslation from "./locales/pt.json";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next) // Integração com o React
  .init({
    lng: "pt-BR", // Definir linguagem inicial
    fallbacklng: "en", // Definir um idioma de fallback
    resources: {
      en: {
        translation: enTranslation,
      },
      pt: {
        translation: ptTranslation,
      },
    },
    interpolation: {
      scapeValue: false, // Evitar a necessidade de escapar essa sequência em traduções
    },
  });

export default i18n;
