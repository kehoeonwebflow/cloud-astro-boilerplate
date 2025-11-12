// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),
  integrations: [react()],
  // Configure base path for Webflow Cloud mount path
  // Update this to match your mount path (e.g., '/app', '/admin', etc.)
  base: process.env.WEBFLOW_MOUNT_PATH || '/app',
  vite: {
    resolve: {
      // Use react-dom/server.edge instead of react-dom/server.browser for React 19
      // Without this, MessageChannel from node:worker_threads needs to be polyfilled
      alias: import.meta.env.PROD ? {
        "react-dom/server": "react-dom/server.edge",
      } : undefined,
    },
  }
});
