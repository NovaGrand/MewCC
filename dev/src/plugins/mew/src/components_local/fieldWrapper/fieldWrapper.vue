<template>
    <div id="mew-field-wrapper" :class="{ valid: selecting.valid }"
         @click.self="unload"
         @mousewheel.self="unload"
    >
        <div ref="shadow"></div>
    </div>
</template>

<script>
import { selecting } from '../../../mew'
export default {
    name: "mew-field-wrapper",
    mounted(){
        this.selecting.wrapper = this.$el
        this.selecting.shadow = this.$refs.shadow
    },
    data(){
        return {
            selecting
        }
    },
    methods:{
        unload(){
            this.selecting.valid = false
            this.selecting.keepFocus = false
        }
    }
}
</script>

<style lang="scss">
div#mew-field-wrapper{
    position: absolute;top: 0;left: 0;
    pointer-events: none;width: 0;height: 0;
    &.valid{
        pointer-events: auto;
        width: 100vw;height: 100vh;
    }
}
</style>