const i18next = require('i18next');
const Backend = require('i18next-fs-backend');
const LanguageDetector = require('i18next-electron-language-detector');
const { app } = require('electron');

async function initI18n() {
  return i18next
    .use(Backend)
    .use(LanguageDetector)
    .init({
      debug: true,
      fallbackLng: 'en',
      preload: ['en', 'ja'],
      backend: {
        loadPath: `${app.getAppPath()}/locales/{{lng}}.json`
      }
    });
}

module.exports = { initI18n, i18next };
