<template>
    <loader/>
</template>

<script>
import loader from "./src/components/loader";
export default {
    name: "app",
    components:{
        loader
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