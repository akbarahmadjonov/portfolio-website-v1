import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve("src"),
      "@components": resolve("src", "widgets"),
      "@pages": resolve("src", "pages"),
      "@images": resolve("src", "shared", "assets", "images"),
      "@api": resolve("src", "Api"),
      "@app": resolve("src", "app"),
    },
  },
});
