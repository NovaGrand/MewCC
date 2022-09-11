<template>
    <div class="documentation" flex>
        <headbar :stat="stat"/>
        <sidebar :stat="stat"/>
        <wrapper/>
        <div class="eventMask" v-if="stat.drawer && $global.mobile" @click.self="stat.drawer = false"></div>
    </div>
</template>

<script>
import headbar from "./headbar"
import sidebar from "./sidebar"
import wrapper from "./wrapper"

export default {
    name: "documentation",
    components: { headbar, sidebar, wrapper },
    data(){
        return {
            stat:{
                drawer: false
            }
        }
    },

}
</script>

<style lang="scss">
div.documentation{
    position: relative;
    width: 100vw;
    height: 100vh;
    padding: 65px 0 0 0;
    div.eventMask{
        position: absolute;right: 0;top: 0;
        width: 100vw;height: 100vh;
    }
}
</style>