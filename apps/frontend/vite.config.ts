import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: process.env.VITE_DEV_HOST || "0.0.0.0",
    port: parseInt(process.env.VITE_DEV_PORT || "5173", 10),
    watch: {
      usePolling: true,
    },
    hmr: {
      host: process.env.VITE_HMR_HOST || "localhost",
      port: parseInt(process.env.VITE_HMR_PORT || "5173", 10),
    },
    proxy: {
      "/api": {
        target: process.env.VITE_BACKEND_URL || "http://localhost:8000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
