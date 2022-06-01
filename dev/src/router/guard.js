
import router from "./router";
import store from '../store'

router.beforeEach((to,from,next)=>{
    next()
})

router.afterEach((to, from) => {

    let name = to.name ? ' | ' + to.name[0].toUpperCase() + to.name.slice(1) : ''
    document.title = 'Mew' + name
    // 路由切换后，将页面滚动到顶部
    document.documentElement.scrollTop = 0
})

export default router