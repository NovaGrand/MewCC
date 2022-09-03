<template>
    <div>
        <h2 lg ls-sm>Field 组件</h2>
        <div class="sample" mb-lg>
            <div ac ht-sm>
                <field v-model="value" ref="field" blue ba require @blur="blur">
                    <div v-for="item in items" @click="value=item">{{ item }}</div>
                </field>
                <btn @click="click" ml-sm vanilla blue bg>提 交</btn>
            </div>
        </div>
        <apiTable title="事 件" :items="events" style="margin-top: 35px"/>
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
        setTimeout(()=>{
            this.items = [111,222,333,444,555,666]
        },500)
    },
    data(){
        return {
            events:[
                { name:'@change', args:'Undefined', description:'text 模式下的事件，数据改变后，通过 enter 键或 blur 事件触发' },
                { name:'@input', args:'Undefined', description:'text 模式下的事件，只有按键输入才会触发，与数据是否改变无关' },
            ],
            value:'',
            label:'用户名',
            items:[

            ],
        }
    },
    watch:{
        value(val){
            // console.log(val)
        }
    },
    methods:{
        input(){
            console.log('input')
        },
        change(){
            console.log('change')
        },
        click(){
            console.log(this.value)
        },
        blur(){
            console.log('blur')
        }
    }
}
</script>

<style lang="scss">


</style>