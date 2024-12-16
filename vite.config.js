import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/https://github.com/musaibmirrr/ReactToDoList.git/', // Replace 'your-repo-name' with your GitHub repository name
});