<template>
    <div xs class="doc-sizing-showcase_1" card bv>
        <div bold jc class="tt"><i jc>宽 度</i><i jc>高 度</i></div>
        <div class="row">
            <div class="box">
                <i class="bar" grey darken bg wd-sm wd-25 je @click="getInnerText"></i>
            </div>
            <div class="text" @click="getInnerText">wd-sm wd-25</div>
            <div class="text" @click="getInnerText">ht-lg ht-5</div>
            <div class="box">
                <i class="bar" grey darken bg style="width: 351px;" @click="getInnerText"></i>
            </div>
        </div>
        <div class="row">
            <div class="box">
                <i class="bar" grey darken bg wd-sm wd-22 je @click="getInnerText"></i>
            </div>
            <div class="text" @click="getInnerText">wd-sm wd-22</div>
            <div class="text" @click="getInnerText">ht-lg ht-2</div>
            <div class="box">
                <i class="bar" grey darken bg wd-sm wd-22 @click="getInnerText"></i>
            </div>
        </div>
        <div class="row">
            <div class="box">
                <i class="bar" grey darken bg wd-sm wd-18 je @click="getInnerText"></i>
            </div>
            <div class="text" @click="getInnerText">wd-sm wd-19</div>
            <div class="text" @click="getInnerText">ht-md ht-21</div>
            <div class="box">
                <i class="bar" grey darken bg wd-sm wd-18 @click="getInnerText"></i>
            </div>
        </div>
        <div class="row">
            <div class="box">
                <i class="bar" grey darken bg wd-sm wd-14 je @click="getInnerText"></i>
            </div>
            <div class="text" @click="getInnerText">wd-sm wd-14</div>
            <div class="text" @click="getInnerText">ht-md ht-12</div>
            <div class="box">
                <i class="bar" grey darken bg wd-sm wd-14 @click="getInnerText"></i>
            </div>
        </div>
        <div class="row">
            <div class="box">
                <i class="bar" grey darken bg wd-sm wd-10 je @click="getInnerText"></i>
            </div>
            <div class="text" @click="getInnerText">wd-sm wd-10</div>
            <div class="text" @click="getInnerText">ht-md ht-3</div>
            <div class="box">
                <i class="bar" grey darken bg wd-sm wd-10 @click="getInnerText"></i>
            </div>
        </div>
        <div class="row">
            <div class="box">
                <i class="bar" grey darken bg wd-sm wd-6 je @click="getInnerText"></i>
            </div>
            <div class="text" @click="getInnerText">wd-sm wd-6</div>
            <div class="text" @click="getInnerText">ht-sm ht-22</div>
            <div class="box">
                <i class="bar" grey darken bg wd-sm wd-6 @click="getInnerText"></i>
            </div>
        </div>
        <div class="row">
            <div class="box">
                <i class="bar" grey darken bg wd-sm wd-2 je @click="getInnerText"></i>
            </div>
            <div class="text" @click="getInnerText">wd-sm wd-2</div>
            <div class="text" @click="getInnerText">ht-sm ht-16</div>
            <div class="box">
                <i class="bar" grey darken bg wd-sm wd-2 @click="getInnerText"></i>
            </div>
        </div>
        <div class="row">
            <div class="box">
                <i class="bar" grey darken bg wd-xs wd-24 je @click="getInnerText"></i>
            </div>
            <div class="text" @click="getInnerText">wd-xs wd-24</div>
            <div class="text" @click="getInnerText">ht-sm ht-12</div>
            <div class="box">
                <i class="bar" grey darken bg style="width: 175px;" @click="getInnerText"></i>
            </div>
        </div>
        <div class="row">
            <div class="box">
                <i class="bar" grey darken bg wd-xs wd-19 je @click="getInnerText"></i>
            </div>
            <div class="text" @click="getInnerText">wd-xs wd-19</div>
            <div class="text" @click="getInnerText">ht-sm ht-8</div>
            <div class="box">
                <i class="bar" grey darken bg style="width: 157px;" @click="getInnerText"></i>
            </div>
        </div>
        <div class="row">
            <div class="box">
                <i class="bar" grey darken bg wd-xs wd-14 je @click="getInnerText"></i>
            </div>
            <div class="text" @click="getInnerText">wd-xs wd-14</div>
            <div class="text" @click="getInnerText">ht-sm ht-4</div>
            <div class="box">
                <i class="bar" grey darken bg wd-xs wd-14 @click="getInnerText"></i>
            </div>
        </div>
        <div class="row">
            <div class="box">
                <i class="bar" grey darken bg wd-xs wd-10 je @click="getInnerText"></i>
            </div>
            <div class="text" @click="getInnerText">wd-xs wd-10</div>
            <div class="text" @click="getInnerText">ht-sm ht-1</div>
            <div class="box">
                <i class="bar" grey darken bg wd-xs wd-10 @click="getInnerText"></i>
            </div>
        </div>
        <div class="row">
            <div class="box">
                <i class="bar" grey darken bg wd-xs wd-6 je @click="getInnerText"></i>
            </div>
            <div class="text" @click="getInnerText">wd-xs wd-6</div>
            <div class="text" @click="getInnerText">ht-xs ht-23</div>
            <div class="box">
                <i class="bar" grey darken bg style="width: 110px;" @click="getInnerText"></i>
            </div>
        </div>
        <div class="row">
            <div class="box">
                <i class="bar" grey darken bg wd-xs wd-3 je @click="getInnerText"></i>
            </div>
            <div class="text" @click="getInnerText">wd-xs wd-3</div>
            <div class="text" @click="getInnerText">ht-xs ht-20</div>
            <div class="box">
                <i class="bar" grey darken bg style="width: 99px" @click="getInnerText"></i>
            </div>
        </div>
        <div class="row">
            <div class="box">
                <i class="bar" grey darken bg wd-xs je @click="getInnerText"></i>
            </div>
            <div class="text" @click="getInnerText">wd-xs</div>
            <div class="text" @click="getInnerText">ht-xs ht-17</div>
            <div class="box">
                <i class="bar" grey darken bg style="width: 89px" @click="getInnerText"></i>
            </div>
        </div>
        <div class="row">
            <div class="box">
                <i class="bar" grey darken bg wd-20 je @click="getInnerText"></i>
            </div>
            <div class="text" @click="getInnerText">wd-20</div>
            <div class="text" @click="getInnerText">ht-20</div>
            <div class="box">
                <i class="bar" grey darken bg wd-20 @click="getInnerText"></i>
            </div>
        </div>
        <div class="row">
            <div class="box">
                <i class="bar" grey darken bg wd-18 je @click="getInnerText"></i>
            </div>
            <div class="text" @click="getInnerText">wd-18</div>
            <div class="text" @click="getInnerText">ht-18</div>
            <div class="box">
                <i class="bar" grey darken bg wd-18 @click="getInnerText"></i>
            </div>
        </div>
        <div class="row">
            <div class="box">
                <i class="bar" grey darken bg wd-16 je @click="getInnerText"></i>
            </div>
            <div class="text" @click="getInnerText">wd-16</div>
            <div class="text" @click="getInnerText">ht-16</div>
            <div class="box">
                <i class="bar" grey darken bg wd-16 @click="getInnerText"></i>
            </div>
        </div>
        <div class="row">
            <div class="box">
                <i class="bar" grey darken bg wd-15 je @click="getInnerText"></i>
            </div>
            <div class="text" @click="getInnerText">wd-15</div>
            <div class="text" @click="getInnerText">ht-15</div>
            <div class="box">
                <i class="bar" grey darken bg wd-15 @click="getInnerText"></i>
            </div>
        </div>
        <div class="row">
            <div class="box">
                <i class="bar" grey darken bg wd-14 je @click="getInnerText"></i>
            </div>
            <div class="text" @click="getInnerText">wd-14</div>
            <div class="text" @click="getInnerText">ht-14</div>
            <div class="box">
                <i class="bar" grey darken bg wd-14 @click="getInnerText"></i>
            </div>
        </div>
        <div class="row">
            <div class="box">
                <i class="bar" grey darken bg wd-13 je @click="getInnerText"></i>
            </div>
            <div class="text" @click="getInnerText">wd-13</div>
            <div class="text" @click="getInnerText">ht-13</div>
            <div class="box">
                <i class="bar" grey darken bg wd-13 @click="getInnerText"></i>
            </div>
        </div>
        <div class="row">
            <div class="box">
                <i class="bar" grey darken bg wd-12 je @click="getInnerText"></i>
            </div>
            <div class="text" @click="getInnerText">wd-12</div>
            <div class="text" @click="getInnerText">ht-12</div>
            <div class="box">
                <i class="bar" grey darken bg wd-12 @click="getInnerText"></i>
            </div>
        </div>
        <small jc style="margin: 10px 0">常见宽高尺度用例，点击中部属性名即可复制</small>
    </div>
</template>

<script>
export default {
    name: "showcase_1",
    mounted(){
        let bars = document.getElementsByClassName('bar')
        for(let i=0;i<bars.length;i++){
            bars[i].innerText = parseInt(bars[i].offsetWidth) + 'px'
        }
    },
    methods:{
        copy(str){
            this.$copy(str)
            this.$notify({
                text:  str + ' 已复制',
                color:'green',
            })
        },
        getInnerText(){
            let text = event.currentTarget.innerText
            this.$copy(text)
            this.$notify({
                text:  text + ' 已复制',
                color:'green',
            })
        },
    }
}
</script>

<style lang="scss">
div.doc-sizing-showcase_1{
    font-size: 12px;
    div.tt{
        font-size: 13px;
        margin: 9px 0 7px 0;
        i{ width: 80px}
    }
    div.row{
        display: flex;justify-content: center;
        height: 17px;
        line-height: 16px;
        margin-bottom: 2px;
        div.box{
            height: 100%;
            width: 364px;
            display: flex;
            &:first-child{
                justify-content: end;
            }
            i{
                cursor: pointer;
                height: 100%;
                border-radius: 2px;
                padding: 0 4px;
                &:hover{
                    filter: brightness(1.4);
                }
            }
        }

        div.text{
            font-family: monospace!important;
            cursor: pointer;
            padding: 0 5px;letter-spacing: 0;
            background-color: rgba(0,0,0,.04);
            height: 100%;
            margin: 0 3px;
            border-radius: 2px;
            width: 78px;
            &:hover{
                color: white;
                background-color: #626F7E;
            }
        }
    }
}
</style>