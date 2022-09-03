<template>
    <div class="mew-field-dropList" v-show="field.selecting.valid">
        <slot></slot>
    </div>
</template>

<script>

export default {
    name: "mew-field-dropList",
    inject: ['field'],
    watch:{
        'field.selecting.valid': function(val){
            // 当没有 ba bb 等边框属性时，变量会失效，需要单独设置 left 和 top
            let s1 = getComputedStyle(this.$el)
            if( s1.left === 'auto')
                this.$el.style.setProperty('--bl',0)
            if( s1.top === 'auto')
                this.$el.style.setProperty('--bt',0)
            if( s1.width === 'auto'){
                this.$el.style.setProperty('--bl',0)
                this.$el.style.setProperty('--br',0)
            }

            let s = getComputedStyle(this.field.$el)
            let r = this.field.$el.getBoundingClientRect()
            let style = 'width:' + Math.round(r.width) + 'px;height:' + Math.round(r.height) + 'px;position:' + s.position + ';left:' + s.left + ';right:' + s.right + ';transform:' + s.transform
            this.field.selecting.shadow.style = style
            if(val){
                this.$el.style.setProperty('--boxShadow', s.boxShadow)
                this.field.selecting.wrapper.style.paddingLeft = r.x + 'px'
                this.field.selecting.wrapper.style.paddingTop = r.y + 'px'
                this.field.$el.parentNode.replaceChild(this.field.selecting.shadow, this.field.$el)
                this.field.selecting.wrapper.appendChild(this.field.$el)
                this.field.selecting.keepFocus = true
            }
            else {
                this.field.selecting.wrapper.style.paddingLeft = ''
                this.field.selecting.wrapper.style.paddingTop = ''
                this.field.selecting.shadow.style = ''
                this.field.selecting.shadow.parentNode.replaceChild(this.field.$el, this.field.selecting.shadow)
                this.field.selecting.wrapper.appendChild(this.field.selecting.shadow)
            }
            if(this.field.selecting.keepFocus){
                this.field.$el.getElementsByTagName(this.field.area ? 'textarea' : 'input')[0].focus()
            }

            this.$nextTick(()=>{
                if(val){
                    this.$el.style.setProperty('--paddingTop', this.field.$el.offsetHeight + 'px')

                    let arr = getComputedStyle(this.$el).color.split(',')
                    let clr = arr[0] + ',' + arr[1] + ',' + parseInt(arr[2]) + ', 0.04)'
                    this.$el.style.setProperty('--hoverColor', clr)

                }
            })
        },
    },
}
</script>

<style lang="scss">

div.mew-field-dropList{
    // 继承边框
    --bt:inherit;--br:inherit;--bb:inherit;--bl:inherit;--bs:inherit;--adjust-border:inherit;--ac:inherit;
    --bdrd:inherit;--c:inherit;

    // 传递边距
    --pl:inherit;--xpl:inherit;--pr:inherit;--xpr:inherit;
    padding: var(--paddingTop) 0 0 0;

    box-shadow: var(--boxShadow);

    position: absolute;
    top: calc(var(--bt) * -0.5px);
    left: calc(var(--bl) * -0.5px);
    width: calc(100% + calc(var(--bl) * 0.5px) + calc(var(--br) * 0.5px));
    color: inherit; // bg 模式下需要
    background-color: inherit;
    backdrop-filter: blur(40px) brightness(1.2);
    border-radius: min(calc(var(--paddingTop) / 2), var(--bdrd));
    &>*{
        --pl:inherit;--xpl:inherit;--pr:inherit;--xpr:inherit;
        --bdrd:inherit;
        color: inherit; // bg 模式下需要
        position: relative;
        padding: .7em calc( var(--pr) * 1px + var(--xpr) * 1px ) .7em calc( var(--pl) * 1px + var(--xpl) * 1px );
        cursor: pointer;
        overflow: hidden;border-radius: 0;
        width: 100%;
        &:first-child{
            padding-top: 1.2em;
            &::before{
                height: calc(100% - 0.6em);
            }
        }
        &:last-child{
            border-bottom-left-radius: min(calc(var(--paddingTop) / 2), var(--bdrd));
            border-bottom-right-radius: min(calc(var(--paddingTop) / 2), var(--bdrd));
        }
        &::before{
            position: absolute;content: '';left: 0;bottom: 0;width: 100%;height: 100%;z-index: -1;
        }
        &:hover{
            &::before{
                background-color: var(--hoverColor);
            }
        }
    }
}
</style>