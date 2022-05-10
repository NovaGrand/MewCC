<template>
    <div class="documentation" flex>
        <headbar/>
        <sidebar/>
        <wrapper/>
    </div>
</template>

<script>
import headbar from "./headbar"
import sidebar from "./sidebar"
import wrapper from "./wrapper"

export default {
    name: "documentation",
    components:{headbar, sidebar, wrapper},

}
</script>

<style lang="scss">
div.documentation{
    position: relative;
    width: 100vw;
    height: 100vh;
    //padding-top: 55px;
    //background: red;
}
</style>