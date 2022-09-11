<template>
    <div noselect class="doc-sizing-showcase_card" :class="{ mobile: $global.mobile }">
        <!--第一行-->
        <div style="height: 240px" jsb>
            <fit style="width: 360px;height: 100%" class="sample" lg grey darken bg @click="copy('wd-md ht-md')">
                <div fill ac class="a">
                    <i>wd-md ht-md 常见于预览图</i>
                </div>
            </fit>
            <div style="height: 100%;width: 350px">
                <fit style="width:350px;height: 120px" class="sample" lg red darken bg @click="copy('wd-sm wd-24 ht-sm')">
                    <div fill ac class="b">
                        <i>wd-sm wd-24 ht-sm 常见于头图</i>
                    </div>
                </fit>
                <div jsb relative style="margin-top: 5px;height: 115px">
                    <div black bg jc ac xl style="width: 24px;height: 24px;text-align: center"
                         class="sample" @click="copy('wd-6 ht-6')">
                        +
                    </div>
                    <div black bg jc ac md style="width: 24px;height: 24px;text-align: center;padding-bottom:4px;position: absolute;left: 29px"
                         class="sample" @click="copy('wd-6 ht-6')">
                        ①
                    </div>
                    <div black bg jc ac md style="width: 56px;height: 24px;text-align: center;position: absolute;left: 58px"
                         class="sample" @click="copy('wd-14 ht-6')">
                    </div>
                    <div black bg jc ac style="width: 114px;height: 86px;text-align: center;position: absolute;left: 0;top: 29px"
                         class="sample" @click="copy('wd-xs wd-7 ht-xs ht-16')">
                    </div>

                    <div cyan darken bg jc ac md style="width: 24px;height: 24px;text-align: center;padding-bottom:2px;position: absolute;left: 119px"
                         class="sample" @click="copy('wd-6 ht-6')">
                    </div>
                    <div cyan darken bg jc ac md style="width: 84px;height: 24px;text-align: center;padding-bottom:2px;position: absolute;left: 148px"
                         class="sample" @click="copy('wd-21 ht-6')">
                    </div>
                    <div cyan darken bg jc ac md style="width: 24px;height: 86px;text-align: center;padding-bottom:2px;position: absolute;left: 119px;top: 29px"
                         class="sample" @click="copy('wd-6 ht-xs ht-16')">
                    </div>
                    <div cyan darken bg jc ac md style="width: 84px;height: 86px;text-align: center;padding-bottom:2px;position: absolute;left: 148px;top: 29px"
                         class="sample" @click="copy('wd-21 ht-xs ht-16')">
                    </div>

                    <div blue darken bg jc ac md style="width: 112px;height: 115px;text-align: center;padding-bottom:2px;position: absolute;left: 237px"
                         class="sample" @click="copy('wd-xs wd-6 ht-xs ht-24')">
                    </div>
                </div>
            </div>
            <div style="width: 180px;height: 240px" column jsb>
                <div md jc ac black bg wd-sm ht-sm class="sample" @click="copy('wd-sm ht-sm')">橱 窗</div>
                <div md jc ac wd-sm ht-xs style="height: 115px;border: 2px solid rgba(0,0,0,.4)" class="sample" @click="copy('wd-sm ht-xs ht-25')">小 图</div>
            </div>
        </div>
        <!--第二行-->
        <div style="height: 480px;margin: 6px 0" jsb>
            <div style="width: 174px;height:100%" column jsb>
                <div black lighten bg jc ac style="width: 174px;height: 174px" class="sample" @click="copy('wd-xs wd-24 ht-sm ht-12')">
                    Git Avatar
                </div>
                <div style="width:174px;height: 116px" jsb>
                    <div grey darken bg wd-19 ht-xs ht-25 ac jc class="sample" @click="copy('wd-19 ht-xs ht-25')">
                        3寸照片
                    </div>
                    <div wd-23 style="height: 116px" column jsb>
                        <div blue bg wd-23 ht-7 jc ac class="sample" @click="copy('wd-23 ht-7')">提交</div>
                        <div grey bg wd-23 ht-xs ht-15 jc ac class="sample" @click="copy('wd-23 ht-xs ht-15')">专辑</div>
                    </div>
                </div>
                <fit black lighten bg ht-xs ht-8 style="width:174px"
                     class="sample" @click="copy('wd-xs wd-24 ht-xs ht-8')">
                    <div fill ac class="d">
                        <i>wd-xs wd-24 ht-xs ht-8</i>
                    </div>
                </fit>
                <div ht-sm ac style="width:174px;border: 2px solid rgba(0, 0, 0, 0.45);padding-left: 18px"
                     class="sample" @click="copy('wd-xs wd-24 ht-sm')">
                    面 板
                </div>
            </div>
            <fit lg black lighten bg wd-xl ht-xl class="sample" @click="copy('wd-xl ht-xl')">
                <div fill ac class="vid">
                    <i>wd-xl ht-xl 720p视频的尺寸</i>
                </div>
            </fit>
        </div>
        <!--第三行-->
        <div style="height: 320px" jsb>
            <div style="width: 174px">
                <div jsb>
                    <div black bg wd-xs wd-5 ht-15 ac style="padding-left: 20px" class="sample" @click="copy('wd-xs wd-5 ht-15')">标 题</div>
                    <div red bg lighten wd-15 ht-15 ac jc lg bold class="sample" @click="copy('wd-15 ht-15')">P</div>
                </div>
                <div relative style="margin-top: 5px">
                    <div blue darken bg wd-xs wd-5 ht-8 ac style="padding-left: 20px"
                         class="sample" @click="copy('wd-xs wd-5 ht-15')"
                    >导 航</div>
                    <div red lighten bg wd-15 ht-sm ac style="position: absolute;left: 113px;top: 0"
                         class="sample" @click="copy('wd-15 ht-sm')"></div>
                    <fit red lighten bg wd-15 ht-sm style="position: absolute;left: 113px;top: 0"
                         class="sample" @click="copy('wd-15 ht-sm')">
                        <div fill ac class="c">
                            <i>wd-15 ht-sm</i>
                        </div>
                    </fit>
                    <div blue darken bg wd-19 ht-sm ht-21 ac style="position: absolute;left: 0;top: 38px"
                         class="sample" @click="copy('wd-19 ht-sm ht-21')"></div>
                    <div blue darken bg wd-23 ht-sm ht-2  ac style="position: absolute;left: 82px;top: 127px"
                         class="sample" @click="copy('wd-23 ht-sm ht-2')"></div>
                </div>
            </div>
            <fit lg black lighten bg wd-lg ht-lg class="sample" @click="copy('wd-lg ht-lg')">
                <div fill ac class="d">
                    <i>wd-lg ht-lg 常见于商品封面</i>
                </div>
            </fit>
            <div lg grey darken bg ac jc style="width: 235px;height: 100%" class="sample" @click="copy('wd-sm wd-8 ht-lg')">肖 像</div>
        </div>
    </div>
</template>

<script>
import a from "@/assets/wolai/轮渡.jpg"
export default {
    name: "showcase_cards",
    mounted(){
        let w = document.body.offsetWidth
        let i = w / 900 - 0.01
        this.$el.style.setProperty('--i',i)
        this.$el.style.setProperty('--marginBottom',1054 * i * -1 + 'px')
    },
    data(){
        return {
            a
        }
    },
    methods:{
        copy(str){
            this.$copy(str)
            this.$notify({
                text:  str + ' 已复制',
                color:'green',
            })
        }
    }
}
</script>

<style lang="scss">
div.doc-sizing-showcase_card.mobile{
    transform: scale(var(--i));
    transform-origin: 0% 0%;
    margin-bottom: var(--marginBottom);
}
div.doc-sizing-showcase_card{
    width: 900px;
    height: 1054px;
    background-size: cover;
    div.sample{
        cursor: pointer;
        border-radius: 3px;
        transition: transform 0.3s cubic-bezier(0.84, -1.13, 0.16, 2);
        &:hover{
            filter: brightness(1.06);
            position: relative;z-index: 1;
            transform: scale(1.02);
        }
        div{
            transition: all .2s ease;
            position: relative;
            &:hover{
                box-shadow: 0 0 150px inset rgba(0,0,0,.4);
                i{
                    opacity: 1;
                }
            }
            i{
                font-size: 14px;
                background-color: rgba(0,0,0,.5);
                transition: all .2s ease;
                width: 100%;
                padding: 3px 0;text-align: center;
                opacity: 0;
            }
            &.a{ background: url("@/assets/wolai/开拓者.jpg") }
            &.b{ background: url("@/assets/wolai/巴黎.jpg") }
            &.c{ background: url("@/assets/wolai/秋.jpg") }
            &.d{ background: url("@/assets/wolai/傍晚的林中小屋.jpg") }
            &.vid{ background: url("@/assets/wolai/轮渡.jpg") }

        }

    }
}
</style>