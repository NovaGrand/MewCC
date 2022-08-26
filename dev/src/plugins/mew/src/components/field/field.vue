<template>
    <div class="mew-field" :class="[ mode ]"
         @mousedown.once="activated = true"
         @click.self="click"
    >
        <!--label 标签-->
        <label-tag v-if="label"/>
        <!--下拉选择列表-->
        <drop-list v-if="select"><slot/></drop-list>
        <!--文本输入框和勾选框组件-->
        <component :is="component" ref="input"><slot/></component>

    </div>
</template>

<script>
import inits from './mixins/inits' // 基本属性
import types from './mixins/types' // 时间、日期、文件等其他输类型
import validate from './mixins/validate' // 输入验证
import labelTag from './components/labelTag'
import dropList from './components/dropList'
export default {
    name: "mew-field",
    components: { labelTag, dropList },
    mixins: [ inits, types, validate ],
    emits: ['update:modelValue'],
    provide() {
        return {
            field: this
        }
    },
    data(){
        return {
            focus: false, // 文本框输入状态
            activated: false, // 输入框组件是否激活（防止 label 标签挂载后自动播放动画）
            el: null
        }
    },
    props:{
        modelValue:{
            type:[ String, Boolean, Number ], default: ''
        },
    },
    methods:{
        click(){
            this.el.focus()
        }
    }
}
</script>

<style lang="scss">
div.mew-field{
    display: inline-block;
    position: relative;
    overflow: visible!important;// 制止 bv 等属性的 hidden
    // 默认内间距
    --pt:6;--pb:6;--pl:8;--pr:8;
    // 默认倒角
    --bdrd:.2em;
    // 边框颜色深度调整
    --adjust-border:0.02;
    // 字体大小
    --xfs:15;--fs:0;
    transition: all .1s linear;
    &:hover{
        --adjust-border:0.04;
    }
}
</style>