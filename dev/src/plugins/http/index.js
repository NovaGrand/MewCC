import http from './interceptors'

export default {
    install: function (app, options) {
        app.config.globalProperties.$http = http
    }
}


