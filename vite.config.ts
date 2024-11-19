import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    resolve: {
      alias: [{ find: "~", replacement: path.resolve(__dirname, "src") }],
    },

    server: {
      port: +env.VITE_PORT || 3000,
    },

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "~/shared/assets/styles/index.scss";`,
        },
      },
    },
  };
});
