/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const GasPlugin = require("gas-webpack-plugin");
const es3ifyPlugin = require("es3ify-webpack-plugin");

module.exports = /** @type {import('webpack').Configuration} */ ({
  mode: "development",
  entry: "./src/index.ts",
  devtool: false,
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          // 下から順に処理される
          { loader: "babel-loader" },
          { loader: "ts-loader" },
        ],
      },
    ],
  },
  resolve: { extensions: [".ts"] },
  plugins: [new GasPlugin(), new es3ifyPlugin()],
});
