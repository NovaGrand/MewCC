<template>
    <!--主题颜色-->
    <color/>
    <!--蒙版容器-->
    <matte/>
    <!--消息容器-->
    <notes/>
</template>

<script>
import matte from "./src/components_local/matte"
import color from './src/components_local/color'
import notes from './src/components_local/notes'
export default {
    name: "app",
    components:{
        matte, color, notes
    },
    mounted() {

    },
    data(){
        return {

        }
    },

}
</script>

<style lang="scss">
div#mew{
    position: fixed;top: 0;left: 0;
    div.mew-vid{
        height: 100vh!important;
        width: 100vw!important;
    }
}
</style>