<template>
    <div class="doc-btn">
        <section>
            <div ht-xs ht-20 black lighten bg top bv-xl jsa ac px-md>
                <btn mx-sm golden bg vanilla><i black lighten>Vanilla</i></btn>
                <btn mx-sm blue lighten bg wd-xs wd-5 jc>Default</btn>
                <btn green lighten bg card pr-5 ac>
                    <ico mr-sm >pay-wallet</ico>
                    <i>Card</i>
                </btn>
                <btn green lighten ba dense py-3 pl-7 pr-15 ac>
                    <ico mr-xs>state-bling-twinkle</ico>
                    <i>Outlined</i>
                </btn>

                <btn mx-sm white>Plain text</btn>
                <btn mx-sm blue lighten bg disabled>Disabled</btn>

            </div>

            <div ht-xs ht-20 white bg bottom bv-xl jsa ac px-md>
                <btn mx-sm foo baz vanilla round>Vanilla</btn>
                <btn mx-sm red lighten bg round disabled wd-xs wd-5 jc>Disabled</btn>
                <btn white lighten bg card pr-5 ac>
                    <ico mr-sm>auth-analysis</ico>
                    <i>Card</i>
                </btn>
                <div wd-sm wd-9 ht-9 jc ac>
                    <btn wd-sm ht-8 jc ac black bold ba round xs left>LEFT</btn>
                    <btn wd-sm ht-8 jc ac black bold bt bb xs rect>RECT</btn>
                    <btn wd-sm ht-8 jc ac black bold ba round xs right>RIGHT</btn>
                </div>
                <div wd-xs wd-12 jsb ac>
                    <btn black ba wd-9 ht-9 dense ac jc round><ico lg nr-xs>btn-video-round</ico></btn>
                    <btn grey darken bg wd-8 ht-8 dense ac jc round><ico lg>level-upgrade</ico></btn>
                    <btn black bg wd-8 ht-8 dense ac jc bv-xl><ico lg nd-xs nr-xs red lighten>btn-video-youtube</ico></btn>
                </div>
            </div>
        </section>
        <section style="margin-top: 35px">
            <p>btn 组件有默认内边距，按钮可完全由样式属性控制，
                例如可以用字体大小属性 xs sm md lg xl 控制按钮的大小，可以用 wd-lg 控制按钮的宽度，可以用 red bg 使按钮变为红色等等。</p>
        </section>
<!--        <div jc bv-xl black bg lighten card pa-lg style="margin-top: 15px;height: 250px">-->
<!--            <p>-->
<!--                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.-->
<!--            </p>-->
<!--        </div>-->
        <apiTable :items="api" style="margin-top: 35px"/>

    </div>
</template>

<script>
export default {
    name: "doc-btn",
    data(){
        return {
            api:[
                { name:'vanilla', type:'Boolean', default:'false', description:'为组件添加经典拟物风格的样式' },
                { name:'dense', type:'Attribute', default:'', description:'去掉默认内边距，使内边距为零，但样式属性（如 px-sm）依然有效' },
                { name:'disabled', type:'Boolean', default:'false', description:'控制按钮的可用性' }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
div.doc-btn{

}
</style>