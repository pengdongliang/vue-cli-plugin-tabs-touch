
const updateI18n = require('./i18n')

module.exports = (api, opts) => {
  api.extendPackage({
    dependencies: {
      'tabs-touch': '^0.1.0'
    }
  })


  api.postProcessFiles(files => {

    // update i18n.js
    if (opts.vuei18nLocales) {
      updateI18n(api, opts, files)
    }
  })
}
