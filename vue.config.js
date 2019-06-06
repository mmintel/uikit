module.exports = {
  css: {
    extract: false,
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        './assets/styles/abstracts/*',
      ]
    },
    storybook: {
      allowedPlugins: [
        'style-resources-loader',
      ]
    }
  }
}