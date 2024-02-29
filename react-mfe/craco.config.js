const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;

module.exports = {
  webpack: {
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "react_mfe",
          filename: "remoteEntry.js",
          exposes: {
            "./App": "./src/App",
          },
          shared: {
            // react: {
            //   singleton: true,
            //   requiredVersion: deps.react,
            // },
            // "react-dom": {
            //   singleton: true,
            //   requiredVersion: deps["react-dom"],
            // },
          },
        }),
      ],
    },
  },
};
