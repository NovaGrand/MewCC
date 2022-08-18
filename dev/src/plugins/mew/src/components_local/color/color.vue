<template>
    <div class="mew-color" v-if="false"></div>
</template>
<script>
import { color } from '../../../mew'
export default {
    name: "mew-color",
    mounted(){
        document.body.setAttribute('mew-theme','light')
    },
    data(){
        return {
            color
        }
    },
    watch:{
        'color.theme': function (val){
            document.body.setAttribute('mew-theme',val)
        }
    }
}
</script>
