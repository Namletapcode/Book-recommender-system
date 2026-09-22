import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    // TanStack Start (SSR + server functions + file-based routing)
    tanstackStart({
      server: { entry: "src/server.ts" },
    }),
    // React Fast Refresh
    react(),
    // Tailwind CSS v4
    tailwindcss(),
    // TypeScript path aliases (@ → src/)
    tsConfigPaths(),
  ],
  server: {
    port: 3000,
    proxy: {
      // Forward /api/* to Python backend (Aiven books API)
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
    },
  },
  resolve: {
    dedupe: ["react", "react-dom"],
  },
});
