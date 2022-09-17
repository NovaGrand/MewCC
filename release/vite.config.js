import vue from '@vitejs/plugin-vue'
import { defineConfig } from "vite"
import path from 'path'

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
      // 忽略后缀名的配置选项
      // 即使可以忽略 .vue 后缀，项目中引入时也必须加上 .vue ，否则 build 可能报错
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
      rollupOptions:{
        // 打包入口
        input:'./mew/index.js',
        // 关闭构建后的哈希
        output: {
          entryFileNames: `[name].js`,
          chunkFileNames: `[name].js`,
          assetFileNames: `[name].[ext]`,
        }
      },
      outDir:'./dist',
    }
  }

  return defineConfig(config)

}

