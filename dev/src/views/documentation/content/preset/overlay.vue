<template>
    <div>
        <div class="state-error"></div>
        <div my-md>
            Loading: {{ $loading.valid }}
        </div>
        <button @click="change" px-sm py-xs border>Change</button>
        <hr my-md>
<!--        <div my-md>-->
<!--            Pending: {{ $loading }}-->
<!--        </div>-->
<!--        <button @click="$loading.valid = 111" px-sm py-xs border>Change</button>-->
<!--        <hr my-md>-->
    </div>
</template>

<script>
import img from '@/assets/logo.png'
export default {
    name: "overlay",
    setup(){
        return {

        }
    },
    created(){
    },
    mounted(){
    },
    data(){
        return {

        }
    },
    methods:{
        change(){
            this.$loading.valid = !this.$loading.valid

            setTimeout(()=>{
                // this.$loading.image = img
            },1000)
            // setTimeout(()=>{
            //     this.$loading.color = 'green'
            // },2000)
        }
    }
}
</script>

<style scoped lang="scss">
@font-face {
    font-family: 'mew';
    src:url('mew.ttf') format('truetype')
}
.state-error:before {
    content: "%uE55F%uE39D%uE00D";
}
div.test{
    font-family: 'mew';
}


</style>