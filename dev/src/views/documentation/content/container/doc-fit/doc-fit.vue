<template>
    <div class="doc-fit">
        <div class="showcase _1">
            <VueDragResize :isActive="false" :parentLimitation="true" :w="w" :h="290">
                <fit fill bevel>
                    <img :src="img">
                </fit>
            </VueDragResize>
<!--            <h2 class="doc-title" ls-xs>自匹配 Fit</h2>-->
        </div>
        <div jc mt-sm>
            <small><ico style="transform: rotate(90deg);">arrow-trangle</ico> 点击图片，修改容器大小，查看匹配效果</small>
        </div>
        <div bb my-sm dashed grey alpha-15></div>
        <h2 tag-bar md style="margin: 30px 0 15px 0">基本用法</h2>
        <prism mt-sm lang="html" bevel>{{ usage }}</prism>

        <h2 tag-bar md  style="margin: 30px 0 15px 0">更多示例</h2>
        <div class="showcase _2">
            <VueDragResize :isActive="false" :parentLimitation="true" :w="w" :h="390">
                <div flex jsb fill black ba bevel>
                    <div fill flex column>
                        <div style="width: 100%;height: 60%" pa-xs><fit fill bevel><img :src="img"></fit></div>
                        <div style="width: 100%;height: 40%" pa-xs><fit fill bevel><img :src="img"></fit></div>
                    </div>
                    <div fill flex column>
                        <div style="width: 100%;height: 30%" pa-xs><fit fill bevel><img :src="img"></fit></div>
                        <div style="width: 100%;height: 70%" pa-xs><fit fill bevel><img :src="img"></fit></div>
                    </div>
                    <div fill pa-xs>
                        <fit fill bevel><img :src="img"></fit>
                    </div>
                </div>
            </VueDragResize>
        </div>

    </div>
</template>

<script>
import VueDragResize from 'vue3-drag-resize'
import img from '@/assets/wolai/傍晚的林中小屋.jpg'

export default {
    name: "doc-fit",
    components:{ VueDragResize },
    mounted(){
        this.w = this.$el.offsetWidth
    },
    data(){
        return {
            img,
            w:900,
            usage:`
<!--fit 组件内只能同时显示一个元素-->
<!--fit 组件只有在具有宽高尺寸时，才会将内容裁切匹配-->
<!--fit 组件默认是短边适配-->
<fit fill>
    <img :src="img">
</fit>

<!--通过 contain 属性改为长边适配-->
<fit fill contain>
    <img :src="img">
</fit>

`,

        }
    }
}
</script>
<style lang="scss" scoped>
div.doc-fit{
    div.showcase{
        position: relative;
        h2.doc-title{
            text-shadow:  1px 1px rgba(0,0,0,.7);
            position: absolute;left: 10px;top: 0px;
            color: rgba(255,255,255,.8);
            font-size: 25px;
            font-family: "Hiragino Sans GB";
        }
        &._1{
            height: 290px;
        }
        &._2{
            height: 390px;
        }
    }
}

</style>