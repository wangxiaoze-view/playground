import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import viteCompression from 'vite-plugin-compression'
import { resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      vue(),
      vueJsx(),
      vueDevTools(),
      AutoImport({
        imports: ['vue'],
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        dirs: ['src/components'],
        resolvers: [ElementPlusResolver()],
      }),
      viteCompression({
        threshold: 10240,
        // 根据个人需求设置
        // algorithm: 'brotliCompress',
        // ext: '.br',
        ext: '.gz',
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    base: '/playground/',
    build: {
      minify: true,
      cssMinify: true,
      chunkSizeWarningLimit: 6000,
      rollupOptions: {
        output: {
          // manualChunks(id) {
          //   if (id.includes('node_modules')) {
          //     return id.toString().split('node_modules/')[1].split('/')[0].toString()
          //   }
          // },
          manualChunks: {
            vue: ['vue', 'pinia'],
            monaco: ['monaco-editor'],
            element: ['element-plus'],
            str: ['file-saver', 'jszip', 'lz-string'],
            util: ['lodash-es', 'functional-helpers'],
          },
        },
      },
      terserOptions: {
        compress: {
          drop_console: mode === 'production',
          drop_debugger: mode === 'production',
        },
      },
    },
    optimizeDeps: {
      include: ['element-plus', 'monaco-editor', 'functional-helpers'],
    },
  }
})
