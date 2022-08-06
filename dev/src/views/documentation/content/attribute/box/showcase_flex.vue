<template>
    <div class="showcase_flex">
        <div class="btns" jsb grey bg>
            <i :class="{ active: horizontal === 'flex'}" @click="horizontal='flex'">flex</i>
            <i :class="{ active: horizontal === 'js'}" @click="horizontal='js'">js</i>
            <i :class="{ active: horizontal === 'jc'}" @click="horizontal='jc'">jc</i>
            <i :class="{ active: horizontal === 'je'}" @click="horizontal='je'">je</i>
            <i :class="{ active: horizontal === 'jsb'}" @click="horizontal='jsb'">jsb</i>
            <i :class="{ active: horizontal === 'jsa'}" @click="horizontal='jsa'">jsa</i>
            <i :class="{ active: vertical === 'ac'}" @click="vertical='ac'">ac</i>
            <i :class="{ active: vertical === 'as'}" @click="vertical='as'">as</i>
            <i :class="{ active: vertical === 'ae'}" @click="vertical='ae'">ae</i>
            <i :class="{ active: column}" @click="column = !column">column</i>
            <i :class="{ active: reverse}" @click="reverse = !reverse">reverse</i>
            <i :class="{ active: wrap}" @click="wrap = !wrap">wrap</i>
        </div>
        <div class="code"></div>
        <div class="samp" flex
             :class="{
            js:horizontal === 'js',
            jsb:horizontal === 'jsb',jsa:horizontal === 'jsa',jc:horizontal === 'jc', je:horizontal === 'je',
            ae:vertical === 'ae', ac:vertical === 'ac', as:vertical === 'as',
            wrap:wrap, column:column, reverse:reverse
            }">
            <div class="aaaa _0" ac jc><ico>doc-square</ico></div>
            <fit class="item _1">
                <img fill :src="img_1">
            </fit>
            <div class="aaaa _0" ac jc><ico>doc-square</ico></div>
            <fit class="item _2">
                <img fill :src="img_2">
            </fit>
            <div class="aaaa _0" ac jc><ico>doc-square</ico></div>
            <fit class="item _1">
                <img fill :src="img_3">
            </fit>
            <div class="aaaa _0" ac jc><ico>doc-square</ico></div>
        </div>
    </div>
</template>

<script>
import img_1 from '@/assets/art/flex_1.1.jpg'
import img_2 from '@/assets/art/flex_1.2.jpg'
import img_3 from '@/assets/art/flex_1.3.jpg'
export default {
    name: "showcase_flex",
    data(){
        return {
            horizontal:'jsa',
            vertical:'ac',
            reverse: false,
            column: false,
            wrap: false,
            img_1,img_2,img_3
        }
    },
    watch:{
        wrap(val){
            if(val){
                let t = setTimeout(()=>{
                    this.wrap = false
                    clearTimeout(t)
                },1000)
            }

        }
    }
}
</script>

<style scoped lang="scss">
div.showcase_flex{
    border: .5px solid rgba(0,0,0,.2);
    //height: 360px;
    background: url("@/assets/wolai/wuhai.png");
    background-size: cover;
    border-radius: 20px;
    overflow: hidden;font-size: 12px;
    div.btns{
        padding: 10px 12px;
        text-align: center;
        user-select: none;
        i{
            color: rgba(255,255,255,.8);letter-spacing: .5px;
            width: 68px;height: 22px;line-height: 20px;
            border-radius: 50px;
            border: .5px solid rgba(255,255,255,.7);
            cursor: pointer;
            &:hover{
                border-color: white;
            }
            &.active{
                color: #3f4654;
                font-weight: bold;
                background-color: white;
            }
        }
    }
    div.code{
        height: 40px;
        background-color: rgba(105,113,133,.1);
    }
    div.samp{
        height: 280px;
        padding: 20px 0;
        transition: height .1s linear;
        &.js{ justify-content: start;}
        &.jsb{ justify-content: space-between;}
        &.jsa{ justify-content: space-around;}
        &.jc{ justify-content:center;}
        &.je{justify-content: end}
        &.ae{ align-items: end;}
        &.ac{ align-items: center;}
        &.as{ align-items: stretch;}
        &.wrap{ flex-wrap: wrap;padding:20px 100px;min-height: 400px;
            div.aaaa{
                margin: 0 130px;
            }
            div.item._2{
                height: 130px!important;
                transform: scale(.7);
            }
        }
        &.column{flex-direction: column;height: 500px;
            &.reverse{flex-direction: column-reverse}
            div.item{
                min-height: 0!important;
                height: 100px!important;
            }
        }
        &.reverse{ flex-direction: row-reverse }
        div.aaaa{
            //border: 1px solid rgba(0,0,0,.2);
            border-radius: 2px;text-align: center;
            color: rgba(0,0,0,1);
            margin: 0 16px;
        }
        div.item{
            box-shadow: 0 0 0 16px rgba(0,0,0,.9);
            border-radius: 8px;
            width: 120px;
            border: 1px solid #FFAF64;
            background-color: rgba(0,0,0,.8);
            &._1{
                min-height: 130px;
            }
            &._2{
                min-height: 180px;
            }
        }
    }
}
</style>