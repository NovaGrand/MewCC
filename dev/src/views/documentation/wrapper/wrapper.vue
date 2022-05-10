<template>
    <div class="wrapper">
        <router-view/>
    </div>
</template>

<script>
export default {
name: "wrapper"
}
</script>

<style scoped lang="scss">
div.wrapper{
    width: 67vw;
    height: 100%;
    overflow-y: scroll;
    padding-top: 55px;
}

</style>