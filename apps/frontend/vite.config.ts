import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin", // For SQLite WebAssembly
      "Cross-Origin-Embedder-Policy": "require-corp", // For SQLite WebAssembly
    },
    host: "0.0.0.0",
    port: 5173,
    watch: {
      usePolling: true,
    },
  },
  optimizeDeps: {
    exclude: ["@sqlite.org/sqlite-wasm"],
  },
});
