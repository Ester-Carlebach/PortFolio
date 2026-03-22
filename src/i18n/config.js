import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enNavigation from './locales/en/navigation.json';
import enHero from './locales/en/hero.json';
import enAbout from './locales/en/about.json';
import enExperience from './locales/en/experience.json';
import enSkills from './locales/en/skills.json';
import enContact from './locales/en/contact.json';
import enShowcase from './locales/en/showcase.json';
import enCommon from './locales/en/common.json';

import heNavigation from './locales/he/navigation.json';
import heHero from './locales/he/hero.json';
import heAbout from './locales/he/about.json';
import heExperience from './locales/he/experience.json';
import heSkills from './locales/he/skills.json';
import heContact from './locales/he/contact.json';
import heShowcase from './locales/he/showcase.json';
import heCommon from './locales/he/common.json';

const getLanguageFromURL = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
  if (urlLang && ['en', 'he'].includes(urlLang)) {
    return urlLang;
  }
  return 'en';
};

const updateDirection = (lang) => {
  document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
};

const initialLanguage = getLanguageFromURL();
updateDirection(initialLanguage);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        navigation: enNavigation,
        hero: enHero,
        about: enAbout,
        experience: enExperience,
        skills: enSkills,
        contact: enContact,
        showcase: enShowcase,
        common: enCommon,
      },
      he: {
        navigation: heNavigation,
        hero: heHero,
        about: heAbout,
        experience: heExperience,
        skills: heSkills,
        contact: heContact,
        showcase: heShowcase,
        common: heCommon,
      },
    },
    lng: initialLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['querystring'],
      lookupQuerystring: 'lang',
    },
  });

i18n.on('languageChanged', (lang) => {
  updateDirection(lang);
});

export default i18n;
