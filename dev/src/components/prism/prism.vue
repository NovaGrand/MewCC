<template>
    <div class="mew-prism">
        <i class="mew-prism-cpy" title="点击复制" @click="cpy">
            <svg height="24px" width="24px" viewBox="0 0 24 24">
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
            </svg>
        </i>
    <pre>  <code ref="prism" :class="['language-' + (lang === 'js' ? 'javascript' : lang)]"><slot></slot></code></pre>
    </div>

</template>

<script>
import Prism from 'prismjs'
import copy from '../../lib/copy'
export default {
    name: "prism",
    mounted(){
        Prism.highlightAll()
    },
    updated(){
        this.$refs.prism.innerText = this.$slots.default()[0].children
        Prism.highlightAll()
    },
    props:{
        lang:{
            type: String,
            default: 'javascript'
        }
    },
    methods:{
        cpy(){
            copy(this.$slots.default()[0].children)
            this.$notify({
                color:'green',
                text:'内容已拷贝',
            })
        }
    }
}
</script>

<style>
@import './prism.css';
</style>