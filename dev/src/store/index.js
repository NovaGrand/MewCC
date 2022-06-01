import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            version:'1.3.1',
            doc:{
                "指南":[
                    {
                        name:'开始 Start',
                        prefix:'开始',suffix:'Start',
                        path:'quick_start',
                        file:'/intro/quick_start.vue'
                    },
                    {
                        name:'规范 Standard',
                        prefix:'规范',suffix:'Standard',
                        path:'standard',
                        file:'/intro/standard.vue'
                    },
                    {
                        name:'优势 Advantage',
                        prefix:'优势',suffix:'Advantage',
                        path:'advantage',
                        file:'/intro/advantage.vue'
                    },


                ],
                "预设":[
                    {
                        name:'CSS Reset',
                        prefix:'CSS',suffix:'Reset',
                        path:'reset',
                        file:'/preset/reset.vue'
                    },
                    {
                        name:'蒙板 Overlay',
                        prefix:'蒙板',suffix:'Overlay',
                        path:'overlay',
                        file:'/preset/overlay.vue'
                    },
                    {
                        name:'动效 Transition',
                        prefix:'动效',suffix:'Transition',
                        path:'transition',
                        file:'/preset/transition.vue'
                    },
                ],
                "属性":[
                    {
                        name:'颜色 Colors',
                        prefix:'颜色',suffix:'Colors',
                        path:'colors',
                        file:'/attribute/colors.vue'
                    },
                    {
                        name:'尺寸 Sizing',
                        prefix:'尺寸',suffix:'Sizing',
                        path:'box',
                        file:'/attribute/sizing.vue'
                    },
                    {
                        name:'文字 Text',
                        prefix:'文字',suffix:'Text',
                        path:'text',
                        file:'/attribute/text.vue'
                    },
                    {
                        name:'栅格 Grids',
                        prefix:'栅格',suffix:'Grids',
                        path:'grids',
                        file:'/attribute/grids.vue',
                    },
                    {
                        name:'测试 Test',
                        prefix:'测试',suffix:'Test',
                        path:'test',
                        file:'/attribute/test.vue',
                    },
                ],
                "组件":[
                    {
                        name:'按钮 Btn',
                        prefix:'按钮',suffix:'Btn',
                        path:'btn',
                        file:'/component/btn.vue',
                    },
                    {
                        name:'图标 Icon',
                        prefix:'图标',suffix:'Icon',
                        path:'icon',
                        file:'/component/icon',
                    },
                    {
                        name:'消息 Hint',
                        prefix:'消息',suffix:'Hint',
                        path:'hint',
                        file:'/component/hint.vue',
                    },
                    {
                        name:'输入 Field',
                        prefix:'输入',suffix:'Field',
                        path:'field',
                        file:'/component/field.vue',
                    },
                    {
                        name:'图片 Image',
                        prefix:'图片',suffix:'Image',
                        path:'image',
                        file:'/component/image.vue',
                    },
                    {
                        name:'表格 Table',
                        prefix:'表格',suffix:'Table',
                        path:'table',
                        file:'/component/table.vue',
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