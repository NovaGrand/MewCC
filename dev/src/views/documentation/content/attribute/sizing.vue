<template>
    <h1 mb-sm lg bold>内外间距</h1>
    <p>Padding 与 Margin 命名相同，格式相同，用法相同，以下仅以 Padding 为例</p>
    <section my-sm>
        <h2 mb-xs mb-5>段位的尺寸：</h2>
        <ul>
            <li><code>xs <q>2px</q></code> </li>
            <li><code>sm <q>8px</q></code> </li>
            <li><code>md <q>18px</q></code></li>
            <li><code>lg <q>32px</q></code></li>
            <li><code>xl <q>50px</q></code></li>
        </ul>
        <div flex my-sm>
            <div pa-xl border red><div sm wd-sm ht-sm jc ac foo bar>xl</div></div>
            <div pa-lg border red><div sm wd-sm ht-sm jc ac foo bar>lg</div></div>
            <div pa-md border red><div sm wd-sm ht-sm jc ac foo bar>md</div></div>
            <div pa-sm border red><div sm wd-sm ht-sm jc ac foo bar>sm</div></div>
            <div pa-xs border red><div sm wd-sm ht-sm jc ac foo bar>xs</div></div>
        </div>
    </section>
    <section my-sm>
        <h2 mb-xs mb-5>详细尺寸为 1~25，每个为1px</h2>
        <p>例如 pa-sm pa-10 即 padding 8px + 10 px</p>
    </section>
    <section>
        <p>可精控制范围：2px~75px</p>
    </section>
</template>

<script>
export default {
    name: "padding&margin",
    data(){
        return {

        }
    }
}
</script>

<style scoped>

</style>