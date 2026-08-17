import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

const rootDirectory = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? '/',
  plugins: [vue(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(rootDirectory, 'index.html'),
        privacy: resolve(rootDirectory, 'aviso-de-privacidad/index.html'),
      },
    },
  },
})
