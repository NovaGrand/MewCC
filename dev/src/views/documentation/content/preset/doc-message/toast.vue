<template>
    <li flex relative class="mew-toast" :class="{ pl: icon, pr: close, title: title }"
        :style="sheet"
        @mouseenter="hold = true"
        @mouseleave="hold = false"
    >
        <i class="mew-toast-icon" :class="['mew-icon-' + icon]" v-if="icon"></i>
        <div class="mew-toast-ctx" flex column>
            <i class="mew-toast-title" v-if="title">
                {{ title }}
            </i>
            <i class="mew-toast-texts">
                {{ text }}
            </i>
        </div>
        <i class="mew-icon-form-close" v-if="close" @click="$emit('remove')"/>
    </li>
</template>

<script>
import colors from './colors'
export default {
    name: "mew-toast",
    emits:['remove'],
    data(){
        return {
            hold: false,
            timer: null,
            secs: 0,
        }
    },
    mounted(){
        if(!this.stick){
            this.secs = parseInt(this.delay)
            this.timer = setInterval(()=>{
                if(!this.hold){
                    this.secs -= 1
                    if(this.secs <= 0)
                        this.$emit('remove')
                }
            },1000)
        }
    },
    beforeUnmount(){
        clearInterval(this.timer)
    },
    computed:{
        theme(){
            return this.color ? colors[this.color] : false
        },
        sheet(){
            return this.theme ? 'color:' + this.theme.fontColor + ';background-color:' + this.theme.backgroundColor : ''
        }
    },
    props:{
        color:{
            type: String,
            default: ''
        },
        title:{
            type: [String, Boolean],
            default: ''
        },
        close:{
            type: Boolean,
            default: true
        },
        delay:{
            type: Number,
            default: 4
        },

        stick:{
            type: Boolean,
            default: false
        },
        icon:{
            type: [String, Boolean],
            default:'state-hint-achieve'
        },
        text:{
            type: String,
            default: 'This is a message'
        },
        center:{
            type: Boolean,
            default: false
        }
    }
}
</script>

