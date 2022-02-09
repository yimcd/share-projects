const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PORT = process.env.PORT || 3000;

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/index.tsx",
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "/dist"),
  },
  resolve: {
    alias: {
      lib: path.resolve(__dirname, "..", "lib", "src"),
    },
    modules: ["node_modules"],
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
      },
      {
        test: /\.(webp|jpg|png|jpeg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      hash: true,
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, "public"),
    host: "localhost",
    port: PORT,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
};
