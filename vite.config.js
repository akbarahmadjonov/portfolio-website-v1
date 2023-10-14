import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve("src"),
      "@api": resolve("src", "api"),
      "@app": resolve("src", "app"),
      "@pages": resolve("src", "pages"),
      "@images": resolve("src", "shared", "assets", "images"),
      "@types": resolve("src", "types"),
      "@components": resolve("src", "widgets"),
      "@translations": resolve("src", "translations"),
    },
  },
});
