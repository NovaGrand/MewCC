import copy from '@/lib/copy'

export default {
    install: function (app, config){
        app.config.globalProperties.$copy = copy
    }
}