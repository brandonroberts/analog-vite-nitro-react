import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import nitro from '@analogjs/vite-plugin-nitro';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist/client'
  },
  plugins: [
    react(),
    nitro({
      ssr: true,
      entryServer: 'src/main.server.tsx'
    })
  ]
})
