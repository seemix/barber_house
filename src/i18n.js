// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
// import Backend from 'i18next-http-backend';
//
// i18n
//     // detect user language
//     // learn more: https://github.com/i18next/i18next-browser-languageDetector
//     .use(LanguageDetector)
//     // pass the i18n instance to react-i18next.
//     .use(initReactI18next)
//     .use(Backend)
//     // init i18next
//     // for all options read: https://www.i18next.com/overview/configuration-options
//     .init({
//         debug: true,
//        // fallbackLng: 'dk',
//         interpolation: {
//             escapeValue: false, // not needed for react as it escapes by default
//         }
//     });
//
// export default i18n;

import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
    .use(Backend)
    .use(LanguageDetector).use(initReactI18next).init({
    // fallbackLng: 'dk',
    debug: true,
    // detection: {
    //     order: ['queryString', 'cookie'],
    //     cache: ['cookie']
    // },
    interpolation: {
        escapeValue: false
    },

})

export default i18n