<template>
    <div class="doc-flex">
        <div class="showcase _1" >
            <VueDragResize :isActive="false" :parentLimitation="true" :w="w" :h="300" relative>
                <div fill >
                    <flex fill py-sm py-5>
                        <div class="item" wd-xs wd-10 ht-sm pa-xs v-for="n in 9">
                            <i fill jc ac class="item">{{ n }}</i>
                        </div>
                    </flex>
                </div>
            </VueDragResize>
            <div class="bg" fill >
                <fit fill bevel>
                    <img :src="img">
                </fit>
            </div>
        </div>
        <div jc mt-xs mt-5>
            <small><ico style="transform: rotate(90deg);">arrow-trangle</ico> 点击图片，修改容器大小，查看排列效果</small>
        </div>
        <h2 tag-bar md style="margin: 30px 0 15px 0">基本用法</h2>
        <prism mt-sm lang="html" bevel>{{ usage }}</prism>
    </div>
</template>

<script>
import VueDragResize from 'vue3-drag-resize'
import img from '@/assets/wolai/维也纳.jpg'
export default {
    name: "doc-flex",
    components:{ VueDragResize },
    mounted(){
        this.w = this.$el.offsetWidth
    },
    data(){
        return {
            img,
            w:900,
            usage:`<!--插槽内每个元素必须指定宽高尺寸-->
<!--插槽内每个元素的宽度必须一样-->
<flex fill>
    <div foo bar bg wd-md ht-md v-for="n in 9">{{ n }}</div>
</flex>`
        }
    }
}
</script>

<style scoped lang="scss">
body[mobile] div.doc-flex{
    div.item{
        width: 80px;height: 80px;
    }
}
div.showcase{
    position: relative;
    &._1{
        height: 300px;
        i.item{
            background-color: rgba(255,255,255,.2);
            color: white;font-size: bold;
            border: 1px solid white;
            border-radius: 3px;
        }
    }
    div.bg{
        position: absolute;
        left: 0;top: 0;z-index: -100;
    }
}
</style>