<template>
    <div class="wrapper">
        <div class="constraint">
            <router-view/>
        </div>
    </div>
</template>

<script>
export default {
name: "wrapper"
}
</script>

<style scoped lang="scss">
div.wrapper{
    width: 64vw;
    height: calc(100vh - 65px);
    overflow-y: scroll;
    padding: 20px;
    @media(max-width: 1200px){
        width: 70vw;
    }
    @media(max-width: 1000px){
        width: 78vw;
    }
    @media(max-width: 800px){
        width: 100vw;
        padding: 5px;
    }
    div.constraint{
        max-width: 900px;
    }
}

</style>