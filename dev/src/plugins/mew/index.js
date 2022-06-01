// 入口文件
import './main'
// 数据模型
import { loading, pending } from './mew'

import icon from './src/components/icon'

export default {
    install: function (app, config){
        app.config.globalProperties.$loading = loading
        app.config.globalProperties.$pending = pending
        app.component('ico',icon)
    }
}