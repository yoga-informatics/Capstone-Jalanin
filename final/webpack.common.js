// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CopyWebpackPlugin = require("copy-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

// module.exports = {
//   entry: {
//     home: [
//       path.resolve(__dirname, "src/scripts/home.js"),
//       path.resolve(__dirname, "src/styles/home.css"),
//     ],
//     informasi: [
//       path.resolve(__dirname, "src/scripts/informasi.js"),
//       path.resolve(__dirname, "src/styles/informasi.css"),
//     ],
//     detail: [
//       path.resolve(__dirname, "src/scripts/detail.js"),
//       path.resolve(__dirname, "src/styles/detail.css"),
//     ],
//   },
//   output: {
//     filename: "[name].js",
//     path: path.resolve(__dirname, "dist"),
//     clean: true,
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: [
//           MiniCssExtractPlugin.loader, // Extracts CSS into separate files
//           "css-loader", // Turns CSS into CommonJS
//         ],
//       },
//     ],
//   },
//   plugins: [
//     new CleanWebpackPlugin(),
//     new MiniCssExtractPlugin({
//       filename: "home.css",
//       filename: "informasi.css",
//       filename: "info1.css", // Output separate CSS bundle for each entry
//     }),
//     new HtmlWebpackPlugin({
//       filename: "index.html",
//       template: path.resolve(__dirname, "src/templates/index.html"),
//       chunks: ["index"], // Includes only the index bundle
//     }),
//     new HtmlWebpackPlugin({
//       filename: "favorites.html",
//       template: path.resolve(__dirname, "src/templates/favorites.html"),
//       chunks: ["favorites"], // Includes only the favorites bundle
//     }),
//     new HtmlWebpackPlugin({
//       filename: "detail.html",
//       template: path.resolve(__dirname, "src/templates/detail.html"),
//       chunks: ["detail"], // Includes only the detail bundle
//     }),
//     new CopyWebpackPlugin({
//       patterns: [
//         {
//           from: path.resolve(__dirname, "src/public/"),
//           to: path.resolve(__dirname, "dist/"),
//         },
//         {
//           from: path.resolve(__dirname, "src/service-worker.js"),
//           to: path.resolve(__dirname, "dist/service-worker.js"),
//         },
//       ],
//     }),
//     new WorkboxWebpackPlugin.GenerateSW({
//       swDest: "./sw.bundle.js",
//       runtimeCaching: [
//         {
//           // eslint-disable-next-line prefer-regex-literals
//           urlPattern: new RegExp("^https://restaurant-api.dicoding.dev/"),
//           handler: "StaleWhileRevalidate",
//           options: {
//             cacheName: "version-1",
//             cacheableResponse: {
//               statuses: [200],
//             },
//           },
//         },
//       ],
//     }),
//   ],
// };
