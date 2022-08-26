<template>
    <div class="mew-field-dropList" :class="{ visible: field.focus }">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "mew-field-dropList",
    inject: ['field'],
    data(){
        return {
            visible: false
        }
    },
    watch:{
        // 'field.focus':function(val){
        //     if(val)
        //         this.visible = true
        //     else
        //         console.log('blured')
        // }
    },
    mounted(){
        for(let i=0;i<this.$el.children.length;i++){
            this.$el.children[i].classList.add('mew-field-item')
            this.$el.children[i].onclick = () => {
                this.visible = false
            }
        }
    },
    methods:{
        aaa(){
            console.log('aaa')
        }
    }
}
</script>

<style lang="scss">
div.mew-field-dropList{
    --bt:inherit;--br:inherit;--bb:inherit;--bl:inherit;--bs:inherit;--adjust-border:inherit;--ac:inherit;
    --bdrd:inherit;
    --pl:inherit;--xpl:inherit;--pr:inherit;--xpr:inherit;
    --c:inherit;

    position: absolute;top: 100%;
    left: calc(var(--bl) * -0.5px);
    width: calc(100% + calc(var(--bl) * 0.5px) + calc(var(--br) * 0.5px));
    border-top: none;
    border-top-left-radius:0;
    border-top-right-radius:0;
    padding: .3em 0 0 0;
    color: inherit;
    cursor: pointer;
    overflow: hidden;
    opacity: 0;
    &.visible{
        opacity: 1;
    }
    .mew-field-item{
        color: inherit;
        --c:inherit;
        --pl:inherit;--xpl:inherit;--pr:inherit;--xpr:inherit;
        position: relative;
        padding: .7em calc( var(--pr) * 1px + var(--xpr) * 1px ) .7em calc( var(--pl) * 1px + var(--xpl) * 1px );
        &::before{
            position: absolute;content: '';left: 0;top: 0;width: 100%;height: 100%;
        }
        &:hover{
            &::before{
                background-color: rgba(var(--c), 0.04);
            }
        }
    }
}
div.mew-field.select[bg]{
    div.mew-field-dropList{
        background-color: rgba(var(--c), calc(0.036 * var(--ac)));
        .mew-field-item:hover::before{
            background-color: rgb(var(--c));
        }
    }
}
</style>