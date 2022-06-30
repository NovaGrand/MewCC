<template>
    <div sm>
        <p>
            介绍
            Material 是 Google 创建的一个设计系统，旨在帮助团队为 Android、iOS、Flutter 和 Web 构建高质量的数字体验。
        </p>
        <p>
            材料是隐喻
            Material Design 的灵感来自物理世界及其纹理，包括它们如何反射光线和投射阴影。材料表面重新构想了纸张和墨水的媒介。
        </p>
        <p>
            颜色

            Material 的颜色系统是一种将颜色应用到 UI 的有组织的方法。
            Material 的颜色系统是一种将颜色应用到 UI 的有组织的方法。全局颜色样式在组件中具有语义名称和定义的用法——主要、次要（品牌颜色）、表面、背景和错误。
            每种颜色还有一种互补色，用于放置在其顶部的元素，以提高一致性和可访问的对比度。
        </p>
        <p>
            排版

            Material Design 字体量表提供了 13 种排版样式，适用于从标题到正文和标题的所有内容。
            Material Design字体量表提供了 13 种排版样式，适用于从标题到正文和标题的所有内容。每种样式在界面中都有明确的含义和预期的应用。
            可以修改字体、字体粗细和字母大小写等重要属性以匹配您的品牌和设计。
        </p>
        <p>
            形状

            应用形状样式可以帮助引导注意力或识别组件、传达它们的状态并表达您的品牌。
            应用形状样式可以帮助引导注意力或识别组件、传达它们的状态并表达您的品牌。
            所有材料组件都根据其大小（小、中、大）分组为形状类别。这些全局样式提供了一种快速更改类似大小组件形状的方法。
            您可以使用形状自定义工具生成自己的形状样式。
        </p>
        <p>
            富有表现力
            为了突出 Material Theming 必须提供的功能，每个 Material 研究都表达了不同的品牌。
        </p>
        <p>
            各种各样的
            为了确保材料主题和组件尽可能多地满足产品需求，材料研究代表了不同类型的产品。
        </p>
        <p>
            基于现实
            为了尽可能接近地复制真实产品，每项研究都会识别用户、显示功能性用户流并应用现实世界的限制。
        </p>
    </div>
</template>

<script>

export default {
    name: "quick_start",
    data(){
        return {
            ico:'level-star-round',
            html:`<template>
    <div sm>
        <prism lang="css">{{ html }}</prism>
    </div>
</template>`,
            html2:``
        }
    },
    mounted(){

    }
}
</script>

<style scoped lang="scss">
div.iconBox{
    display: inline-block;
    //font-size: 19px;
}
div.textBox{
    display: inline-block;
}
</style>