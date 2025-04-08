import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { mfConfig } from "./module-federation.config";
import { ZephyrRsbuildPlugin } from "zephyr-rsbuild-plugin";

export default defineConfig({
  server: {
    port: 3001
  },
  plugins: [pluginReact(), ZephyrRsbuildPlugin()],
  moduleFederation: {
    options: mfConfig
  }
});
