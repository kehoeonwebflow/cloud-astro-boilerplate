// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [react()],
  // Configure base path for Webflow Cloud mount path
  // Update this to match your mount path (e.g., '/app', '/admin', etc.)
  base: process.env.WEBFLOW_MOUNT_PATH || '/',
  vite: {
    ssr: {
      external: ['react', 'react-dom']
    }
  }
});
