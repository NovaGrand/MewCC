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
    color: rgba(0,0,0,.5);
    i.grid{
        vertical-align: top;
        font-size: 14px;
        background-color: rgba(220,240,255,.8);
        width: 36px;height: 36px;
        line-height: 35px;
        border: .5px solid rgba(0,0,0,.06);
        text-align: center;
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