// 入口文件
import './main'
// 数据模型
import { loading, pending, notify } from './mew'

import ico from './src/components/ico'
import btn from './src/components/btn'
import vid from './src/components/vid'

import fit from './src/components/fit'
import flex from './src/components/flex'

import lazy from './src/directive/lazy'

export default {
    install: function (app, config){
        app.config.globalProperties.$loading = loading
        app.config.globalProperties.$pending = pending
        app.config.globalProperties.$notify = notify
        app.component('ico',ico)
        app.component('btn',btn)
        app.component('vid',vid)
        app.component('fit',fit)
        app.component('flex',flex)
        app.directive('lazy',lazy)
    }
}