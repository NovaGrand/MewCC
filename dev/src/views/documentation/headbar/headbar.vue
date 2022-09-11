<template>
    <div id="headbar" :class="{ border: stat.drawer, dark:$color.theme === 'dark' }" bg noselect>
        <div class="leftBox">
            <div class="logoBox" >
                <div class="menuBtn" :class="{ close:stat.drawer }" @click="stat.drawer = !stat.drawer"></div>
                <h2 class="titlefda" black lighten>Mew cc</h2>
                <a class="logo" href="/"/>
            </div>
        </div>
        <div class="rightBox">
            <div class="brief">
                <i class="text">Frontend Multi-Element Widgets Community Collection</i>
                <i class="widget v">VER. {{ $store.state.version }}</i>
                <i class="widget frameWork" title="Integrates with Vue 3 only">VUE 3 ONLY</i>
            </div>
            <div class="by">
                <i class="text">Provided by</i>
                <a class="novagrand" ></a>
                <i class="text_mobile">Provided by NovaGrand</i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: "headbar",
    props:['stat']
}
</script>

<style scoped lang="scss">
@import "./scss/headbar";
@import "./scss/1200";
</style>