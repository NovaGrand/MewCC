<template>
    <div>
        <input type="text" :v-model="value">
    </div>
</template>

<script>
export default {
name: "test",
    data(){
        return {
        }
    },
    props:['value']
}
</script>

<style scoped>

</style>