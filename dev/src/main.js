import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mew from './plugins/mew'
import http from './plugins/http'
import utils from './plugins/utils'
import './style'
import prism from '@/components/prism'
import apiTable from '@/components/apiTable'

let app = createApp(App)

app
    .use(router)
    .use(store)
    .use(mew)
    .use(http)
    .use(utils)
    .component('prism',prism)
    .component('apiTable',apiTable)
    .mount('#app')







