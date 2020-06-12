const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const port = process.env.PORT || 3000;
var path = require("path");

module.exports = {
  context: __dirname,
  devtool: "sourcemaps",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../src/main/resources/static/"),
    filename: "bundle.[hash].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: path.resolve(__dirname, "node_modules"),
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/flow",
            ],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.html$/,
        use: [{ loader: "html-loader", options: { minimize: true } }],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|png)$/,
        exclude: /node_modules/,
        loader: "file-loader",
        options: {
          limit: 1024,
          name: "[name].[ext]",
          publicPath: "/styles/",
          outputPath: "/styles/",
        },
      },
    ],
  },
  devtool: "inline-source-map",
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      path: path.resolve(__dirname, "../src/main/resources/static/"),
      filename: "./index.html",
      //favicon: "public/favicon.ico",
    }),
    new MiniCssExtractPlugin({
      path: path.resolve(__dirname, "../src/main/resources/static/"),
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  devServer: {
    host: "localhost",
    port: port,
    historyApiFallback: true,
    open: true,
  },
};
