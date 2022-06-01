import { createApp } from 'vue'
import app from './app'

// 引入样式
import "./src/scss/icon"
import "./src/scss/reset"
import "./src/scss/attributes"
import "./src/scss/transition"

// 创建容器
let el = document.createElement('div')
    el.setAttribute('id','mew')
    document.body.appendChild(el)

// 挂载组件
createApp(app).mount(el)

