import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueform from '@vueform/vueform/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'http://192.168.1.15:5173/',
  plugins: [
    vue(),
    vueform()
  ],
})
