<template>
    <div class="doc-message">
        <div class="showcase" noselect>
            <div class="sample" flex jsb style="margin-bottom: 10px">
                <toast style="width: 360px;margin: 0 5px 0 0"
                    color="blue"
                    title="消息"
                    :stick="true"
                    text="这是一个消息通知 !"
                    icon="state-hint-caution"
                />
                <toast style="width: 360px;margin: 0 5px"
                       color="green"
                       title="完成"
                       :stick="true"
                       text="这是一个成功通知 !"
                       icon="state-hint-achieve"
                />
                <toast style="width: 360px;margin: 0 0 0 5px"
                       color="yellow"
                       title="注意"
                       :stick="true"
                       text="这是一个注意通知 !"
                       icon="state-hint-warning"
                />
            </div>
            <div class="sample" flex jsb style="margin-bottom: 10px">
                <toast style="width: 360px;margin: 0 5px 0 0"
                       color="red"
                       title="错误"
                       :stick="true"
                       text="这是一个错误通知 !"
                       icon="state-hint-bad"
                />
                <toast style="width: 360px;margin: 0 5px"
                       color="pink"
                       title="粉色"
                       :stick="true"
                       text="这是一个粉色的通知 ..."
                       icon="user-favorite-fill"
                />
                <toast style="width: 360px;margin: 0 0 0 5px"
                       color="purple"
                       title="紫色"
                       :stick="true"
                       text="这是一个紫色的通知 ..."
                       icon="state-bling-twinkle"
                />
            </div>
            <div class="sample" flex jsb style="margin-bottom: 10px">
                <toast style="width: 360px;margin: 0 5px 0 0"
                       color="orange"
                       title="橙色"
                       :stick="true"
                       text="这是一个橙色的通知 ..."
                       icon="food-lemon"
                />

                <toast style="width: 360px;margin: 0 5px"
                       color="cyan"
                       title="青色"
                       :stick="true"
                       text="这是一个青色的通知 ..."
                       icon="mail-notify-round"
                />
                <toast style="width: 360px;margin: 0 0 0 5px"
                       color="catskill"
                       title="Catskill"
                       :stick="true"
                       text="这是一个 Catskill 通知 ..."
                       icon="ui-org-dot"
                />
            </div>
            <div class="sample" flex jsb style="margin-bottom: 10px">
                <toast style="width: 360px;margin: 0 5px 0 0"
                       color="black"
                       title="黑色"
                       :stick="true"
                       text="这是一个黑色通知 ..."
                       icon="kit-miota"
                />
                <toast style="width: 360px;margin: 0 5px"
                       color="grey"
                       title="灰色"
                       :stick="true"
                       text="这是一个灰色的通知 ..."
                       icon="kit-voiceprint"
                />
                <toast style="width: 360px;margin: 0 0 0 5px"
                       color="white"
                       title="白色"
                       :stick="true"
                       text="这是一个白色的通知 ..."
                       icon="state-hint-info"
                />

            </div>
            <div class="sample" flex jsb style="margin-bottom: 10px">
                <toast style="max-width: 293.3px;margin: 3px 5px 0 0;border-radius: 100px;border: 3px solid #ffaa00;box-shadow: 0 0 0 3px black"
                       class="doc-message-dadwa"
                       color="black"
                       title="自定义"
                       :stick="true"
                       text="这是一个自定义样式的通知 ..."
                       icon="state-hint-info"
                       :close="false"
                />
                <toast style="width: 360px;margin: 0 5px"
                       :stick="true"
                       text="这是一个多行文本通知示例 ... 各国都在不断改进提高政策，在关系上，力求完善。"
                       icon="state-note-signal"
                />
                <toast style="max-width: 293.3px;margin: 0 0 0 5px"
                       text="纯文本消息"
                       :icon="false"
                       :stick="true"
                       :close="false"
                />
            </div>
        </div>
        <div class="border"></div>
        <div flex class="box">
            <span class="btn left" @click="showSamples">点击预览</span>
            <span class="btn right" @click="$notify.clear()">清空</span>
        </div>
        <div mt-sm>
            <prism lang="js" bevel style="margin-top: 20px"><pre><code>// 预定义消息框
this.$notify.message('This is a message')
this.$notify.success('This is a success')
this.$notify.caution('This is a caution')
this.$notify.failure('This is a failure')

// 自定义消息框
this.$notify({
    color: '', // 字符串，可以使用样式属性中的预定义颜色，默认是 blue
    title: '', // 字符串、布尔，默认是空
    delay: 4,  // 整数，消息存在时间，默认是 4
    stick: false, // 布尔，消息框是否一直存在
    close: true,  // 布尔，是否显示关闭图标
    class: 'foo bar', //字符串，自定义类名
    style: '' // 字符串，用于特殊情况下的样式
    text: '', // 字符串，提示框的主要内容，默认是 This is a message
    icon: '', // 字符串、布尔，使用预定义图标或用 false 关闭图标显示
})
</code></pre></prism>
        </div>
    </div>
</template>

<script>
import toast from './toast'
import configs from "./configs";
export default {
    name: "doc-message",
    components:{
        toast
    },
    data(){
        return {
            configs,
            n:0
        }
    },
    mounted(){
        // this.$notify.message()
        // this.$notify.success()
        // this.$notify.caution()
        // this.$notify.failure()
        // this.$notify({
        //     color:'lake',
        //     stick:true
        // })
    },
    methods:{
        showSamples(){
            let cfg = this.configs[this.n]
            cfg.stick = true
            this.$notify(cfg)
            this.n ++
            if(this.n === this.configs.length )
                this.n = 0
        }
    }
}
</script>
<style lang="scss">
li.doc-message-dadwa{
    i.mew-toast-icon{
        transform: translateY(11px);
        color: #ffd400;
        opacity: 1;
    }
}
</style>
<style scoped lang="scss">

div.doc-message{
    div.showcase{
        position: relative;
        transform: scale(.7);
        transform-origin: top center;
        //&::after{
        //    position: absolute;
        //    left: 45px;top: 55px;content: '';display: inline-block;
        //    width: 800px;height: 300px;
        //    border-radius: 100%;
        //    filter: blur(70px);
        //}
        div.sample{
            position: relative;z-index: 1;
        }
    }
    div.border{
        border-bottom: .5px solid rgba(0,0,0,.2);
        margin: 40px 0;
    }
    div.box{
        box-shadow: 0 2px 2px rgba(0,0,0,.2), 0 0 3px rgba(0,0,0,.2);
        display: inline-block;
        border-radius: 8px;
        span.btn{
            color: white;
            text-align: center;
            background-color: #007bff;
            height: 38px;width: 120px;
            line-height: 37px;
            letter-spacing: 1px;
            transform: translateY(0px);
            cursor: pointer;
            &:active{
                transform: translateY(0.5px);
            }
            &.left{
                border-right: 1px solid rgba(0,0,0,.6);
                border-radius: 8px 0 0 8px;
            }
            &.right{
                border-radius: 0 8px 8px 0;

            }
        }
    }
}
</style>