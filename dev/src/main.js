import { computed, createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mew from './plugins/mew'

import './style'

let app = createApp(App)
// app.config.unwrapInjectedRef = true
app.provide('bar',{ val: 1 })
app
    .use(router)
    .use(store)
    .use(mew)
    .mount('#app')







