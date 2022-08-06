<template>
    <div class="showcase_parallax" foo baz noselect>
        <div class="plate cyan" @click="copy('foo')">
            <i foo>
                <h3 class="name foo">Foo</h3>
            </i>
        </div>
        <div class="plate red" @click="copy('bar')">
            <i bar>
                <h3 class="name bar">Bar</h3>
            </i>
        </div>
        <div class="plate yellow" @click="copy('baz')">
            <i baz>
                <h3 class="name baz">Baz</h3>
            </i>
        </div>
    </div>
</template>

<script>
export default {
name: "showcase_parallax",
    methods:{
        copy(str){
            this.$notify({
                text:str + ' 已复制',
                color:'green'
            })
        }
    }
}
</script>

<style scoped lang="scss">
div.showcase_parallax{
    height: 400px;
    overflow: hidden;
    border-radius: 1px;
    position: relative;
    div.plate{
        transition: transform .2s ease;cursor: pointer;
        h3.name{
            position: absolute;z-index: 20;
            color: rgba(0,0,0,.1);
            //font-family: bold;
            font-size: 40px;
            &.foo{
                left: 400px;top: 60px;
            }
            &.bar{
                right: 400px;top:403px;
            }
            &.baz{
                color: yellow;text-shadow: 0 0 3px rgba(0,0,0,.4);
                font-size: 30px;
                right: 90px;top: 728px;
                transform: rotate(90deg);
            }
        }
    }
    div.cyan{
        background-color: #00cae5;
        background-color: #54ebff;
        height: 1000px;width: 1000px;
        transform:rotate(45deg);
        position: absolute;z-index: 10;left: -450px;top: 100px;
        overflow: hidden;
        box-shadow:0 0 20px rgba(0,0,0,.2), 0 0 30px rgba(0,0,0,.3);
        &:hover{
            transform:rotate(45deg) scale(1.02);
        }
        i{
            transform: rotate(-45deg);
            height: 1000px;width: 1000px;position: absolute;
            top: -140px;
        }
    }
    div.red{
        //background-color: #FF6B6B;
        background-color: #ffb2b2;
        height: 1000px;width: 1000px;
        transform:rotate(-45deg);
        position: absolute;z-index: 9;
        right: 250px;top: -550px;
        overflow: hidden;
        box-shadow:0 0 20px rgba(0,0,0,.2), 0 0 30px rgba(0,0,0,.4);
        &:hover{
            transform:rotate(-45deg) scale(1.02);
        }
        i{
            transform: rotate(45deg);
            height: 1000px;width: 1000px;position: absolute;
            top: 300px;
        }
    }
    div.yellow{
        background-color: #FFEB3B;
        height: 120px;width: 1000px;
        transform:rotate(45deg);
        position: absolute;z-index: 8;
        right: -100px;top: 210px;
        overflow: hidden;
        box-shadow:0 0 10px rgba(0,0,0,.1), 0 0 30px rgba(0,0,0,.3);
        &:hover{
            transform:rotate(45deg) scale(1.08);
        }
        i{
            transform: rotate(-135deg);
            height: 1000px;width: 1000px;position: absolute;
            top: 0;right: -200px;
        }
    }
}
</style>