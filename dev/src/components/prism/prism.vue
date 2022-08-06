<template>
    <pre><code ref="prism" :class="['language-' + (lang === 'js' ? 'javascript' : lang)]"><slot></slot></code></pre>
</template>

<script>
import Prism from 'prismjs'
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
}
</script>

<style>
@import './prism.css';
</style>