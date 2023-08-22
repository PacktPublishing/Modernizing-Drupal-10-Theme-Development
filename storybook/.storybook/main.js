const path = require("path");
module.exports = {
  stories: ["../stories/**/*.stories.js", "../stories/**/*.mdx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", '@storybook/addon-a11y'],
  framework: {
    name: "@storybook/html-webpack5",
    options: {}
  },
  staticDirs: ["../public"],
  webpackFinal: async (config, {
    configType
  }) => {
    config.module.rules.push({
      test: /\.twig$/,
      use: "twigjs-loader"
    });
    config.module.rules.push({
      test: /\.css$/i,
      use: "css-loader"
    });
    config.resolve.alias["@atoms"] = path.resolve(__dirname, "../stories/01-atoms");
    config.resolve.alias["@molecules"] = path.resolve(__dirname, "../stories/02-molecules");
    config.resolve.alias["@organisms"] = path.resolve(__dirname, "../stories/03-organisms");
    config.resolve.alias["@templates"] = path.resolve(__dirname, "../stories/04-templates");
    config.resolve.alias["@pages"] = path.resolve(__dirname, "../stories/05-pages");
    return config;
  },
  docs: {
    autodocs: "tag"
  }
};
