module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(m?js)$/,
      type: "javascript/auto",
      resolve: {
        fullySpecified: false,
      },
    });
    config.module.rules.push({
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    });
    config.module.rules.push({
      test: /\.s[ac]ss$/i,
      use: ["style-loader", "css-loader", "sass-loader"],
    });
    config.module.rules.push({
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: "asset/resource",
    });
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: "asset/resource",
    });
    config.module.rules.push({
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
    });
    return config;
  },
};
