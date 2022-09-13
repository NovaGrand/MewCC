import store from '../store'
const views = import.meta.glob('@/views/documentation/content/**/index.js')

let docRoutes = []
for(let groupName in store.state.doc){
    for(let item of store.state.doc[groupName]){
        docRoutes.push({
            name: item.name,
            path: item.path,
            component: views['../views/documentation/content' + item.file + '/index.js']
        })
    }
}

let routes = [
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
    {
        path: '/doc/:pathMatch(.*)*',
        name:'error',
        redirect: '/',
        // component: () => import('@/views/error')
    },
    {
        path: '/:pathMatch(.*)*',
        name:'error',
        redirect: '/',
        // component: () => import('@/views/error')
    },
]

export default routes