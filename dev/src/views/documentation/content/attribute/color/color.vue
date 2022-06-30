<template>
    <div class="doc-color">
        <color-sheet/>
        <small jc style="margin-top: 5px">Mew 提供三十六种颜色；点击色卡左侧或右侧，复制 颜色属性 或 Hex 到粘贴板</small>
        <div bb dashed alpha-3 style="margin-top: 20px"></div>
        <h2 tag-bar md ls-xs style="margin-top: 35px">文字颜色</h2>
        <p>
            <i bold>直接在元素上使用“颜色名”作为属性，即修改文字颜色，</i>例如  <q v-text="'<i red>Hello</i>'"></q>，结果为 <i red>Hello</i>。
            如果该元素同时也使用 <kbd>border</kbd> <kbd>bg</kbd> 属性，颜色也会对边框和背景生效，并且<i bold>文字颜色会根据背景的明度，自动选择“撞色”</i>。
            颜色属性的全部特性和使用方法为：
        </p>
        <div jsb ls-xs xs style="margin: 20px 0">
            <i wd-sm wd-5 ht-xs blue bg round pointer @click="copy('blue bg')">
                <i fill jc ac nu-md>背 景 颜 色</i>
            </i>
            <i wd-sm wd-5 ht-xs blue border darken round pointer @click="copy('blue border')">
                <i fill jc ac nu-xs>边 框 颜 色</i>
            </i>
            <i wd-sm wd-5 ht-xs catskill bg round pointer @click="copy('catskill bg')">
                <i fill jc ac nu-xs>字 体 颜 色</i>
            </i>
            <i wd-sm wd-5 ht-xs red ba-md round pointer @click="copy('black bg')">
                <i fill  round ba white black>
                    <i black bg fill round jc ac>
                        多元素嵌套
                    </i>
                </i>
            </i>
        </div>
        <prism lang="html" style="margin-top: 12px" bv-xs>
            {{ sample_1 }}
        </prism>
        <ul style="margin-top: 20px">
            <li>元素添加 red 属性，元素的文字颜色会变为红色，这种控制颜色的属性有
                <q>red</q> <q>pink</q> <q>purple</q> <q>cyan</q> <q>blue</q> ... 等十二种。</li>
            <li>元素添加 <q>ba</q> 属性后，颜色不仅影响文字，还会影响边框，如果此时还要自定义文字颜色，只能通过子元素实现了。</li>
            <li>元素添加 <q>bg</q> 属性后，颜色的目标就是背景色了，如果此时还要自定义文字颜色，只能通过子元素实现了。</li>
            <li>每种颜色只有 default、lighten 和 darken 三种明度，同一种颜色的<i bold>不同明度有非常明显的界限</i>。</li>
<!--            <li>元素有多个颜色属性时，最终显示结果与颜色属性的先后顺序无关。</li>-->
        </ul>
        <div message xs style="margin-top: 20px">foo bar 等“测试属性”与颜色不同，虽然它们也产生颜色，但没有 lighten border bg alpha 等相关功能，因此测试属性仅能用于布局测试。</div>
        <div bb dashed alpha-3 style="margin-top: 20px"></div>
        <h2 tag-bar md style="margin-top: 35px">颜色透明度</h2>
        <doc-color-showcase_1/>
        <small jc style="margin-top: 12px">Mew 提供 25 段透明；点击示例复制 Alpha 属性到粘贴板</small>
        <div bb dashed alpha-3 style="margin-top: 18px"></div>
        <ul style="margin-top: 10px">
            <li>颜色属性通过配合 <q>lighten</q> <q>darken</q> 控制明度，通过 <q>alpha</q> 属性控制透明度。</li>
            <li>
                <q>alpha</q> 属性有 25 个分段，默认值是 alpha-25，最小值是 alpha-1，等效于 <q>opacity:0.04</q> 。
            </li>
            <li><q>alpha</q> 属性对文字颜色的影响会向下传递，但对边框和背景色的影响不会向下传递。</li>
        </ul>
        <div ht-lg></div>
    </div>
</template>

<script>

import colorSheet from "./colorSheet";
import docColorShowcase_1 from './doc-color-showcase_1'
export default {
    name: "doc-color",
    components:{
        colorSheet,docColorShowcase_1
    },
    mounted(){

    },
    beforeUnmount(){
        clearInterval(this.timer)
    },
    data(){
        return {
            sample_1:`<!--blue bg 表示背景为蓝色，因为该蓝色明度低，所以字体为白色-->
<!--wd-sm wd-5 ht-xs 是宽高尺寸属性，round 大圆角属性-->
<i blue bg wd-sm wd-5 ht-xs round>
   text & background
</i>`,
            catskill:false,
            timer:null
        }
    },
    methods:{
        copy(str){
            this.$copy(str)
            this.$notify({
                text: str + ' 已复制',
                color:'green'
            })
        }
    }
}
</script>

<style lang="scss">
div.doc-color{


}
</style>