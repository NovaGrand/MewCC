<template>
    <div class="mew-btn" :class="{ vanilla: vanilla, disabled: disabled, foo: n === 1, bar: n === 2 }" @click="click">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "mew-btn",
    emits: ['click'],
    props:{
        disabled:{
            type:Boolean,
            default: false
        },
        vanilla:{
            type:Boolean,
            default: false
        }
    },
    data(){
        return {
            t: null,
            n: 0
        }
    },
    methods:{
        click(){
            this.n = this.n === 1 ? 2 : 1
            this.t = setTimeout(()=>{
                clearTimeout(this.t)
                this.t = null
                this.$emit('click')
            },200)
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'scss/btn.scss';
</style>