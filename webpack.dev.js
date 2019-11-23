const merge = require("webpack-merge");
const common = require("./webpack.dev");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true
  },
  module: {
    rules: [
           {
        test: /\.css$/,
        use: [
          // style loader
          {loader: "style-loader"},
          // css loader
          {
            loader: "css-loader",
            modules: true
          },
          // cass loader
          {loader: "sass-loader"}
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.(png|svg|jpeg|jpg|gif)$/,
        use: [
          "file-loader"
        ]
      },
      {
        test: /\.(woff|ttf|eot|woff2|otf)$/,
        use: [
          "file-loader"
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          "csv-loader"
        ]
      },
      {
        test: /\.xml$/,
        use: [
          "xml-loader"
        ]
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              experimentalWatchApi: true
            }
          }
        ]
      },
      {
        test: require.resolve("index.js"),
        use: "imports-loader?this=>window"
      }

    ]
  }
});
