import i18n from "i18next";
import backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const userLanguage = navigator.language || navigator.userLanguage;

localStorage.setItem("userLanguage", userLanguage);

i18n
  .use(backend)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: userLanguage.split("-")[0],
  });
