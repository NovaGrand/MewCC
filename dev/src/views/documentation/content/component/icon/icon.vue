<template>
    <div class="doc-ico" >
        <div class="icons" flex column wrap>
            <div class="bar" v-for="(name, index) in names">
                <div class="iconBox">
                    <ico class="icon">{{ name }}</ico>
                </div>
                <div class="textBox" :title='`Click to copy "` + name + `"`'
                     @click="copy(name)"
                >
                    <i ellipsis>{{ name }}</i>
                </div>
            </div>
        </div>
        <h2 tag-bar md my-sm>用法</h2>
        <div flex>
            <div col-1 mr-sm flex jc ac>
                <ico xl>building-academy</ico>
            </div>
            <prism col-24 bevel lang="html">{{ usage_1 }}</prism>
        </div>
        <div flex mt-xs>
            <div col-1 mr-sm flex jc ac>
                <div blue bg round jc ac pa-xs nr-md>
                    <ico white lg nd-xs>kit-miota</ico>
                </div>
            </div>
            <prism col-24 bevel lang="html">{{ usage_2 }}</prism>
        </div>
        <div ht-lg></div>
    </div>
</template>

<script>
import names from './names'
import copy from '@/lib/copy'
export default {
    name: "doc-icon",
    data(){
        return {
            names,
            usage_1:`<ico xl> building-academy </ico>`,
            usage_2:`<div blue bg round wd-xs wd-7 ht-xs ht-7 flex jc ac>
    <ico white lg nd-sm>kit-miota</ico>
</div>`
        }
    },
    methods:{
        copy(str){
            copy(str)
            this.$notify({
                color:'green',
                text:`" ${str} " 已复制到粘贴板`,
            })
        }
    }
}
</script>

<style scoped lang="scss">
@import "scss/ico.scss";
@import "scss/1200.scss";
</style>