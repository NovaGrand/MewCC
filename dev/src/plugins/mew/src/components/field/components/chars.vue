<template>
    <input fill v-model="value" @input="field.update(value)">
    <!--        <textarea fill required name="" id="" cols="40" rows="5"></textarea>-->
</template>

<script>
export default {
    name: "mew-chars",
    inject: ['field'],
    data(){
        return {
            value:''
        }
    },
}
</script>

<style scoped>

</style>