<template>
    <div class="headbar">
        headbar
    </div>
</template>

<script>
export default {
name: "headbar"
}
</script>

<style scoped lang="scss">
div.headbar{
    border-bottom: 1px solid #d3d3d3;
    position: absolute;top: 0;
    height: 55px;
    width: calc(100% - 17px);
    background-color: white;
    z-index: 1;
}
</style>