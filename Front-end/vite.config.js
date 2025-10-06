import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],// 👈 لازم يكون نفس اسم الريبو
   server: {
    proxy: {
      '/send': 'http://localhost:5000',
    },
  },
}
);
