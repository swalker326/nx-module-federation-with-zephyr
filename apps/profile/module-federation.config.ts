export const mfConfig = {
  name: "profile",
  filename: "remoteEntry.js",
  exposes: {
    "./App": "./src/App"
  },
  shared: { react: { singleton: true }, "react-dom": { singleton: true } }
};
