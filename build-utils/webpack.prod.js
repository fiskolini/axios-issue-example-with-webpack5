const path = require("path")
const webpack = require("webpack")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const PurgeCSSPlugin = require('purgecss-webpack-plugin')
const glob = require('glob')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const ROOT_DIR = path.resolve(__dirname, "..")

module.exports = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: true
            }
          },
          'postcss-loader',
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: [
                  path.resolve(ROOT_DIR, "node_modules"),
                  path.resolve(ROOT_DIR, "src/styles/")
                ]
              }
            }
          }
        ],
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      ENV: "production"
    }),
    new MiniCssExtractPlugin({
      filename: "static/[name]-[contenthash].css",
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(`${ROOT_DIR}/**/*`, {nodir: true}),
    }),
  ],
  stats: {
    modules: true,
    hash: true,
    assetsSort: "!size",
    children: true
  },
  output: {
    path: path.resolve(__dirname, "..", "dist"),
    chunkFilename: 'static/[name].[hash].js',
    filename: "static/[name].[hash].js",
    chunkLoading: false,
    wasmLoading: false
  },
  optimization: {
    minimize: true,
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
      /*new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
        parallel: true,
      })*/
      new TerserPlugin({
        terserOptions: {
          ecma: 8,
          compress: {
            warnings: false
          },
          output: {
            comments: false,
            beautify: false
          }
        }
      })
    ],
  },
}
