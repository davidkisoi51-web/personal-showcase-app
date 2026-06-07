import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Strict path definition for your specific repository name
  base: '/personal-showcase-app/',
});