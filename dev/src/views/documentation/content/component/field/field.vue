<template>
    <div>
        <p>
            <i bold>字段组件默认无样式、无外观的</i>，可组合使用样式属性以实现外观风格。字段组件内置数据校验，可通过自定义函数控制校验规则，
            <i bold>当数据不符合校验规则时，所绑定的字段值将变为 false</i>。Mew 为自定义外观提供最大的可能，无需添加类或修改CSS，利用插槽即可实现自定义外观。
        </p>
        <h2 tag-bar md style="margin-top: 36px">文本输入框</h2>
        <section style="margin-top: 30px" jsb>
            <field wd-sm wd-4 blue ba label="用户名" v-model="sample.val_1"></field>
            <field wd-sm wd-4 blue bb-sm rect placeholder="请输入" v-model="sample.val_2"></field>
            <field wd-sm wd-4 blue bg card-xl inset placeholder="请输入" v-model="sample.val_3"></field>
            <field wd-sm wd-4 red ba round px-md px-2 label="Username" v-model="sample.val_4"></field>
        </section>
        <section style="margin-top: 25px" jsb>
            <field wd-sm wd-4 green darken ba label="备 注" area v-model="sample.val_1"></field>
            <field wd-sm wd-4 blue ba rect disabled placeholder="disabled" v-model="sample.val_2"></field>
            <field wd-sm wd-4 white lighten bg card-md placeholder="请输入" v-model="sample.val_3"></field>
            <div   wd-sm wd-4 flex ht-xs ht-1 round ba ac-10>
                <field fill col-21 pl-md ac-25 placeholder="查 找" v-model="sample.val_4"></field>
                <div fill col-4 black lighten ac-15 nl-xs ac jc pointer bv @click="sample.val_4 = ''" title="清除">
                    <ico >form-close</ico>
                </div>
            </div>
        </section>

        <h2 tag-bar md style="margin-top: 40px">选择输入框</h2>
        <section style="margin-top: 30px" jsb>
            <field wd-sm wd-4 blue ba select v-model="sample.val_5" placeholder="单选框">
                <div v-for="item in items" sm @click="sample.val_5 = item">{{ item }}</div>
            </field>
            <field wd-sm wd-4 red darken ba select text v-model="sample.val_6" placeholder="text red darken ba">
                <div v-for="item in items" sm @click="sample.val_6 = item">{{ item }}</div>
            </field>
            <field wd-sm wd-4 card-xl inset select blue bg v-model="sample.val_7" placeholder="card-xl inset">
                <div v-for="item in items" sm @click="sample.val_7 = item">{{ item }}</div>
            </field>
            <field wd-sm wd-4 card-md select blue round pl-sm pl-6 v-model="sample.val_8" placeholder="card-md blue round">
                <div v-for="item in items" sm @click="sample.val_8 = item">{{ item }}</div>
            </field>
        </section>
        <section style="margin-top: 30px" jsb>
            <field wd-sm wd-4 indigo darken ba select v-model="sample.val_9" placeholder="自定义列表">
                <div @click="sample.val_9 = '你选择了橘子'"><ico mr-sm>food-lemon</ico><i ls-sm>半个<i bold>橘子</i></i></div>
                <div @click="sample.val_9 = '你选择了女神'"><ico md nl-md mr-xs>state-laberty</ico><i red ls-sm>女神来了</i></div>
                <div @click="sample.val_9 = '(っ °Д °;)っ ~~ '" ><i pink darken>(っ °Д °;)っ ~~ </i><ico pink darken>state-bling-twinkle</ico></div>
            </field>
            <field wd-sm wd-4 bb-md bt-md select v-model="sample.val_10" placeholder="bb-md bt-md">
                <div v-for="item in items" sm @click="sample.val_10 = item">{{ item }}</div>
            </field>
            <div ht-xs wd-md wd-17>

            </div>
        </section>

        <h2 tag-bar md style="margin-top: 50px">勾选框 CheckBox</h2>
        <div class="sample">
            <div mt-md mt-5 jsb>
                <div ht-13 round ac ba catskill col-4 pl-sm pl-6 pointer @click.self="sample.val_11 = !sample.val_11">
                    <field check blue round label="默认样式" v-model="sample.val_11"></field>
                </div>
                <div bv catskill ba ac px-md round @click.self="sample.val_12 = !sample.val_12">
                    <field check blue v-model="sample.val_12" xs></field>
                    <field check blue v-model="sample.val_12" sm></field>
                    <field check blue v-model="sample.val_12" md></field>
                    <field check blue v-model="sample.val_12" lg></field>
                    <field check blue v-model="sample.val_12" xl></field>
                    <field check blue v-model="sample.val_12" xl fs-10></field>
                    <field check blue v-model="sample.val_12" xl round></field>
                    <field check blue v-model="sample.val_12" lg round></field>
                    <field check blue v-model="sample.val_12" md round></field>
                    <field check blue v-model="sample.val_12" sm round></field>
                    <field check blue v-model="sample.val_12" xs round></field>
                </div>
                <div round catskill wd-sm wd-15 jsb ba pa-sm @click.self="sample.val_13 = !sample.val_13">
                    <field wd-12 ht-12 check ba blue v-model="sample.val_13" round></field>
                    <field wd-12 ht-12 check ba-md card-xl inset blue v-model="sample.val_13" round></field>
                    <field wd-12 ht-12 check card-xl inset blue v-model="sample.val_13" round></field>
                    <field wd-12 ht-12 check card-xl blue v-model="sample.val_13" round></field>
                    <field wd-12 ht-12 check card-xl red bg v-model="sample.val_13" round></field>
                </div>
            </div>
            <div>
                <span round ba catskill pointer @click.self="sample.val_11 = !sample.val_11">
                    <field check blue round v-model="sample.val_11">
                        <div blue bg ac round py-sm pl-10 pr-20 card-md inset>
                            <ico md mr-3>{{ sample.val_11 ? 'user-lock-opened' : 'user-lock-closed' }}</ico>
                            <i sm ls-md ls-3>自 定 义</i>
                        </div>
                    </field>
                </span>
            </div>
        </div>

        <h2 tag-bar md style="margin-top: 50px">单选框 RadioBox</h2>
        <div ba blue ac-10 flex ac py-sm pl-md bv-md mt-md @click.self="$refs.field.$focus()">
            <div flex fill ac ac-25>
                <div col-3 blue ls-sm sm>当前服务类型:</div>
                <field col-21 ref="field" blue v-model="sample.val_14"></field>
                <div  col-1 pointer @click="sample.val_14 = ''"><ico lg blue>form-close</ico></div>
            </div>
        </div>
        <div mt-md jsb>
            <field check ba-md blue v-model="sample.val_14" value="半日会员">
                <div ac><ico>kit-welcome</ico><i>体验会员</i></div>
            </field>
            <field check ba-md blue v-model="sample.val_14" value="临时会员">
                <div ac><ico>level-award</ico><i>临时会员</i></div>
            </field>
            <field check ba-md blue v-model="sample.val_14" value="半年会员">
                <div ac><ico>level-award</ico><i>半年会员</i></div>
            </field>
            <field check ba-md blue v-model="sample.val_14" value="终身会员">
                <div ac><ico>level-military</ico><i>终身会员</i></div>
            </field>
            <field check ba-md blue v-model="sample.val_14" value="钻石会员">
                <div ac><ico>kit-bnb</ico><i>钻石会员</i></div>
            </field>
            <field check ba-md blue v-model="sample.val_14" value="金币+100">
                <div ac><ico>state-bling-twinkle</ico><i>金币+100</i></div>
            </field>
            <field check ba-md blue v-model="sample.val_14" value="金币+300">
                <div ac><ico>state-bling-rise</ico><i>金币+300</i></div>
            </field>
            <field check ba-md blue v-model="sample.val_14" value="金币+500">
                <div ac><ico>level-star-round</ico><i>金币+500</i></div>
            </field>
        </div>

        <h2 tag-bar md style="margin-top: 50px">时间 日期 和 其他</h2>
        <div mt-md ac jsb wd-md wd-20>
            <field time ba ht-9 v-model="sample.val_15"></field>
            <field date ba ht-9 v-model="sample.val_15"></field>
            <field file ba ht-9 wd-sm wd-3 v-model="sample.val_16"></field>
        </div>

        <h2 tag-bar md style="margin-top: 50px">自定义校验</h2>
        <div>
            <field ba wd-sm wd-10 mt-md blue :validate="验证张三" v-model="张三" placeholder="如果不是张三，值会变为 false"></field>
            <i ml-md>张三：{{ 张三 }}</i>
        </div>
        <div>
            <field ba wd-sm wd-10 mt-md blue :validate="验证李四" v-model="李四" placeholder="如果不是李四，值会变为 false"></field>
            <i ml-md>李四：{{ 李四 }}</i>
        </div>
        <div my-md>
            <btn vanilla blue bg @click="checkValidate">提 交</btn>
        </div>
        <prism lang="html">{{ sampleCode1 }}</prism>
        <prism lang="js">{{ sampleCode2 }}</prism>
        <apiTable title="属 性" :items="props" style="margin-top: 35px"/>
        <apiTable title="事 件" :items="events" style="margin-top: 15px"/>
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
            张三:'',李四:'',
            props:[
                { name:'area', type:'Boolean',default:'false', description:'使输入框变为多行文本框' },
                { name:'select', type:'Boolean',default:'false', description:'使用下拉选择模式，通过插槽(slot)传入选项列表' },
                { name:'text', type:'Boolean',default:'false', description:'在下拉选择模式下使用，使选择框可输入' },
                { name:'check', type:'Boolean',default:'false', description:'checkbox 模式，通过插槽(slot)可替换/关闭默认勾选框' },
                { name:'value', type:'String | Number',default:'false', description:'为 checked 状态指定一个值' },
                { name:'placeholder', type:'String',default:"''", description:'输入/选择模式下的占位符' },
                { name:'label', type:'String',default:"''", description:'标签式占位符，起装饰作用，与部分样式属性有冲突' },
                { name:'password', type:'Boolean',default:"false", description:'隐藏输入的内容' },
                { name:'number', type:'Boolean',default:"false", description:'使输入框只能输入数字' },
                { name:'date', type:'Boolean',default:"false", description:'为输入框添加日期选择器' },
                { name:'time', type:'Boolean',default:"false", description:'为输入框添加当日时间选择器' },
                { name:'file', type:'Boolean',default:"false", description:'与原生的 file 模式相同，不建议生产环境中使用' },
                { name:'validate', type:'Function',default:"null", description:'自定义数据校验，如果绑定的函数有返回值，就会触发“提醒警告"，并将数据变为 false' },
                { name:'require', type:'Boolean',default:"false", description:'校验空字符串，包含空格、换行符等，一般用于必填校验' },
                { name:'username', type:'Boolean',default:"false", description:'校验特殊字符，一般用于用户名注册校验' },
                { name:'email', type:'Boolean',default:"false", description:'校验数据是否符合邮件格式，一般用于注册邮箱校验' },
                { name:'min', type:'String | Number',default:"''", description:'字段最小长度校验' },
                { name:'max', type:'String | Number',default:"''", description:'字段最大长度校验' },
                { name:'disabled', type:'Boolean',default:"false", description:'禁用该字段组件' },
                { name:'invalid', type:'Boolean',default:"false", description:'同 disabled' },
            ],
            events:[
                { name:'@change', args:'Undefined', description:'数据改变后，通过 enter 键或 blur 事件触发，仅在输入框模式下生效' },
                { name:'@input', args:'Undefined', description:'只有按键输入才会触发，与数据是否改变无关，仅在输入框模式下生效' },
                { name:'@focus', args:'Undefined', description:'输入框独有事件' },
                { name:'@blur', args:'Undefined', description:'输入框独有事件' },
            ],
            value:'',
            label:'用户名',
            items:[
                '耳熟能详的张三','义薄云天的李四','名冠天下的王五'
            ],
            sample:{
                val_1:'',val_2:'',val_3:'',val_4:'',val_5:'',val_6:'',val_7:'',val_8:'',val_9:'',val_10:'',
                val_11:true,val_12:'',val_13:'',val_14:'半年会员',val_15:'',val_16:'',val_17:'',val_18:'',val_19:'',val_20:'',
            },
            sampleCode1:`<template>
    <field blue ba v-model="张三" :validate="验证张三"></field>
    <field blue ba v-model="李四" :validate="验证李四"></field>
    <btn vanilla blue bg @click="check">提 交</btn>
</template>`,
            sampleCode2:`<script>
    export default {
        methods:{
            验证张三(val){
                if(val !== '张三')
                    return '这不是“张三“'
            },
            验证李四(val){
                if(val !== '李四')
                    return '这不是“李四“'
            },
            check(){
                if(!this.张三)
                    this.$notify.caution('张三未通过验证')
                else if(!this.李四)
                    this.$notify.caution('李四未通过验证')
                else
                    this.$notify.success('验证通过！')
            }
        }
    }
<\/script>`
        }
    },
    watch:{
        value(val){
            // console.log(val)
        }
    },
    methods:{
        aa(){
            console.log('aa')
        },
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
        },
        验证张三(val){
            if(val.trim() !== '张三')
                return '请输入“张三“'
        },
        验证李四(val){
            if(val.trim() !== '李四')
                return '请输入“李四“'
        },
        checkValidate(){
            if(!this.张三)
                this.$notify.caution('张三未通过验证')
            else if(!this.李四)
                this.$notify.caution('李四未通过验证')
            else
                this.$notify.success('验证通过！')
        }
    }
}
</script>

<style lang="scss">


</style>