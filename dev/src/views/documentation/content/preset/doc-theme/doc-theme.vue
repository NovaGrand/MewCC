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
            themes: ['light','dark']
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