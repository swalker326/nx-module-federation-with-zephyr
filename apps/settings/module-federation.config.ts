export const mfConfig = {
  name: "settings",
  filename: "remoteEntry.js",
  exposes: {
    "./App": "./src/App"
  },
  shared: { react: { singleton: true }, "react-dom": { singleton: true } }
};
