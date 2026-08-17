import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const isProd = mode === "production";
  const BASE = isProd ? "/critical/" : "/";

  return {
    plugins: [react()],
    base: BASE,
  }
})
