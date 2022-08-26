<script>
import Input from '../components/input' // 文本输入框
import Check from '../components/check' // 勾选或多选框
export default {
    name: "mew-field-inits",
    components: { Input, Check },
    props: {
        value:{ // check 模式下，可以为 checked 赋值
            type:[ String, Number, Boolean ], default:''
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
        placeholder:{
            type: String,
            default: ''
        },
        label:{ // 活动标签，功能与 placeholder 类似，可与 placeholder 共用
            type:[ String, Number ], default:''
        },
        jc:{ type: Boolean, default: false },
        je:{ type: Boolean, default: false },
    },
    created(){
        // let arr = ['bb','bb-xs','bb-sm','bb-md','bb-lg','bb-xl']
        // for(let i=0;i<arr.length;i++)
        //     if(this.$.attrs.hasOwnProperty(arr[i])){
        //         this.snap = true
        //         break
        //     }
    },
    data(){
        return {
            // snap: false
        }
    },
    computed:{
        component(){
            return this.check && !this.select ? 'Check' : 'Input'
            // let comp = {
            //     'Check': this.check,
            //     'Input': this.text || (!this.check && !this.select),
            // }
            // for(let k in comp)
            //     if( comp[k] )
            //         return this.$.components[k]
        },
        snap(){
            let arr = ['bb','bb-xs','bb-sm','bb-md','bb-lg','bb-xl']
            let snap = false
            for(let i=0;i<arr.length;i++)
                if(this.$.attrs.hasOwnProperty(arr[i])){
                    snap = true
                    break
                }
            return snap
        },
        mode(){
            let area = this.area ? ' area': ''
            let vain = (this.invalid || this.disabled) ? 'vain ' : ''
            let snap = this.snap ? ' snap' : ''  // 两端对齐的情况
            let hint = this.label ? ' hint' : '' // 有 label 标签时的情况
            let select = this.select ? ' select' : ''
            let focus  = this.focus ? ' focus': ''
            return area + vain + snap + hint + select + focus
        }
    }
}
</script>

<style lang="scss">
div.mew-field{
    &.area{ // 调整多行输入下的默认内边距
        --pt:7;--pb:7;--pl:11;--pr:3;
    }
    &.vain{ // disabled 的样式
        opacity: .4;
        pointer-events: none;
    }
    &.snap{
        --pl:0;--pr:0;
        --bdrd:0;
    }
    &.hint{
        border-color: transparent;
    }
    &.select{
        &.focus{
            border-bottom-left-radius:0;
            border-bottom-right-radius:0;
            border-bottom-color: transparent;
            &::after{
                display: none;
            }
        }
        &::after{
            color: inherit;
            pointer-events: none;
            position: absolute;content: '▼';top: calc(50% - .4em);right: .6em;
            width: 1em;height: 1em;
            transform: scaleY(.65);
        }

    }
}
</style>
