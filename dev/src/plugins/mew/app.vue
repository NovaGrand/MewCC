<template>
    <matte/>
    <!--消息容器-->
    <notify/>
</template>

<script>
import matte from "./src/components/matte"
import notify from './src/components/notify'

export default {
    name: "app",
    components:{
        matte, notify
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