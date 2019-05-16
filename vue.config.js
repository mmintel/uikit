module.exports = {
  css: {
    extract: false,
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        './assets/styles/abstracts/*',
        './assets/styles/globals/reset',
        './assets/styles/globals/config',
        './assets/styles/globals/helpers',
      ]
    }
  }
}