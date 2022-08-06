<template>
    <div class="doc-text-showcase_a">
        <div class="card" bv-sm white lighten bg>
            <div class="content" v-if="index === '1'">
                <div jc>
                    <q xs v-text="`<i xl fs-25>超大字体</i>`"></q>
                </div>
                <div mt-sm jc xl fs-25>超大字体</div>
            </div>
            <div class="content" v-if="index === '2'">
                <div jc>
                    <q xs v-text="`<i xl bold>大 标 题</i>`"></q>
                </div>
                <div my-md jc xl bold>大 标 题</div>
            </div>
            <div class="content" v-if="index === '3'">
                <div jc>
                    <q xs v-text="`<i lg bold>小 标 题</i>`"></q>
                </div>
                <div my-md jc lg bold>大 标 题</div>
            </div>
            <div class="content" pa-md v-if="index === '5'">
                <div jc>
                    <q xs v-text="`<p>这是一段普通文本</p>`"></q>
                </div>
                <p my-md jc>这是一段普通文本</p>
            </div>
            <div class="content" pa-md v-if="index === '4'">
                <div jc>
                    <q xs v-text="`<p xs>这是一段最小的文本</p>`"></q>
                </div>
                <p xs my-md jc>这是一段最小的文本</p>
            </div>
            <div class="content" pa-md v-if="index === '6'">
                <div jc>
                    <q xs v-text="`<div bold>使用 bold 属性加粗</div>`"></q>
                </div>
                <div bold my-md jc>使用 bold 属性加粗</div>
            </div>
            <div class="content" pa-md v-if="index === '7'">
                <div jc>
                    <q xs v-text="`<div bold ls-xl>使用 ls 属性控制间距</div>`"></q>
                </div>
                <div bold ls-xl my-md jc>使用 ls 属性控制间距</div>
            </div>
            <div class="content" pa-md v-if="index === '8'">
                <div jc>
                    <q xs v-text="`<div bold ellipsis wd-md wd-12>使用 ellipsis 属性使固定宽度的单行文字自动省略，bla bla bla bla</div>`"></q>
                </div>
                <div bold ellipsis wd-md wd-12 my-md mx-auto>使用 ellipsis 属性使超出范围的单行文字自动省略，bla bla bla bla</div>
            </div>
            <div class="content" pa-md v-if="index === '9'">
                <div jc>
                    <q xs v-text="`<div bold indent>使用 indent 属性使文本首行缩进</div>`"></q>
                </div>
                <div bold indent wd-md wd-12 my-md mx-auto foo py-sm px-md>使用 indent 属性使文字首行缩进，bla bla bla bla bla bla bla bla bla bla bla bla</div>
            </div>
            <div class="content" pa-md v-if="index === '10'">
                <div jc>
                    <q xs v-text="`<div red bold lg>使用颜色属性控制文字颜色</div>`"></q>
                </div>
                <div bold red lg py-sm px-md jc>使用颜色属性控制文字颜色</div>
            </div>
            <div class="content" pa-md v-if="index === '11'">
                <div jc>
                    <q xs v-text="`<div caution>使用通知属性实现特殊文字效果</div>`"></q>
                </div>
                <div sm caution py-sm px-md mt-md>使用通知属性实现特殊文字效果，通知属性有 success message caution warning failure noselect</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "showcase_a",
    data(){
        return {
            Lorem:`这是一段普通文本`

        }
    },
    props:{
        index:{
            type: [Number, String],
            default: '6',
        }
    },
}
</script>

<style scoped lang="scss">
div.doc-text-showcase_a{
    background-color: #d6f2ff;
    margin: 18px 4px 0 4px;
    padding: 24px;
    div.card{
        min-height: 100px;
        box-shadow: 1px 1px 3px rgba(0,0,0,.12);
        padding: 10px;
    }
}
</style>