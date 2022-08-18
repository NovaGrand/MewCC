<template>
    <div>
        <fit style="height:300px" bevel>
            <img v-lazy :src="img">
        </fit>
        <h2 tag-bar lg style="margin-top: 40px">懒加载 v-lazy</h2>
        <prism style="margin-top: 20px" lang="html" bevel>{{ usage }}</prism>
    </div>
</template>

<script>
import img from '@/assets/wolai/栖息鸟.jpg'
export default {
    name: "doc-lazy",
    data(){
        return {
            img,
            usage:`<!--对 img video src input 等具有 src 属性的元素都有效-->
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