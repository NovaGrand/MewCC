<template>
    <div class="doc-ico" >
        <div class="icons" flex column wrap>
            <div class="bar" v-for="(name, index) in names">
                <div class="iconBox">
                    <i :class="['icon','mew-' + name]"></i>
                </div>
                <div class="textBox" :title='`Click to copy "` + name + `"`'
                     @click="copy(name)"
                >
                    <i ellipsis>{{ name }}</i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import names from './names'
export default {
    name: "doc-icon",
    data(){
        return {
            names
        }
    },
    methods:{
        copy(str){
            let transfer = document.createElement('input')
            document.body.appendChild(transfer)
            transfer.value = str  // 这里表示想要复制的内容
            transfer.focus()
            transfer.select()
            document.execCommand('copy')
            transfer.blur()
            document.body.removeChild(transfer)

            console.log(str + ' 已复制')
        }
    }
}
</script>

<style scoped lang="scss">
@import "scss/ico.scss";
@import "scss/1200.scss";
</style>