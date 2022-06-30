<template>
    <div>
        <fit style="height:300px" bevel>
            <img v-lazy :src="img">
        </fit>
        <h2 tag-bar md my-sm>基本用法</h2>
        <prism mt-sm lang="html" bevel>{{ usage }}</prism>
    </div>
</template>

<script>
import img from '@/assets/wolai/栖息鸟.jpg'
export default {
    name: "doc-lazy",
    data(){
        return {
            img,
            usage:`<!--对 img video 元素都有效-->
<fit ht-xl ht-25 col-25 bevel>
    <img v-lazy src="...">
</fit>
`
        }
    }
}
</script>

<style >

</style>