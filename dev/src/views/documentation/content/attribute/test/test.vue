<template>
    <div class="doc-test">
        <showcase_parallax></showcase_parallax>
        <showcase_list></showcase_list>
        <div foo baz my-2 pl-lg style="height: 70px" pointer ac @click="copy('foo baz')"><i grey darken bg px-md py-xs round xs>foo baz</i></div>
        <p>
            测试属性用于加快布局、样式 debug、元素标注等情形，类似于 Lorem ipsum，随用随取，相比通过 CSS 颜色和边框更快捷易用。
            <i bold>测试属性仅适合测试、标注，不应该与 CSS 混用。</i>
        </p>
        <div style="height: 10px;"></div>
    </div>
</template>

<script>
import showcase_parallax from './showcase_parallax'
import showcase_list from './showcase_list'
export default {
    name: "test",
    components:{
        showcase_parallax, showcase_list
    },
    methods:{
        copy(str){
            this.$notify({
                text:str + ' 已复制',
                color:'green'
            })
        }
    }
}
</script>

<style scoped lang="scss">
div.doc-test{
    div.showcase_a{
        border-radius: 10px;
        i{
            overflow: hidden;
            font-size: 18px;
            color: black;
            box-shadow: 0.5px 0.5px 0 #3a3a3a,1px 1px 0 #3a3a3a,2px 2px 0 #3a3a3a,3px 3px 0 #3a3a3a,4px 4px 0 #3a3a3a,6px 6px 0 #3a3a3a,8px 8px 0 #3a3a3a;
        }
    }
}
</style>