import path from "node:path";

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    globals: false,
    include: ["src/**/*.test.ts", "src/**/*.test.tsx"],
    exclude: ["tests/e2e/**"],
    setupFiles: ["./tests/setup.ts"],
  },
  resolve: {
    alias: {
      "next/server": path.resolve(__dirname, "./node_modules/next/server.js"),
      "~": path.resolve(__dirname, "./src"),
    },
  },
});
