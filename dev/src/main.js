import { computed, createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mew from './plugins/mew'
import utils from './plugins/utils'
import './style'
import prism from '@/components/prism'

let app = createApp(App)

// app.config.unwrapInjectedRef = true
app.provide('bar',{ val: 1 })
app
    .use(router)
    .use(store)
    .use(mew)
    .use(utils)
    .component('prism',prism)
    .mount('#app')







