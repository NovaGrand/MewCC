import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import store from '../store'

let docRoutes = []
for(let groupName in store.state.doc){
    for(let item of store.state.doc[groupName]){
        docRoutes.push({
            name: item.name,
            path: item.path,
            component: () => import('../views/documentation/content' + item.file)
        })
    }
}
export default createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/', name:'Home',
            component: () => import('@/views/home')
        },
        {
            path:'/doc',name:'Documentation',
            component: () => import('@/views/documentation'),
            children:[...docRoutes]
            // 子路由 path 有两种写法，/xxx/xxx 或者 xxx
            // children: [
            //     {
            //         path:'intro',name:'Intro',
            //         component: () => import('../views/documentation/content/intro.vue'),
            //     }
            // ]
        },
        // 404 页面
        { name:'error', path: '/:pathMatch(.*)*', component: () => import('@/views/error') },
    ]
})

// export default router