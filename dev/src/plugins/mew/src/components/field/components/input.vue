<template>
    <div class="mew-field-input">
        <input v-if="!field.area" fill :class="{ jc: field.jc, je: field.je }"
               :placeholder="field.placeholder"
               :value="field.modelValue"
               :type="field.type"
               :readonly="readonly"
               @input="input"
               @focus="field.focus = true"
               @blur="field.focus = false"
               @click="toggleDropList"
        >
        <textarea v-else fill noresize cols="30" rows="3" :class="{ jc: field.jc, je: field.je }"
                  :placeholder="field.placeholder"
                  :value="field.modelValue"
                  :readonly="readonly"
                  @input="input"
                  @focus="field.focus = true"
                  @blur="field.focus = false"
                  @click="toggleDropList"
        />
    </div>
</template>

<script>
export default {
    name: "mew-field-input",
    inject: ['field'],
    mounted(){
        this.field.el = this.field.$el.getElementsByTagName(this.field.area ? 'textarea' : 'input')[0]
    },
    methods:{
        input(e){
            this.field.$emit('update:modelValue', e.target.value)
        },
        toggleDropList(){
            if(this.field.select)
                this.field.focus = true
        }
    },
    computed:{
        readonly(){
            return this.field.select && !this.field.text
        }
    },
}
</script>

<style lang="scss">
div.mew-field-input{
    textarea,input{
        padding: 0;
        font-family: 微软雅黑;
        -webkit-user-drag: none;
        background-color: transparent;
        &.jc{
            text-align: center
        }
        &.je{
            text-align: right
        }
        &[readonly]{
            cursor: default;
        }
        &::placeholder{
            transform: scale(.9);
            transform-origin: left center;
            color: inherit;
            opacity: .3;
            user-select: none;
        }
    }
    input{
        padding-bottom: .1em;
    }
    textarea{
        line-height: 1.4em;
        vertical-align: top;
        resize: none;
        &::-webkit-scrollbar {
            width: 4px; /* Mostly for vertical scrollbars */
        }
        &::-webkit-scrollbar-thumb { /* Foreground */
            width: 4px;
            background:rgba(0,0,0,.16);
            border-radius: 10px;
            &:hover{
                background:rgba(0,0,0,.3);
            }
        }
        &::-webkit-scrollbar-track { /* Background */
            background: transparent;
        }
    }
    input[type="time"]{
        //display: flex;align-items: center;justify-content: center;
        //height: 1.27em;
        &::-webkit-datetime-edit-fields-wrapper{
            height: .5em;line-height: .5em;
            display: flex;align-items: center;
            padding: 0 3px .15em 0;
        }
        &::-webkit-calendar-picker-indicator{
            margin: 0;
        }
    }
    input[type="date"]{
        &::-webkit-datetime-edit{
            overflow: visible;
        }
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        /* display: none; <- Crashes Chrome on hover */
        -webkit-appearance: none;
        margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }
    input[type="number"] {
        -moz-appearance:textfield; /* Firefox */
    }
    input[type="file"] {
        &::-webkit-file-upload-button{
            font-size: .8em;
            height: 100%;
        }
    }
}
</style>