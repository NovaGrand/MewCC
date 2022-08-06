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
        <h2 tag-bar md style="margin-top: 35px">用法</h2>
        <div flex style="margin-top: 20px">
            <div col-2>
                <div blue darken wd-12 ht-12 jc ac>
                    <ico xl fs-10>{{ samps[n] }}</ico>
                </div>
            </div>
            <div col-23 style="margin-top: 0">
                <prism lang="html" >{{ codes[n] }}</prism>
<!--                <div xs message>图标组件变换时默认有抖入动效，使用 dense 属性可关闭抖入动效。</div>-->
            </div>
        </div>
        <apiTable :items="api" style="margin-top: 35px"/>
        <div ht-xs></div>
    </div>
</template>

<script>
import names from './names'
import copy from '@/lib/copy'
export default {
    name: "doc-icon",
    mounted(){
        this.timer = setInterval(()=>{
            this.n = this.n === 3 ? 0 : this.n + 1
        },2000)
    },
    beforeUnmount(){
        clearInterval(this.timer)
    },
    data(){
        return {
            n:0,
            samps:[
                'building-academy','state-laberty','state-bling-twinkle','msg-thumb'
            ],
            codes:[
                `<ico xl blue darken> building-academy </ico>`,
                `<ico xl blue darken> state-laberty </ico>`,
                `<ico xl blue darken> state-bling-twinkle </ico>`,
                `<ico xl blue darken> msg-thumb </ico>`
            ],
            names,
            api:[
                { name:'dense', type:'Attribute', description:'为图标添加 dense 属性可，关闭图标变换时的抖入动效' },
            ],
            timer: null
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