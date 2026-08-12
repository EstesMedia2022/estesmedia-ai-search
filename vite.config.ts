import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Every browser that can run this site supports es2020. Targeting it
    // instead of Vite's default avoids shipping downlevel helpers.
    target: "es2020",
    cssMinify: true,
    sourcemap: false,
    // Anything under 4 KB becomes a data URI rather than a second round trip.
    assetsInlineLimit: 4096,
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        // React and the router change far less often than the marketing copy.
        // Splitting them keeps that chunk cached across content deploys.
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },
}));
