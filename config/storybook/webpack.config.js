const path = require("path");
const rootPath = path.resolve(__dirname, '../../');

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
    loader: 'url-loader'
  });

  config.module.rules.push({
    test: /\.scss$/,
    loaders: [
      'style-loader',
      'css-loader',
      'sass-loader',
      {
        loader: 'style-resources-loader',
        options: {
          patterns: [
            'assets/styles/abstracts/**/*.scss',
            'assets/styles/globals/config.scss',
            'assets/styles/globals/reset.scss',
            'assets/styles/globals/helpers.scss',
          ]
        },
      },
    ],
    include: path.resolve(rootPath, 'src'),
  });

  config.module.rules.push({
    test: /\.ts$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true
        },
      }
    ],
  });

  config.resolve.extensions.push('.vue', '.ts', '.tsx', '.sass', '.scss');

  config.resolve.alias = {
    ...config.resolve.alias,
    '~': rootPath,
    '@': rootPath,
  }

  return config;
};