import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            doc:{
                "开始":[
                    {
                        name:'Intro',
                        path:'intro',
                        file:'/intro.vue'
                    },
                    {
                        name:'Quick start',
                        path:'quick_start',
                        file:'/quick_start.vue'
                    },
                ],
                "颜色属性":[
                    {
                        name:'Colors',
                        path:'colors',
                        file:'/colors.vue'
                    },
                ],
                "文字属性":[
                    {
                        name:'Text',
                        path:'text',
                        file:'/text.vue'
                    },
                ],
                "尺寸属性":[
                    {
                        name:'Padding & Margin',
                        path:'padding&margin',
                        file:'/padding&margin.vue'
                    },
                    {
                        name:'Width & Height',
                        path:'width&height',
                        file:'/width&height.vue',
                    },
                ],
                "布局属性":[
                    {
                        name:'Flex',
                        path:'flex',
                        file:'/flex.vue',
                    },
                    {
                        name:'Nudge',
                        path:'nudge',
                        file:'/nudge.vue'
                    },
                    {
                        name:'Columns',
                        path:'columns',
                        file:'/columns.vue'
                    },
                ]
            }
        }
    },
    mutations: {

    },
    getters:{

    },
    actions:{

    }
})

export default store