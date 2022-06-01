<template>
    <div>
        Start
        <div xs>
            <div class="iconBox">
                <ico>{{ ico }}</ico>
            </div>
            <div class="textBox" >
                <i>Arcadia_daw53 </i>
            </div>
        </div>
        <div sm>
            <div class="iconBox">
                <ico>{{ ico }}</ico>
            </div>
            <div class="textBox" >
                <i>Arcadia_daw53 </i>
            </div>
        </div>
        <div md>
            <div class="iconBox">
                <ico>{{ ico }}</ico>
            </div>
            <div class="textBox" >
                <i>Arcadia_daw53 </i>
            </div>
        </div>
        <div lg>
            <div class="iconBox">
                <ico>{{ ico }}</ico>
            </div>
            <div class="textBox" >
                <i>Arcadia_daw53 </i>
            </div>
        </div>
        <div xl>
            <div class="iconBox">
                <ico>{{ ico }}</ico>
            </div>
            <div class="textBox" >
                <i>Arcadia_daw53 </i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: "quick_start",
    data(){
        return {
            ico:'level-star-round',
        }
    },
    mounted(){
        setTimeout(()=>{
            this.ico = 'pay-credit'
        },1000)
    }
}
</script>

<style scoped lang="scss">
div.iconBox{
    display: inline-block;
    //font-size: 19px;
}
div.textBox{
    display: inline-block;
}
</style>