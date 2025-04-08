export const mfConfig = {
  name: "shell",
  filename: "remoteEntry.js",
  remotes: {
    settings: "settings@http://localhost:3001/remoteEntry.js",
    profile: "profile@http://localhost:3002/remoteEntry.js"
  },
  shared: { react: { singleton: true }, "react-dom": { singleton: true } }
};
