import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      react: path.resolve(__dirname, "./node_modules/react"),
      app: path.resolve(__dirname, "src/app"),
      pages: path.resolve(__dirname, "src/pages"),
      widgets: path.resolve(__dirname, "src/widgets"),
      features: path.resolve(__dirname, "src/features"),
      entities: path.resolve(__dirname, "src/entities"),
      shared: path.resolve(__dirname, "src/shared")
    }
  }
});
