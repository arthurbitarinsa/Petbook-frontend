import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';


dotenv.config();

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {
      VITE_API_URL_LOGIN: process.env.VITE_API_URL_LOGIN,
      VITE_API_URL_PETS: process.env.VITE_API_URL_PETS,
      VITE_API_URL_POSTS: process.env.VITE_API_URL_POSTS,
      VITE_API_URL_SIGNUP: process.env.VITE_API_URL_SIGNUP,
    }
  }
});

