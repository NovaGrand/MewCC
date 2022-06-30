<template>
    <i :class="[name]"></i>
</template>

<script>
export default {
    name: "mew-icon",
    computed:{
        name(){
            return 'mew-icon-' + this.$slots.default()[0].children
        }
    }
}
</script>