const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.js", // Adjust this path as needed
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/", // Needed for React Router's client-side routing
  },
  devtool: "source-map", // Enable source maps for easier debugging
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Handle .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
              require.resolve("react-refresh/babel"), // React Fast Refresh plugin
              "@babel/plugin-proposal-nullish-coalescing-operator",
              "@babel/plugin-proposal-optional-chaining",
            ],
          },
        },
      },
      {
        test: /\.css$/, // CSS handling
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/, // Asset handling (images)
        type: "asset/resource", // Emits files to output folder
      },
      {
        enforce: "pre", // Load source maps before other loaders
        test: /\.js$/,
        use: ["source-map-loader"],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // HMR for React components
    new ReactRefreshWebpackPlugin(), // React Fast Refresh for instant updates
  ],
  devServer: {
    static: path.join(__dirname, "public"), // Serve static files from "public"
    compress: true, // Enable gzip compression for performance
    port: 3000, // Development server port
    hot: true, // Enable Hot Module Replacement
    historyApiFallback: true, // Handle React Router routes
    open: true, // Automatically open the browser
  },
  resolve: {
    extensions: [".js", ".jsx"], // Resolve both JS and JSX files
  },
};
