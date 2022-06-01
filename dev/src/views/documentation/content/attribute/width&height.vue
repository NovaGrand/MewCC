<template>
    <h1 mb-sm lg bold>宽高尺寸</h1>
    <section my-sm>
        <h2 mb-xs mb-5>宽高的段位的尺寸：</h2>
        <ul>
            <li><code>xs <q>22px</q></code> </li>
            <li><code>sm <q>52px</q></code> </li>
            <li><code>md <q>102px</q></code></li>
            <li><code>lg <q>172px</q></code></li>
            <li><code>xl <q>162px</q></code></li>
        </ul>
        <div flex my-sm>
            <div wd-xs ht-xs red bg jc ac mx-xs>xs</div>
            <div wd-sm ht-sm red bg jc ac mx-xs>sm</div>
            <div wd-md ht-md red bg jc ac mx-xs>md</div>
            <div wd-lg ht-lg red bg jc ac mx-xs>lg</div>
            <div wd-xl ht-xl red bg jc ac mx-xs>xl</div>
        </div>
    </section>
    <section my-sm>
        <h2 mb-xs mb-5>详细尺寸为 1~25，每个为2px</h2>
        <p>例如 wd-sm wd-10 即 width 52px + 20 px</p>
    </section>
    <section>
        <p>可精控制范围：22px~212px</p>
    </section>
</template>

<script>
export default {
    name: "width&height"
}
</script>

<style scoped>

</style>