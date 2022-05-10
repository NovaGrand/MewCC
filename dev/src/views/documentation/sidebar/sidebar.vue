<template>
    <div class="sidebar">
        <p>sidebar</p><p>sidebar</p><p>sidebar</p><p>sidebar</p><p>sidebar</p><p>sidebar</p><p>sidebar</p><p>sidebar</p><p>sidebar</p><p>sidebar</p><p>sidebar</p><p>sidebar</p><p>sidebar</p><p>sidebar</p>
    </div>
</template>

<script>
export default {
name: "sidebar"
}
</script>

<style scoped lang="scss">
div.sidebar{
    border-right: 1px solid #d3d3d3;
    width: 33vw;
    height: 100%;
    direction: rtl;
    padding-top: 55px;
    overflow-y: scroll;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
    position: relative;
    &::-webkit-scrollbar{
        width: 0;
    }
    //&::after{
    //    position: fixed;content: '';display: inline-block;right: 0;top: 0;
    //    height: 100%;
    //    width: .5px;
    //    background-color: #d3d3d3;
    //}
    p{
        margin: 0 0 150px 0;
    }
}

</style>