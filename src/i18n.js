// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend) // Carrega os arquivos de tradução
  .use(LanguageDetector) // Detecta o idioma do navegador
  .use(initReactI18next) // Integração com o React
  .init({
    fallbackLng: "pt-br", // Idioma padrão caso o idioma detectado não esteja disponível
    debug: true, // Ativa logs no console durante o desenvolvimento
    interpolation: {
      escapeValue: false, // O React já lida com a sanitização de valores, então desativamos aqui
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Caminho para os arquivos de tradução
    },
  });

export default i18n;
