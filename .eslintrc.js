module.exports = {
  extends: "@kobakazu0429/eslint-config-typescript",
  settings: {
    "import/resolver": {
      webpack: {
        config: "config/webpack.config.common.js",
      },
    },
  },
};
