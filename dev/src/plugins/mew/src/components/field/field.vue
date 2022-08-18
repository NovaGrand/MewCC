<template>
<!--    chars items check props-->
    <div class="mew-field" inline-block>
        <component is="chars"/>
    </div>
</template>

<script>
import chars from './components/chars'
export default {
    name: "mew-field",
    components: { chars },
    props: {
        modelValue:{
            type:[ String, Boolean, Number ],
            default: ''
        },
        text:{
            type: Boolean,
            default: false
        },
        area:{
            type: Boolean,
            default: false
        },
        check:{
            type: Boolean,
            default: false
        },
        select:{
            type: Boolean,
            default: false
        },
        disabled:{
            type: Boolean,
            default: false
        },
        placeholder:{
            type: String,
            default: ''
        }
    },
    provide() {
        return {
            field: this
        }
    },
    emits: ['update:modelValue'],
    data(){
        return {
            value:''
        }
    },
    methods:{
        update(val){
            this.$emit('update:modelValue', val)
        }
    }
}
</script>

<style scoped lang="scss">
div.mew-field{
    position: relative;
    input{
        //background-color: transparent;
    }
    textarea{
        //border: none;
        //outline: none;
    }
}
</style>