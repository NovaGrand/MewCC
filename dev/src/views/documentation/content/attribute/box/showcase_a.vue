<template>
    <div class="showcase_a" mx-auto>
        <div class="orange" white lighten bg>
            <div class="green" >
                <div class="white" xs bold grey>
                    <div class="p" :class="['_' + index]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
<!--                    <div class="p" :class="['_' + index]">Curabitur ut nibh aliquam, pharetra leo at, congue est. Pellentesque congue ex id purus posuere accumsan. In ultrices dui et maximus venenatis. Nunc sollicitudin augue sed mauris eleifend, a vulputate eros viverra. Sed pellentesque urna ornare, dapibus magna in, vehicula erat.</div>-->
                    <div class="btnBox" jc>
                        <i ls-xs class="btn" :class="['_' + index]" @click="copy">{{ btnText }}</i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "showcase_a",
    inheritAttrs: false,
    mounted(){
    },
    data(){
        return {
            arr:[
                [2,18], [6,18], [10,18], [14,18], [18,18], [18,22], [18,26], [18,30],[18,36]
            ]
        }
    },
    props:{
        index:{
            type: [Number, String],
            default: '6'
        }
    },
    computed:{
        btnText(){
            return [
                'py-xs px-md','py-sm px-lg','pa-sm','my-xl','my-lg','my-md','mx-auto','ba blue','bv-xl','round','bb blue'
            ][this.index - 1]
        }
    },
    methods:{
        copy(){
            let str = this.btnText
            this.$copy(str)
            this.$notify({
                text:  str + ' 已复制',
                color:'green',
            })
        },
    }
}
</script>

<style scoped lang="scss">
div.showcase_a{
    background-color: #FFCC80;
    padding: 20px;
    margin: 0 4px;
    div.orange{
        box-shadow: 0 2px 5px rgba(0,0,0,.4);
        div.green{
            background-color: #9ddd89;
            padding: 10px;
            transition: padding .2s linear;
            div.white{
                background-color: white;
                min-height: 40px;
                padding: 15px 30px 20px 30px;
            }
        }
    }
    div.p{
        text-align: justify;
        line-height: 1.3;
        transition: margin .2s ease;
        &._4{
            margin: 72px 0;
        }
        &._5{
            margin: 36px 0;
        }
        &._6{
            margin: 18px 0;
        }
    }
    div.btnBox{
        padding: 0;
        i.btn{
            cursor: pointer;
            background-color: #0091f2;
            color: white;
            transition: all .2s ease;
            text-align: center;
            padding:2px 8px;line-height: 20px;
            margin: 10px 0 0 0;
            border-radius: 1px;
            &:hover{
                filter: brightness(1.1);
            }
            &._1{
                font-size: 12px;
                padding: 2px 18px;
            }
            &._2{
                font-size: 14px;
                padding: 6px 36px;
            }
            &._3{
                margin: 10px 0;
                padding: 18px 6px;
            }
            &._8{
                background-color: white;
                border: 1px solid #0091f2;
                color: #0091f2;
                width: 120px;height: 34px;line-height: 27px;
            }
            &._9{
                background-color: white;
                border: 1px solid #0091f2;
                color: #0091f2;
                width: 120px;height: 34px;line-height: 27px;
                border-radius: 5px;
            }
            &._10{
                background-color: white;
                border: 1px solid #0091f2;
                color: #0091f2;
                width: 120px;height: 34px;line-height: 27px;
                border-radius: 18px;
            }
            &._11{
                background-color: white;
                border-bottom: 1px solid #0091f2;
                color: #0091f2;
                padding: 6px 36px;
            }

        }
    }
}
</style>