<template>
    <div class="doc-box" :class="{ mobile: $global.mobile }">
        <div class="showcaseBox" lighten pa-md card bv >
            <div class="btns" xs jsb ref="btns">
                <div class="btnBox" jc v-for="(item, idx) in samps" @click="index = String(idx + 1)">
                    <i noselect class="btn" :class="{ current: index === String(idx + 1)}">
                        {{ item.name }}
                    </i>
                </div>
            </div>
            <input style="width: 812px" mx-auto pointer type="range" min="1" max="11" v-model="index">
            <div ht-4></div>
            <showcase_a :index="index"/>
        </div>
        <h2 tag-bar md style="margin-top: 36px">内间距 外间距</h2>
        <p>
            Mew 提供非常详细的边距属性，内外边距通过段位和标号控制，同段位同标号的值都一样，所有标号跨度也都一样，例如 pa-xs 和 ma-xs，他们的值是一样的，
            前者用于内边距，后者用于外边距。<i bold>边距的段位，不是均匀递增，而是针对使用场景确定的</i>，例如 mt-md 适合文章上下段落之间的外边距，mt-lg 是适合文章主题分块的外边距。
        </p>
        <prism lang="css" style="margin-top: 25px"><pre>/* 内间距公式示例 */
padding: calc( var(--pt) * 1px + var(--xpt) * 1px )
         calc( var(--pr) * 1px + var(--xpr) * 1px )
         calc( var(--pb) * 1px + var(--xpb) * 1px )
         calc( var(--pl) * 1px + var(--xpl) * 1px );</pre>
        </prism>
        <ul style="margin-top: 10px">
            <li>
                <q>pt</q> <q>pr</q> <q>pb</q> <q>pl</q> → <q>padding-top</q> <q>padding-right</q> <q>padding-bottom</q> <q>padding-left</q>
            </li>
            <li>
                <q>px</q> <q>py</q> <q>pa</q> → <q>padding-left & padding-right</q> <q>padding-top & padding-bottom</q> <q>padding-all</q>
            </li>
            <li>
                <q>mx-auto</q> → <q>margin-left:auto;margin-right:auto</q>
            </li>
        </ul>
        <div xs message style="margin-top: 10px">外边距属性用法与内边距相同，通过 mt mr ma mx my 等控制；使用时，先确定边距段位，再通过标号微调。</div>
        <div grey lighten bb dashed ac-18 my-lg></div>
        <h2 tag-bar md style="margin-top: 36px">边框 微调和圆角</h2>
        <p>
            边框属性可以控制边框的宽度、样式、倒角和颜色，<i bold>边框只有段位，边框无标号，边框的段位仅控制宽度</i>。
        </p>
        <ul style="margin-top: 8px">
            <li>
                <q>bt</q> <q>br</q> <q>bb</q> <q style="margin-right: 4px">bl</q> → <q>border-top</q> <q>border-right</q> <q>border-bottom</q> <q>border-left</q>
            </li>
            <li>
                <q>nu</q> <q>nr</q> <q>nd</q> <q>nl</q> → <q>nudge-up</q> <q>nudge-right</q> <q>nudge-down</q> <q>nudge-left</q>
            </li>
            <li>
                <q>border</q> <q>ba</q> <q>bv</q> → <q>border-all</q> <q>border-all</q> <q>bevel</q>
            </li>
        </ul>
        <div grey darken bg py-lg relative style="margin-top: 15px;border-radius: 20px 20px 2px 2px">
            <fit fill class="bg">
                <img :src="img2">
            </fit>
            <div mx-auto wd-sm wd-19 ht-md ht-21 black darken bg round pa-md relative>
                <fit fill orange lighten bg round ba-sm>
                    <img :src="img">
                </fit>
            </div>
        </div>
        <prism lang="html" style="margin-top:0;border-radius: 0 0 20px 20px;">{{ html }}</prism>
        <div bt dashed grey lighten ac-18 col-24 my-lg/>
        <h2 tag-bar md style="margin-top: 36px">弹性 盒子和对齐</h2>
        <p>对齐属由 <q>display:flex</q> 实现，例如 <q>jsb</q> 对应的样式就是 <q>display:flex;justify-content:space-between;</q></p>
        <showcase_flex style="margin-top: 18px;"/>
    </div>
</template>

<script>
import showcase_a from './showcase_a'
import showcase_flex from './showcase_flex'
import samps from './samps'
import img from '@/assets/art/p_f_1.jpg'
import img2 from '@/assets/wolai/shanshui_1.png'
export default {
    name: "doc-box",
    mounted(){
        let el = this.$el.getElementsByClassName('showcase_a')[0]
        // fullWidth
        let f = this.$refs.btns.scrollWidth
        // currentWidth
        let c = el.offsetWidth
        this.$el.style.setProperty('--scale',c / f + 0.01)
    },
    components:{
        showcase_a,showcase_flex
    },
    data(){
        return {
            index:'6',
            samps,
            img,img2,
            html:`<div mx-auto wd-sm wd-19 ht-md ht-21 black darken bg round pa-md>
    <fit fill orange bg round ba-sm>
        <img :src="img">
    </fit>
</div>`
        }
    },
}
</script>

<style scoped lang="scss">
div.doc-box.mobile{
    div.btns{
        transform: scale(var(--scale));
        transform-origin: 0% 50%;
    }
    input{
        width: 100%!important;
    }
    p{
        font-size: 14px;
    }
    ul{
        margin-top: -5px;
    }
    li{
        font-size: 12px;line-height: 1.5;
    }
}
div.bg{
    position: absolute;left: 0;top: 0;
}
div.showcaseBox{
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
</style>