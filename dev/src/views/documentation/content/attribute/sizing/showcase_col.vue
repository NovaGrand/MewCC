<template>
    <div class="doc-sizing-showcase_col">
        <div flex>
            <i class="grid col-1" v-for="n in 25">
                <i class="n">{{ n }}</i>
            </i>
        </div>
        <div flex>
            <i class="grid col-1">A</i>
            <i class="grid col-4"></i><i class="grid col-4"></i><i class="grid col-4"></i><i class="grid col-4"></i><i class="grid col-4"></i><i class="grid col-4"></i>
        </div>
        <div flex>
            <i class="grid col-1">B</i>
            <i class="grid col-8"></i><i class="grid col-8"></i><i class="grid col-8"></i>
        </div>
        <div flex>
            <i class="grid col-1">C</i>
            <i class="grid col-24"></i>
        </div>
    </div>
</template>

<script>
export default {
name: "doc-sizing-showcase_col"
}
</script>

<style lang="scss">
div.doc-sizing-showcase_col{
    i.grid{
        vertical-align: top;
        font-size: 14px;
        background-color: #f4fbff;
        width: 36px;height: 36px;
        line-height: 35px;
        border: .5px solid rgba(0,0,0,.06);
        text-align: center;
        //i.n{
        //    display: block;
        //    overflow: visible;
        //    text-wrap: none;
        //    width: 50px;
        //    transform: scale(.6) translateX(-13px);
        //}
        &.col-1{
            width: 4%;
        }
        &.col-4{
            width: 16%;
        }
        &.col-8{
            width: 32%;
        }
        &.col-24{
            width: 96%;
        }
    }
}

</style>