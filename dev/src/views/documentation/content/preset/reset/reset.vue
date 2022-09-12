<template>
    <div class="doc-reset">
        <p >
            开始一个新项目时，需要先打磨 CSS 语言中一些粗糙的边缘，CSS Reset 为便于理解和测试提供了坚实的基础。
            Mew 基于 normalize.css ，据实践需要，补充了符合常识、符合正常感知的设定。更多细节请见
            <a href="https://github.com/necolas/normalize.css" target="_blank">
                normalize.css<ico>btn-tab-blank</ico>
            </a> 仓库。
        </p>
        <div v-if="!$global.mobile" ba catskill ht-sm style="margin: 20px 0 100px 0"></div>
        <div class="xada-14148189" style="margin-top: 35px" jsb>
            <fit wd-md wd-2 class="wordCloud" style="transform: translateY(-3px)">
                <img  fill :src="cloud">
            </fit>
            <div class="dawfdafaf4a45564" col-14>
                <h2 tag-bar md style="margin-top: -5px">基本特性</h2>
                <p>以下是 Mew CSS Reset 的部分特性：</p>
                <ul>
                    <li>在 <q>html</q> 中应用 <kbd>tab-size: 4</kbd></li>
                    <li>移除所有浏览器中的默认按钮样式</li>
                    <li>修复 IE 下各种元素默认样式的问题</li>
                    <li>去掉了微信 ios 版点击时的蓝色边框</li>
                    <li>应用 <q>box-sizing: border-box</q> 到所有元素</li>
                    <li>所有内联元素统一修改盒模型为 <kbd>inline-block</kbd></li>
                    <li>保留了 button、input、texture 等元素的默认样式</li>
                    <li>在所有的元素指定 <q>background-repeat: no-repeat</q></li>
                    <li>继承 <q>text-decoration</q> 和 <q>vertical-align</q> 到伪元素</li>
                    <li>除 <q>p, li</q> 元素外，移除其他所有元素的默认内外边距</li>
                    <li>所有伪元素默认具有 <q>absolute</q> 和 <q>inline-block</q></li>
                </ul>
            </div>
        </div>

        <div ht-md></div>
    </div>

</template>

<script>
import img from '@/assets/doc/reinitialisation.jpg'
import cloud from '@/assets/doc/wordcloud_rect_light.jpg'
export default {
    name: "reset",
    data(){
        return {
            img, cloud
        }
    }
}
</script>

<style scoped lang="scss">
body[mobile]{
    div.doc-reset div.xada-14148189{
        flex-direction: column;
        div.dawfdafaf4a45564{
            width: 100vw;
            margin-top: 40px;
        }
    }
}
div.wordCloud{
    transform: scale(.9);
    svg{
    }
}

</style>