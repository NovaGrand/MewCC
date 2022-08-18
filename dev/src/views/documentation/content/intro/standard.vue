<template>
    <div class="doc-standard">
        <h2 lg>颜色与用户使用环境</h2>
        <p >
            用户<i bold>显示设备亮度、摆放角度、环境亮度</i>这三个因素，使开发者、软件公司对最终用户的观看体验，无法实现全面的控制，前端的呈现环境是产品设计必须面对的问题。<i bold>夜间灯光环境下的有辨识度的颜色，在日光环境中常常难以分辨</i>，
            在依赖颜色来传递信息的交互系统中，为保证终端用户能尽量完整地获取到信息，Mew 建议的颜色规范：
        </p>
        <ul style="margin-top: 10px">
            <li>使用明度来区分颜色，颜色应加大反差，避免轻微变化。</li>
            <li>减少撞色的使用面积，撞色的 UI 会产生危险的感觉。</li>
            <li>交互功能不能完全依赖颜色，必须同时提供其他提示。</li>
        </ul>
        <div jsb mt-md mt-10>
            <fit ht-sm ht-15 col-9 foo mr-10>
                <img fill :src="s_1">
            </fit>
            <fit ht-sm ht-15 col-9 foo mr-10>
                <img fill :src="s_2">
            </fit>
            <fit ht-sm ht-15 col-9 foo>
                <img fill :src="s_3">
            </fit>
        </div>
        <div jsb mt-sm mt-5>
            <small ht-4 col-9 jc mr-10>我们无法控制终端用户的使用环境</small>
            <small ht-4 col-9 jc mr-10>使用明度控制边缘，同时避免出现撞色</small>
            <small ht-4 col-9 jc>通过不同明度的颜色和边缘区分内容</small>
        </div>
        <div alpha-5 dashed bb style="margin: 45px 0"></div>

        <h2 lg>布局与视觉原理</h2>
        <p style="margin-top:20px">HTML 和 CSS 的消耗了大量时间成本，仓促的 UI 设计更加重了返工的负担，出于对效率与质量的平衡，Mew 的样式属性，基于视觉研究的理论基础：
            <i bold>人们会将距离接近、形状相似、连续的、整体闭合的、有主有次的、行为一致的目标们视为一个整体</i>：
        </p>
        <ul style="margin-top: 10px">
            <li>同区内元素距离应用小间距，不同区域内元素应用大间距。</li>
            <li>功能强相关的元素，布局时应是连续的、闭合的。</li>
            <li>内容、功能不多的页面，内部元素应该有主有次。</li>
        </ul>
        <fit col-25 ht-sm ht-2 mt-md mt-10 contain>
            <img :src="s_4" >
        </fit>
        <div alpha-5 dashed bb style="margin: 45px 0"></div>
        <h2 lg>偏好与路径依赖</h2>
        <p style="margin-top:20px">
            偏好在用户第一次使用产品时形成，在长期使用中反复加深，最终成为熟悉的路径（儿童、青少年除外），只有强大的影响力才可能改变用户偏好。
            <i bold>普通设计人员不应以审美、经验等原因，设计不符合用户偏好的 UI</i>，这会立刻使用户感到<i bold>“不是为我服务”</i>。
            Mew 是敬畏终端用户的，组件设计对 UI 是无偏好的。
        </p>
        <fit col-25 ht-sm ht-7 mt-md mt-10 contain>
            <img :src="s_5" >
        </fit>
        <small jc style="margin-top: 20px">偏好一旦成为路径依赖，则难以改变，设计人员不应以审美、经验等原因，设计不符合用户偏好的 UI</small>
        <div alpha-5 dashed bb style="margin-top: 20px"></div>
        <h2 lg style="margin-top: 70px">成本与功能完备</h2>
        <p style="margin-top:20px">
            一次完整的交互，包括目标元素、步骤、风险提示、错误处理、完成指引， Mew 旨在“最节省”的前提下提供功能，避免落入功能完备的陷阱。
            Mew 不臆想最佳实践，亦无畏惧功能完备，<i bold>Mew 提供无风险、低成本、高可用的前端功能，帮助项目避难趋易</i>，让开发起飞，为产品护航。
        </p>
    </div>
</template>

<script>
import s_1 from '@/assets/doc/s_1.jpg'
import s_2 from '@/assets/doc/s_2.jpg'
import s_3 from '@/assets/doc/s_3.jpg'
import s_4 from '@/assets/doc/s_4.jpg'
import s_5 from '@/assets/doc/s_5.jpg'
export default {
name: "standard",
    data(){
        return {
            s_1,s_2,s_3,s_4,s_5
        }
    }
}
</script>

<style scoped lang="scss">
div.doc-standard{
    p{
        text-align: left;
        text-align-last: left;
    }
}
</style>