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
            <div class="container" fill white px-lg jsb ac>
                <div lighten ls-sm column jsb ht-sm ht-20>
                    <h2 xl>Lorem Ipsum</h2>
                    <h2>
                        <i xl fs-25 foo>A</i><i ml-sm lg>TOM</i>
                    </h2>
                    <small mt-lg mt-24 foo>Excepteur ociafat sint ona</small>
                </div>
                <div bl dashed white ac-18 ht-sm ht-19/>
                <div wd-lg wd-10 column jsb ht-sm ht-22>
                    <p indent>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <p white ac-15>Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. </p>
                </div>
            </div>
        </div>
        <prism lang="html" style="margin-top:10px;border-radius: 0 0 2px 2px">{{ html }}</prism>
        <div caution xs style="margin-top: 10px">为便于排版布局，减轻字体对元素尺寸的影响，元素默认行高只有0.8（元素上下边界与字体齐平），只有 p q li 元素默认使用多行文本行高。</div>
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
            html:`<div lighten ls-sm column jsb ht-sm ht-20>
    <h2 xl>Lorem Ipsum</h2>
    <h2>
        <i xl fs-25>A</i><i ml-sm lg>TOM</i>
    </h2>
    <small mt-lg mt-24>Excepteur ociafat sint ona</small>
</div>
<div bl dashed white ac-18 ht-sm ht-19/>
<div wd-lg wd-10 column jsb ht-sm ht-22>
    <p indent>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ... </p>
    <p white ac-15>Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputa ... </p>
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