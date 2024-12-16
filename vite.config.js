import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ReactToDoList/', // Replace 'ReactToDoList' with your repository name
});
