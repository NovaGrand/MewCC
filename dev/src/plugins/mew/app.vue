<template>
    <loader/>
    <!--蒙版容器-->
    <overlay/>
    <!--消息容器-->
    <notify/>
</template>

<script>
import loader from "./src/components/loader"
import overlay from './src/components/overlay'
import notify from './src/components/notify'

export default {
    name: "app",
    components:{
        loader, overlay, notify
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
@import "src/scss/app";
</style>