import { fileURLToPath, URL } from 'node:url'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dts: true,
      types: [
        {
          from: 'vue',
          names: ['component']
        }
      ],
      dirs: ['./src/components', './src/helpers']
    }),
    AutoImport({
      eslintrc: {
        enabled: true
      },
      dts: true,
      imports: ['vue', 'vue-router', 'pinia']
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
