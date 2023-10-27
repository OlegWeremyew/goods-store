import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import autoprefixer from "autoprefixer";

const getPubPath = () => {
  return process.env.BASE_URL || "";
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true,
    postcss: {
      plugins: [autoprefixer({})],
    },
  },
  base: getPubPath(),
  server: {
    open: true,
    port: 8080
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
