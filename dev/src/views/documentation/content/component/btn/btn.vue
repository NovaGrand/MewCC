<template>
    <div class="doc-btn">
        <section>
            <div class="dawda1dw1" ht-xs ht-20 top bv-xl ac px-lg jsb style="background-color: #4B5050">
                <btn golden bg vanilla>Vanilla</btn>
                <btn blue bg jc>Default</btn>
                <btn green lighten bg card ac>
                    <ico italic nl-xl nl-6>pay-wallet</ico>
                    <i italic bold>Card</i>
                </btn>
                <btn green lighten ba ac px-md>
                    <ico nl-xl nl-6>state-bling-twinkle</ico>
                    <i sm ls-xs>Outlined</i>
                </btn>

                <btn white>Plain text</btn>
                <btn blue lighten bg disabled>Disabled</btn>
            </div>

            <div class="dawda1dw1" ht-xs ht-20 white bg bottom bv-xl ac px-lg jsb>
                <btn foo baz vanilla round>Vanilla</btn>
                <btn red lighten bg round disabled px-xs wd-xs wd-2>Disabled</btn>
                <btn white lighten bg card ac>
                    <ico italic nl-xl nd-xs mr-xs>auth-analysis</ico>
                    <i italic bold>Card</i>
                </btn>
                <div jsb ac wd-md wd-12>
                    <div js>
                        <btn style="margin: 10px 0" wd-19 ht-7 jc ac blue darken ba round xs left>LEFT</btn>
                        <btn style="margin: 10px 0" wd-19 ht-7 jc ac blue darken bt bb xs rect>RECT</btn>
                        <btn style="margin: 10px 0" wd-19 ht-7 jc ac blue darken ba round xs right>RIGHT</btn>
                    </div>
                    <div jc>
                        <btn ml-xs ml-15 black ba ac jc round pa-xs><ico lg>btn-video-round</ico></btn>
                        <btn ml-xs ml-15 grey darken bg ac jc round pa-xs><ico lg>level-upgrade</ico></btn>
                        <btn ml-xs ml-15 black bg dense ac jc bv-xl pa-xs><ico lg nd-xs red lighten>btn-video-youtube</ico></btn>
                    </div>
                </div>
            </div>
        </section>
        <h2 bold lg style="margin-top: 30px">按钮组件</h2>
        <section style="margin-top: 10px">
            <p>btn 组件有默认内边距，按钮可完全由样式属性控制，
                例如可以用字体大小属性 <q>xs</q> <q>sm</q> <q>md</q> <q>lg</q> <q>xl</q> 控制按钮的大小，可以用 <q>wd-lg</q> 控制按钮的宽度，可以用 <q>red bg</q> 使按钮变为红色等等。</p>
        </section>
<!--        <div jc bv-xl black bg lighten card pa-lg style="margin-top: 15px;height: 250px">-->
<!--            <p>-->
<!--                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.-->
<!--            </p>-->
<!--        </div>-->
        <apiTable :items="api" style="margin-top: 35px"/>
        <p xs message style="margin-top: 10px">
            IDE 可能会将 btn 识别为 button，需要关闭对应的 Live template；
            以 Webstorm 为例，Settings → Editor → LiveTemplate → ZenHTML 下可以找到 btn 的默认模板，将其关闭或删除即可。
        </p>
    </div>
</template>

<script>
export default {
    name: "doc-btn",
    data(){
        return {
            api:[
                { name:'vanilla', type:'Boolean', default:'false', description:'使按钮呈现经典拟物风格的样式' },
                // { name:'dense', type:'Attribute', default:'', description:'去掉默认内边距，使内边距为零，但样式属性（如 px-sm）依然有效' },
                // { name:'rect', type:'Boolean', default:'false', description:'去掉默认的圆角效果' },
                { name:'disabled', type:'Boolean', default:'false', description:'控制按钮的可用性' }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
body[mobile] div.doc-btn{
    div.dawda1dw1{
        //justify-content: start;
        height: auto;
        padding: 10px;
        flex-wrap: wrap;
        button.mew-btn{
            margin: 10px 2px;
        }
    }
}

</style>