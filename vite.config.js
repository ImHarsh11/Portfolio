import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Check for GitHub Pages environment variable
const isGitHubPages = process.env.VITE_GITHUB_PAGES === 'true';

export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? '/Portfolio/' : '/',
  server: {
    host: true,
  },
});
