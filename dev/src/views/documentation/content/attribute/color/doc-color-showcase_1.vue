<template>
    <div class="doc-color-showcase_1" :class="{ mobile: $global.mobile }" jsb style="margin-top: 20px">
        <i @click="copy" wd-21 ht-21 bv-lg red bg jc ac alpha-25>alpha-25</i>
        <i @click="copy" wd-21 ht-21 bv-lg red bg jc ac alpha-23>alpha-23</i>
        <i @click="copy" wd-21 ht-21 bv-lg red bg jc ac alpha-21>alpha-21</i>
        <i @click="copy" wd-21 ht-21 bv-lg red bg jc ac alpha-19>alpha-19</i>
        <i @click="copy" wd-21 ht-21 bv-lg red bg jc ac alpha-17>alpha-17</i>
        <i @click="copy" wd-21 ht-21 bv-lg red bg jc ac alpha-15>alpha-15</i>
        <i @click="copy" wd-21 ht-21 bv-lg red bg jc ac alpha-13>alpha-13</i>
        <i @click="copy" wd-21 ht-21 bv-lg red bg jc ac alpha-12>alpha-12</i>
        <i @click="copy" wd-21 ht-21 bv-lg red bg jc ac alpha-10>alpha-10</i>
        <i @click="copy" wd-21 ht-21 bv-lg red bg jc ac alpha-8>alpha-8</i>
    </div>
    <div class="doc-color-showcase_1" :class="{ mobile: $global.mobile }" jsb style="margin-top: 5px">
        <i @click="copy" wd-21 ht-21 bv-lg red ba jc ac alpha-25>alpha-25</i>
        <i @click="copy" wd-21 ht-21 bv-lg red ba jc ac alpha-23>alpha-23</i>
        <i @click="copy" wd-21 ht-21 bv-lg red ba jc ac alpha-21>alpha-21</i>
        <i @click="copy" wd-21 ht-21 bv-lg red ba jc ac alpha-19>alpha-19</i>
        <i @click="copy" wd-21 ht-21 bv-lg red ba jc ac alpha-17>alpha-17</i>
        <i @click="copy" wd-21 ht-21 bv-lg red ba jc ac alpha-15>alpha-15</i>
        <i @click="copy" wd-21 ht-21 bv-lg red ba jc ac alpha-13>alpha-13</i>
        <i @click="copy" wd-21 ht-21 bv-lg red ba jc ac alpha-12>alpha-12</i>
        <i @click="copy" wd-21 ht-21 bv-lg red ba jc ac alpha-10>alpha-10</i>
        <i @click="copy" wd-21 ht-21 bv-lg red ba jc ac alpha-8>alpha-8</i>
    </div>
</template>

<script>
export default {
name: "doc-color-showcase_1",
    methods:{
        copy(){
            let text = event.currentTarget.innerText
            this.$copy(text)
            this.$notify({
                text:  text + ' 已复制',
                color:'green',
            })
        }
    }
}
</script>

<style scoped lang="scss">
div.doc-color-showcase_1{
    &.mobile{
        i{
            font-size: 12px;
            height: 45px;
            width: 45px;
            text-align: center;line-height: 1.3;
            &:last-child{
                display: none;
            }
        }
    }
    i{
        cursor: pointer;
        //transition: transform 0.3s cubic-bezier(0.84, -1.13, 0.16, 2);
        transition: transform .1s ease;
        &:hover{
            transform: scale(1.06);
        }
    }
}
</style>