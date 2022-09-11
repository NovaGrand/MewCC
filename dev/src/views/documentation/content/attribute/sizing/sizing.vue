<template>
    <div class="doc-sizing" :class="{ mobile: $global.mobile }">
        <showcase_1/>
        <p style="margin-top: 30px">
            Mew 提供宽高(4px~820px)和栅格(25列)两种尺寸属性。
            宽高尺寸由段位和步数控制，通过一个简易公式实现具体的像素宽高；栅格尺寸通过 <q>col-标号</q> 的格式使用，<i bold>栅格属性是宽度百分比</i>，例如
            <q>col-1</q> 等效于 <q>width:4%</q>，<i bold>栅格可与宽度属性叠加</i>。
        </p>
        <prism lang="css" bv-xs style="margin-top: 20px">
            <pre>/* 宽度属性与栅格属性可以叠加使用，例如 col-5 wd-10 等效于 calc(20% + 40px) */
/* !!! 若当前元素的宽度，已经超过容器宽度，则宽度属性与栅格宽度不会继续叠加 */
--w:0;--wx:4;--wn:null;--wp:0%;
width:  calc(var(--w) * 1px + var(--wx) * var(--wn) * 1px + var(--wp));</pre>
        </prism>
        <showcase_col style="margin-top: 5px"/>
        <div xs caution style="margin-top: 10px">因为 24 列非常依赖容器组件，为此增加一个容器是无必要的，而 25 列可以直接用于任意普通元素，所以 Mew 采用 25 列栅格方案。</div>
        <div bb dashed alpha-4 my-lg></div>
<!--        <h2 tag-bar md style="margin-top: 30px">栅格尺寸</h2>-->
        <h2 tag-bar md style="margin-top: 50px">预设模板</h2>
        <p>
            宽高尺寸属性，<i bold>同段位同步数的宽比高大很多</i>，例如 <q v-text="'<i wd-md ht-md red bg> Hello </i>'"></q>
            的结果是一个长方形，这是为了快速找准，长方形比正方形更易于测试。<i bold>当不使用段位，只使用宽高标号时(比如 wd-5 ht-5)，同标号的宽高尺寸是一样的</i>。
            虽然放弃了很多优秀的设计点，但我们敢肯定，现在的尺寸属性，就是最好的方案。
        </p>
        <div message xs style="margin: 30px 0 10px 0">Mew 的宽高属性的范围和精度，足以应对大部分 ToC 场景，点击模板可直接获取尺寸属性。</div>
        <showcase_cards/>
    </div>
</template>

<script>
import showcase_1 from "./showcase_1"
import showcase_col from './showcase_col'
import showcase_cards from './showcase_cards'
export default {
    name: "doc-sizing",
    components:{
        showcase_1, showcase_col, showcase_cards
    },
    data(){
        return {
            code_1:``
        }
    },
    methods:{

    }
}
</script>

<style scoped lang="scss">
div.doc-sizing.mobile{
    p{
        font-size: 14px;
    }
}
</style>