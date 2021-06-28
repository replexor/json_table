const path = require('path');

module.exports = {
  webpack: (config) => {
    if (process.env.OLD_BROWSER) {
      config.entry = ['babel-polyfill', 'isomorphic-fetch', './src/index.tsx'];
    }
    config.resolve = {
      ...config.resolve,
      alias: {
        '@controllers': path.resolve(__dirname, 'src/controllers'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@containers': path.resolve(__dirname, 'src/containers'),
        '@actions': path.resolve(__dirname, 'src/actions'),
        '@reducers': path.resolve(__dirname, 'src/reducers'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@store': path.resolve(__dirname, 'src/store'),
      },
    };

    return config;
  },
};
