import vue from '@vitejs/plugin-vue'
import { defineConfig } from "vite"
let path = require('path')

export default ({command, mode}) => {

  if (command === 'dev') {

  } else if (command === 'build') {
    // command === 'build'
  }
  let config = {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
      // 忽略后缀名的配置选项, 添加 .vue 选项时要记得原本默认忽略的选项也要手动写入
      extensions: ['.html','.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.scss']
    },
    define:{
      'process.env':{
        baseURL: {
          development:'http://localhost:3001',
          production:'http://xx.xx.xx.xx:3001'
        }[mode],
      }
    },
    server:{
      host: '0.0.0.0',
      port: 3000,
      open: '/',
    },
    build:{
      // 如果构建后无法使用，先尝试删除 rollupOptions
      rollupOptions:{
        input:'./index.html'
      },
      outDir:'./dist'
    }
  }

  return defineConfig(config)

}

