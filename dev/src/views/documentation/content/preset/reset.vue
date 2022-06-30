<template>
    <img :src="img" draggable="false" fill>
    <p>
        开始一个新项目时，需要先打磨 CSS 语言中一些粗糙的边缘，CSS Reset 为便于理解和测试提供了坚实的基础。
        Mew 基于 normalize.css ，据实践需要，补充了符合常识、符合正常感知的设定。更多细节请见
        <a href="https://github.com/necolas/normalize.css" target="_blank">
            normalize.css<ico>btn-tab-blank</ico>
        </a> 仓库。
    </p>
    <h2 tag-bar md mt-sm mt-12>基本特性</h2>
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
        <li>所有伪元素默认 <q>absolute;inline-block</q>和<q>content:''</q></li>
    </ul>
<!--    <div bb my-sm></div>-->
<!--    <h2 tag-bar md mt-sm mt-12>效果演示</h2>-->
<!--    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum !</p>-->
<!--    <div mt-xs mt-10 flex je>-->
<!--        <input type="text" mr-xs mr-5> <button>Submit</button>-->
<!--    </div>-->

</template>

<script>
import img from '@/assets/doc/cssreset.jpg'
export default {
    name: "reset",
    data(){
        return {
            img
        }
    }
}
</script>

<style scoped lang="scss">


</style>