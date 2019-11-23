// === Production specific plugins
// TerserPlugin
// ExtractTextPlugin
// [hash] / [chunkhash]
// AggressiveSplittingPlugin
// AggressiveMergingPlugin
// ModuleConcatenationPlugin
//
const merge = require("webpack-merge");
const common = require("./webpack.prod");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  // SplitChunksPlugin
  /* optimization: {
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: "vendors",
        chunks: "all"
      },
    },
    splitChunks: {
      chunks: "all"
    }
  } */
  pathinfo: false,
  entry: {
    index: "./src/index.js"
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    moduleIds: "hashed",
    runtimeChunk: "single",
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: "vendors",
        chunks: "all"
      }
    }
  }
});
