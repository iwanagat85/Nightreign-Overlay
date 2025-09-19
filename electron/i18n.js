const i18next = require('i18next');
const Backend = require('i18next-fs-backend');
const { app } = require('electron');

async function initI18n(defaultLang = 'en') {
  return i18next
    .use(Backend)
    .init({
      debug: true,
      lng: defaultLang,
      fallbackLng: 'en',
      preload: ['en', 'ja'],
      backend: {
        loadPath: `${app.getAppPath()}/locales/{{lng}}.json`
      }
    });
}

module.exports = { initI18n, i18next };
