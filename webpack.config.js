const HtmlWebpackPlugin = require("html-webpack-plugin");

// const prod = process.env.NODE_ENV === "production";
const webpack = require("webpack");
const path = require("path");

module.exports = (_, argv) => {
  const isDevMode = argv.mode === "development";
  return {
    mode: !isDevMode ? "production" : "development",
    devtool: isDevMode ? "hidden-source-map" : "eval",
    entry: "./src/index.tsx",
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: ["babel-loader", "ts-loader"],
        },
      ],
    },
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "bundle.js",
      publicPath: "/"
    },
    plugins: [
      new webpack.ProvidePlugin({
        React: "react",
      }),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "./index.html",
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
    devtool: "inline-source-map",
    devServer: {
      port: 3000,
      hot: true,
      compress: true,
      host: "localhost",
      historyApiFallback: {
        rewrites: [
          {
            from: /(\w+|\/+)/,
            to: "/index.html",
          },
        ],
      },
    },
  };
};
