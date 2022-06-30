<template>
    <pre><code :class="['language-' + (lang === 'js' ? 'javascript' : lang)]"><slot></slot></code></pre>
</template>

<script>
import Prism from 'prismjs'
export default {
    name: "prism",
    mounted(){
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