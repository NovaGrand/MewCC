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
                        path:'start',
                        file:'/intro/start.vue'
                    },
                    {
                        name:'规范 Standard',
                        prefix:'规范',suffix:'Standard',
                        path:'standard',
                        file:'/intro/standard.vue'
                    },
                ],
                "属性":[
                    {
                        name:'颜色 Colors',
                        prefix:'颜色',suffix:'Colors',
                        path:'colors',
                        file:'/attribute/color'
                    },
                    {
                        name:'尺寸 Sizing',
                        prefix:'尺寸',suffix:'Sizing',
                        path:'sizing',
                        file:'/attribute/sizing'
                    },
                    {
                        name:'盒子 Box',
                        prefix:'盒子',suffix:'Box',
                        path:'box',
                        file:'/attribute/box'
                    },
                    {
                        name:'文字 Text',
                        prefix:'文字',suffix:'Text',
                        path:'text',
                        file:'/attribute/text'
                    },
                    {
                        name:'测试 Test',
                        prefix:'测试',suffix:'Test',
                        path:'test',
                        file:'/attribute/test.vue',
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
                        name:'蒙板 Matte',
                        prefix:'蒙板',suffix:'Matte',
                        path:'overlay',
                        file:'/preset/overlay.vue'
                    },
                    {
                        name:'消息 Message',
                        prefix:'消息',suffix:'Message',
                        path:'message',
                        file:'/preset/doc-message',
                    },
                    {
                        name:'动效 Transition',
                        prefix:'动效',suffix:'Transition',
                        path:'transition',
                        file:'/preset/transition.vue'
                    },
                ],
                "容器":[
                    {
                        name:'自适应 Fit',
                        prefix:'自适应',suffix:'Fit',
                        path:'fit',
                        file:'/container/doc-fit'
                    },
                    {
                        name:'陈列 Flex',
                        prefix:'陈列',suffix:' Flex',
                        path:'flex',
                        file:'/container/doc-flex',
                        width:'45px',
                    },
                ],
                "指令":[
                    {
                        name:'懒加载',
                        prefix:'懒加载',suffix:'Lazy',
                        path:'lazy',
                        file:'/directive/doc-lazy',
                    }
                ],
                "组件":[
                    {
                        name:'图标 Ico',
                        prefix:'图标',suffix:'Ico',
                        path:'icon',
                        file:'/component/icon',
                    },
                    {
                        name:'按钮 Btn',
                        prefix:'按钮',suffix:'Btn',
                        path:'btn',
                        file:'/component/btn.vue',
                    },
                    {
                        name:'输入 Field',
                        prefix:'输入',suffix:'Field',
                        path:'field',
                        file:'/component/field.vue',
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