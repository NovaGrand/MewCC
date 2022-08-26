<template>
    <div>
        <h2 lg ls-sm>Field 组件</h2>
        <div class="sample" mb-lg>
            <div ac ht-sm style="position: relative;z-index: 1">
                <field v-model="value" ref="field" ba blue select>
                    <div style="background-color: white" @click="value=111111">111111</div>
                    <div style="background-color: white" @click="value=222222">222222</div>
                    <div style="background-color: white" @click="value=333333">333333</div>
                    <div style="background-color: white" @click="value=444444">444444</div>
                    <div style="background-color: white" @click="value=555555">555555</div>
                    <div style="background-color: white" @click="value=666666">666666</div>
                </field>
                <btn @click="value += '0'" ml-sm vanilla blue bg>提 交</btn>
            </div>
            <div my-xl red bg>对方拉风拉风了怕</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "doc-field",
    mounted(){
        // document.body.addEventListener('click',(e)=>{
        //     e.stopPropagation()
        // },true)
        // setInterval(()=>{
        //     // this.label += 'A'
        //     this.value += 1
        // },1000)
    },
    data(){
        return {
            value:'用户名Arcadia',
            label:'用户名',
        }
    },
    watch:{
        value(val){
            console.log(val)
        }
    },
    methods:{
        aa(){
            console.log(1)
        }
    }
}
</script>

<style lang="scss">


</style>