import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // fallbackLng: "en",
    // lng: "en",
    // debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;

// import i18n from "i18next";

// i18n.init({
//   lng: "en",

//   debug: true,

//   resources: {
//     en: {
//       translation: {
//         hello_world: "hello world",
//       },
//     },

//     ru: {
//       translation: {
//         hello_world: "hello welt",
//       },
//     },
//   },
// });

// export default i18n;
