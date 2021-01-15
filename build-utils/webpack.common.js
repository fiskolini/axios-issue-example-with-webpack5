const path = require("path")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const Dotenv = require("dotenv-webpack")

const ROOT_DIR = path.resolve(__dirname, "..")

module.exports = {
  entry: [
    path.resolve(ROOT_DIR, "./src/index.js"),
    path.resolve(ROOT_DIR, "./src/styles/styles.scss")
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
          {
            loader: "eslint-loader",
            options: {
              configFile: path.resolve(ROOT_DIR, ".eslintrc")
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|ico|svg|woff|woff2|webp)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "static/[hash]-[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".scss"],
    fallback: {
      assert: false,
      http: false,
      https: false,
      zlib: false,
      tty: false,
      util: false,
      fs: false,
      net: false,
      stream: false
    }
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, "..", "./.env")
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Advanced React with Webpack Setup",
      template: path.resolve(__dirname, "..", "./src/index.ejs")
    })
  ],
  output: {
    path: path.resolve(__dirname, "..", "dist"),
    chunkFilename: '[name].[chunkhash:3].js',
    filename: "bundle.js",
    chunkLoading: false,
    wasmLoading: false
  }
}
