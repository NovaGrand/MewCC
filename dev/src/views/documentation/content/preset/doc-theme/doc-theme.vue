<template>
    <div class="doc-theme">
        <div class="sample" ba-md dashed alpha-8 pa-sm>
            <div white darken bg xl bold py-md jc>
                GREAT MINDS THINK ALIKE.
            </div>
        </div>
        <div class="sample" py-lg py-sm ba-xs alpha-8 lh-xs>
            <div jc>
                <i lg fs-5 jc mx-xs bold lighten red>Sample</i>
                <i lg fs-5 jc mx-xs bold lighten pink>Arcadia</i>
                <i lg fs-5 jc mx-xs bold lighten purple>Kodiak</i>
                <i lg fs-5 jc mx-xs bold lighten cyan>Kalimdor</i>
                <i lg fs-5 jc mx-xs bold lighten green>Azeroth</i>
                <i lg fs-5 jc mx-xs bold lighten blue>Orgrimmar</i>
            </div>
            <div jc>
                <i lg fs-5 jc mx-xs bold red>Sample</i>
                <i lg fs-5 jc mx-xs bold pink>Arcadia</i>
                <i lg fs-5 jc mx-xs bold purple>Kodiak</i>
                <i lg fs-5 jc mx-xs bold cyan>Kalimdor</i>
                <i lg fs-5 jc mx-xs bold green>Azeroth</i>
                <i lg fs-5 jc mx-xs bold blue>Orgrimmar</i>
            </div>
            <div jc>
                <i lg fs-5 jc mx-xs bold darken red>Sample</i>
                <i lg fs-5 jc mx-xs bold darken pink>Arcadia</i>
                <i lg fs-5 jc mx-xs bold darken purple>Kodiak</i>
                <i lg fs-5 jc mx-xs bold darken cyan>Kalimdor</i>
                <i lg fs-5 jc mx-xs bold darken green>Azeroth</i>
                <i lg fs-5 jc mx-xs bold darken blue>Orgrimmar</i>
            </div>
        </div>
        <btn style="margin-top: 30px" vanilla blue bg mx-auto mt-sm bold ls-xl @click="toggle">Toggle</btn>
        <div class="sample" mb-lg>
            <div ac ht-sm>
                <field v-model="value" ref="field"  ba blue select text>
                    <div @click="value=111111">111111</div>
                    <div @click="value=222222">222222</div>
                    <div @click="value=333333">333333</div>
                    <div @click="value=444444">444444</div>
                    <div @click="value=555555">555555</div>
                    <div @click="value=666666">666666</div>
                </field>
                <btn @click="value += '0'" ml-sm vanilla blue bg>提 交</btn>
            </div>
            <div my-xl red bg>对方拉风拉风了怕</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "doc-theme",
    mounted(){
        // this.$color.theme = 'dark'
    },
    beforeUnmount(){
        this.$color.theme = 'light'
    },
    data(){
        return {
            n: 1,
            themes: ['light','dark'],
            value:'用户名Arcadia',
            label:'用户名',
        }
    },
    watch:{

    },
    methods:{
        toggle(){
            this.$color.theme = this.themes[this.n]
            if(this.n === 1)
                this.n = 0
            else
                this.n ++
        }
    }
}
</script>

<style scoped lang="scss">
div.doc-theme{
    div.sample{
        font-family: black;
    }
}
</style>