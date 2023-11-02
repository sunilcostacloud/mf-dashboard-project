const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = (_, argv) => ({
  output: {
    publicPath:
      argv.mode === "development"
        ? "http://localhost:8080/"
        : "http://host-microfrontend.apps.ocp4.pacosta.com/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8080,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images', // This is the directory where your images will be output
            },
          },
        ],
      },
      // Rule for processing HTML files
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        auth:
          argv.mode === "development"
            ? "auth@http://localhost:8087/remoteEntry.js"
            : "auth@http://auth-microfrontend.apps.ocp4.pacosta.com/remoteEntry.js",

        sidemenu:
          argv.mode === "development"
            ? "sidemenu@http://localhost:8082/remoteEntry.js"
            : "sidemenu@http://sidemenu-microfrontend.apps.ocp4.pacosta.com/remoteEntry.js",

        header:
          argv.mode === "development"
            ? "header@http://localhost:8081/remoteEntry.js"
            : "header@http://header-microfrontend.apps.ocp4.pacosta.com/remoteEntry.js",

        home:
          argv.mode === "development"
            ? "home@http://localhost:8083/remoteEntry.js"
            : "home@http://home-microfrontend.apps.ocp4.pacosta.com/remoteEntry.js",

        admin:
          argv.mode === "development"
            ? 'admin@http://localhost:8084/remoteEntry.js'
            : 'admin@http://admin-microfrontend.apps.ocp4.pacosta.com/remoteEntry.js',

        creator:
          argv.mode === "development"
            ? 'creator@http://localhost:8085/remoteEntry.js'
            : 'creator@http://creator-microfrontend.apps.ocp4.pacosta.com/remoteEntry.js',

        user:
          argv.mode === "development"
            ? 'user@http://localhost:8086/remoteEntry.js'
            : 'user@http://user-microfrontend.apps.ocp4.pacosta.com/remoteEntry.js',
      },
      exposes: {
        './PageNotFound': './src/components/PageNotFound'
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
});
