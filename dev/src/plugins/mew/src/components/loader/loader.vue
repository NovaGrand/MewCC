<template>
    <transition name="fade">
        <div class="mask" v-if="loading.valid">
            <div class="loading" :style="'--CLR:' + loading.color">
                <div class="partten">
                    <i v-if="useText" class="text">{{ loading.text }}</i>
                    <img v-else-if="loading.image" :src="loading.image">
<!--                    <icon v-else>{{ loading.icon }}</icon>-->
                </div>
                <div class="spinner">
                    <svg viewBox="25 25 50 50"><circle cx="50" cy="50" r="1em" fill="none"></circle></svg>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { loading } from '../../../mew'

export default {
    name: "loader",
    mounted(){

    },
    data(){
        return {
            loading
        }
    },
    computed:{
        useText(){
            return !this.loading.icon && !this.loading.image
        }
    },
    watch:{
        'loading.valid': function(val){
            console.log('loading: ' + val)
        },
    },
}
</script>
