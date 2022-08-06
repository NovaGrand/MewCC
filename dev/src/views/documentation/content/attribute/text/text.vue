<template>
    <div>
        <div class="doc-box" card lighten pa-md>
            <div class="btns" xs jsb>
                <div class="btnBox" jc v-for="(item, idx) in samps" @click="index = String(idx + 1)">
                    <i noselect class="btn" :class="{ current: index === String(idx + 1)}">
                        {{ item }}
                    </i>
                </div>
            </div>
            <input style="width: 812px" mx-auto pointer type="range" min="1" max="11" v-model="index">
            <showcase_a :index="index"></showcase_a>
        </div>
        <div class="sampleBox" ht-md ht-10 relative style="margin-top: 15px">
            <fit fill relative class="bg" style="border-radius: 2px 2px 0 0">
                <img fill :src="img">
            </fit>
            <div class="container" white py-md px-lg fill flex>
                <div lighten>
                    <h2 xl>Lorem Ipsum</h2>
                    <h2>
                        <i xl fs-25>A</i><i ml-sm lg>TOM</i>
                    </h2>
                    <small mt-xl mt-21>Excepteur sint occaecat cupidatat</small>
                </div>
                <div bl dashed white alpha-18 ht-sm ht-20 my-sm my-7 mx-md mx-12></div>
                <div wd-lg wd-8>
                    <p indent>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <p white alpha-15 pt-lg pt-24>Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. </p>
                </div>
            </div>
        </div>
        <prism lang="html" style="margin-top: 0;border-radius: 0 0 2px 2px">{{ html }}</prism>
        <div caution xs>希望你看到那长串的属性时，没有被吓到，与看上去不同的是，样式属性就同在元素上写 style 一样，实际心智负担很小。</div>
    </div>
</template>

<script>
import showcase_a from './showcase_a'
import img from '@/assets/wolai/傍晚的林中小屋.jpg'
export default {
    name: "doc-text",
    components:{
        showcase_a,
    },
    data(){
        return {
            img ,
            index:'6',
            samps:[
                '超大号', '大标题','小标题','最小文本','普通文本','加 粗','间距控制','文末省略','首行缩进','文字颜色','特殊样式'
            ],
            html:`<div white lighten>
    <h2 xl>Lorem Ipsum</h2>
    <h2>
        <i xl fs-25>A</i><i ml-sm lg>TOM</i>
    </h2>
    <small mt-xl mt-21>Excepteur sint occaecat cupidatat</small>
</div>
<div bl dashed white alpha-18 ht-sm ht-20 my-sm my-7 mx-md mx-12/>
<div wd-lg wd-8>
    <p white indent>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ... </p>
    <p white alpha-15 pt-lg pt-24>Integer in mauris eu nibh euismod gravida. Duis ac tellusi ... </p>
</div>`,
        }
    }
}
</script>

<style scoped lang="scss">
div.doc-box{
    div.btns{
        div.btnBox{
            width: 78px;
            padding: 5px 0;
            margin: 10px 0;
            cursor: pointer;
            &:hover{
                i.btn{
                    border-color: #006bd6;
                }
            }
            i.btn{
                border: 1px solid transparent;
                background-color: #d6f2ff;
                color: #006bd6;
                width: 70px;height: 24px;line-height: 23px;
                text-align: center;
                border-radius: 2px;
                &.current{
                    border-color: #006bd6;
                    &::before{
                        font-size: 15px;
                        color: #006bd6;
                        position: absolute;display: block;
                        content: '▼';
                        bottom: -14px;left: 27px;
                        transform: scaleY(.5);
                    }
                }
            }
        }
    }
    div.sliderText{
        font-size: 12px;
        i{
            white-space: nowrap;
            width: 11.11%;
            cursor: pointer;
            &:hover{
                font-weight: bold;
            }
        }
    }
}
div.sampleBox{
    .bg{
        filter: brightness(.4);
        &::before{
            position: absolute;left: 0;top: 0;
            content: '';display: block;
            box-shadow: 0 0 300px inset rgba(0,0,0,.6);
            width: 100%;height: 100%;z-index: 1;
        }
    }
    div.container{
        position: absolute;left: 0;top: 0;
        div.divider{
            height: 93%;
            margin: 10px 30px;
            border-left: 1px dashed rgba(255,255,255,.8);
        }
    }
}

</style>