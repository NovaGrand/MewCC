<template>
    <router-view/>
</template>

<script>
export default {
    name:'App',
    mounted(){
        if(!window.location.pathname.includes('/doc/theme')){
            this.$nextTick(()=>{
                this.$color.theme = 'light'
            })
        }
    }
}
</script>

<style lang="scss">

div#app{
    height: 100%;
}
</style>

