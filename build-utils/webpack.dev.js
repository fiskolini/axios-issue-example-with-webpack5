const path = require("path")
const webpack = require("webpack")
const BrowserSyncPlugin = require("browser-sync-webpack-plugin")
const historyApiFallback = require("connect-history-api-fallback")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const ROOT_DIR = path.resolve(__dirname, "..")

module.exports = {
  mode: "development",
  output: {
    path: path.join(__dirname, "src"),
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
            options: {
              sourceMap: true
              //importLoaders: true
            }
          },
          // Compiles Sass to CSS
          {
            loader: "sass-loader",
            options: {
              webpackImporter: false,
              sassOptions: {
                includePaths: [
                  path.resolve(ROOT_DIR, "node_modules"),
                  path.resolve(ROOT_DIR, "src/styles/")
                ]
              },
              sourceMap: true
            }
          },
          "postcss-loader"
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin({
      ENV: "development"
    }),
    // Extract any CSS from any javascript file to process it as LESS/SASS using a loader
    new MiniCssExtractPlugin({
      filename: "static/[name].bundle.css"
    }),
    new BrowserSyncPlugin(
      // BrowserSync options
      {
        // ./public directory is being served
        host: "localhost",
        port: 3000,
        proxy: "http://localhost:8080/",
        middleware: [
          historyApiFallback(
            {
              disableDotRule: true,
              htmlAcceptHeaders: ["text/html", "application/xhtml+xml"]
            }
          )
        ],
        // no need to watch '*.js' here, webpack will take care of it for us,
        // including full page reloads if HMR won't work
        files: [
          "src/*.html",
          "src/styles/**.scss"
        ]
      },
      // Plugin Options
      {
        // prevent BrowserSync from reloading the page
        // and let Webpack Dev Server take care of this
        reload: true
      }
    )
  ],
  devtool: "eval-source-map",
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    inline: true,
    hot: true
  }
}
