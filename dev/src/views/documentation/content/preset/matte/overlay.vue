<template>
    <div class="doc-matte">
        <h2 tag-bar lg>Loading & Pending 蒙版</h2>
        <samp_1/>
        <p style="margin-top: 30px">
            蒙版用于屏蔽用户对页面的点击，例如，用户付款时，使用蒙版可迫使用户停留在当前位置，避免误操作。
            蒙版是全局的、唯一的、由系统控制的，<i bold>蒙版用于跳过响应检查，冻结用户操作，</i>绕过异常处理。$loading 与 $pending 接口相同：
        </p>
        <prism style="margin-top: 25px">
            <pre>
this.$loading.valid = true      // loading 蒙版的开关，当此值为 false 时，会自动重置其他属性

this.$loading.color = 'red'     // 修改颜色，可以是任意 CSS 颜色
this.$loading.image = './img'   // 传入图片地址(src)，用图片替代图标和文字
this.$loading.icon  = 'doc-file'// 用图标替代文字
this.$loading.text  = 'Loading' // 设置显示的文本,默认 'Loading'
this.$loading.size  = 1         // 控制 loading 动画的尺寸，0.1 为缩小10%，1.5 为放大 1.5 倍
this.$loading.target = el       // 改变蒙版的父元素，一般不建议修改，默认 document.body

// 点击事件，通过 next 属性为蒙版添加响应函数
this.$loading.next = () => {
     this.$loading.valid = false
}

// 配置文件，蒙版关闭后按配置重置，未配置的选项不会被重置
this.$loading.config = { color:'white', target: this.$refs.screen }
</pre>
        </prism>
        <div xs message mt-sm>蒙版是全局唯一的，蒙版只能同时存在于一个元素内，如果希望同时使用多个 loading，请使用元素指令 v-loading</div>
        <div grey dashed bb alpha-10 my-lg></div>
        <h2 tag-bar lg style="margin-top: 40px">状态 & 交互指引</h2>
        <p>
            $pending 样式风格更倾向于 ToB，其他功能与 $loading 完全一样。当蒙版被过多使用时，通过两种蒙版交替使用，减轻用户的疲惫感。
            蒙版在开启状态下，可任意修改属性，以提供不同的状态和指引。
        </p>
        <samp_2 style="margin-top: 30px"/>
        <prism style="margin-top: 0px">
            <pre>
mounted(){
    let arr = [
        { text:'',color:'#ffd942', icon:'auth-analysis',next: ()=>{} },
        { text:'数据同步', color:'#23c4ff', icon:'',next: null },
        { text:'状态良好', color:'#00ff48', icon:'state-note-done',next: ()=>{} }
    ]
    let n = 0
    this.$pending.target = 目标元素
    setInterval(()=>{
        for(let key in arr[n]){
            this.$pending[key] = arr[n][key]
        }
    },3000)
}</pre>
        </prism>
    </div>
</template>

<script>
import samp_1 from './components/samp_1'
import samp_2 from './components/samp_2'
import img_1 from '@/assets/flag.jpg'
export default {
    name: "overlay",
    mounted(){

        // this.$pending.image = img_1
        // this.$pending.icon = 'face-satisfied'
        // this.$pending.next = true
        // this.$pending.valid = true

    },
    components:{
        samp_1, samp_2
    },
    data(){
        return {

        }
    },
    methods:{

    }
}
</script>

<style scoped lang="scss">
div.doc-matte{


}


</style>