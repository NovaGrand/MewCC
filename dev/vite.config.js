import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
    // 忽略后缀名的配置选项, 添加 .vue 选项时要记得原本默认忽略的选项也要手动写入
    extensions: ['.html','.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.scss']
  },
  server:{
    host: '0.0.0.0',
    port: 3000,
    open: '/',
  },
})
