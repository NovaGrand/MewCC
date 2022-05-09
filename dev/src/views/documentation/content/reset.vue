<template>
    <h3 ls-1 mb-sm>CSS Reset</h3>
    <img src="../../assets/ress.png" wd-lg>
    <p>
        CSS Reset 为便于理解的开发体验提供了坚实的基础。
        我们基于 normalize.css ，又据实践需要，补充了符合常识、符合正常感知的设定，比如为 <q>&lt;code&gt;</q> 元素设置
        <q>font-family: monospace</q> 等，更多细节可在 reset GitHub 仓库 中查看。
    </p>
    <h3 tag-bar mt-sm mt-12>基本特性</h3>
    <p>以下列出了 CSS Reset 的主要特性：</p>
    <ul>
        <li>应用 <kbd>box-sizing: border-box</kbd> 到所有元素</li>
        <li>所有内联元素统一修改盒模型为 <kbd>inline-block</kbd></li>
        <li>除 <q>p</q> 元素外，移除其他所有元素的默认内外边距</li>
        <li>移除所有浏览器中的默认按钮样式</li>
        <li>在所有的元素、伪元素中指定 <kbd>background-repeat: no-repeat</kbd></li>
        <li>继承 <kbd>text-decoration</kbd> 和 <kbd>vertical-align</kbd> 到 <kbd>::before</kbd> 和 <kbd>::after</kbd></li>
        <li>在 <kbd>html</kbd> 中应用 <kbd>tab-size: 4</kbd></li>
        <li>修改部分常见元素的默认样式</li>
    </ul>
</template>

<script>
export default {
    name: "reset"
}
</script>

<style scoped lang="scss">


</style>