const {
  override,
} = require("customize-cra");

// TODO: add Antd design style overrides using the Less loader.

// Split vendor dependencies into a separate chuncked file.
const vendorsPlugin = (config, env) => {
  config.optimization = {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      minChunks: 3,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
        },
     },
   },
  };
  return config
}

module.exports = override(
  vendorsPlugin,
  ...addBabelPlugins(
    "babel-plugin-styled-components",
  ),
);
