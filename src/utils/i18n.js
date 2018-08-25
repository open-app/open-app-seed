import { Platform } from 'react-native';
import i18n from 'i18next'
import { reactI18nextModule } from 'react-i18next'
// import RNLanguages from 'react-native-languages'
import detectBrowserLanguage from 'detect-browser-language';

const lang = () => Platform.select({
  dom: detectBrowserLanguage(),
  // android: RNLanguages.language.substring(0, 2)
});

// creating a language detection plugin using expo
// http://i18next.com/docs/ownplugin/#languagedetector
const languageDetector = {
  type: 'languageDetector',
  async: true, // flags below detection to be async
  detect: (callback) => { return lang() },
  init: () => {},
  cacheUserLanguage: () => {}
}


i18n
  // .use(languageDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        home: require('../locales/en/home.json'),
        details: require('../locales/en/details.json'),
      },
      pt: {
        home: require('../locales/pt/home.json'),
        details: require('../locales/pt/details.json'),
      }
    },
    ns: ['home', 'page2', 'common'],
    defaultNS: 'common',
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it does escape per default to prevent xss!
    }
  })


export default i18n