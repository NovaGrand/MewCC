<template>
    <div class="showcase_list" >
        <div class="box">
            <div class="cyan"></div>
            <div class="yellow"></div>
            <div class="bg" foo baz></div>
        </div>
        <div class="samp" @click="copy('foo')" ac pl-lg pointer foo style="margin-top: 0"><i grey darken bg px-md py-xs round xs>foo</i></div>
        <div class="samp" @click="copy('bar')" ac pl-lg pointer bar ><i grey darken bg px-md py-xs round xs>bar</i></div>
        <div class="samp" @click="copy('baz')" ac pl-lg pointer baz ><i grey darken bg px-md py-xs round xs>baz</i></div>
        <div class="samp" @click="copy('ect')" ac pl-lg pointer ect ><i grey darken bg px-md py-xs round xs>ect</i></div>
        <div class="samp" @click="copy('foo bar')" ac pl-lg pointer foo bar ><i grey darken bg px-md py-xs round xs>foo bar</i></div>
    </div>
</template>

<script>
export default {
name: "showcase_list",
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
div.showcase_list{
    margin-top: 2px;
    position: relative;
    div.box{
        position: absolute;left: 0;top: 0;
        width: 100%;height: 100%;overflow: hidden;
        div.cyan{
            position: absolute;z-index: 0;background-color: #00cae5;
            height: 1000px;width: 1000px;
            transform:rotate(45deg);
            left: -470px;top: -320px;
            box-shadow:0 0 20px rgba(0,0,0,.2), 0 0 30px rgba(0,0,0,.3);
        }
        div.yellow{
            position: absolute;z-index: -1;background-color: #FFEB3B;
            height: 1000px;width: 1000px;
            transform:rotate(45deg);
            left: -313px;top: -320px;
            box-shadow:0 0 20px rgba(0,0,0,.2), 0 0 30px rgba(0,0,0,.3);
        }
        div.bg{
            position: absolute;left: 0;top: 0;width: 100%;height: 100%;z-index: -5;
        }
    }
    div.samp{
        position: relative;z-index: 10;
        margin: 2px 0;
        height: 70px;
        transition: transform .2s ease;
        &:hover{
            transform: scale(0.99);
        }
    }
}
</style>