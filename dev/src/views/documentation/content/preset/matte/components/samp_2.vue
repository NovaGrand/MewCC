<template>
    <div class="doc-matte-samp_2" :style="'--IDX:' + index + ';--CLR:' + steps[index].color">
        <div class="box contrast" jc ac>
            <div class="blur" v-for="n in 3" jc ac>{{ n }}</div>
            <div class="blur drop"></div>
        </div>
        <div class="box items" jc ac>
            <div class="item static">
                <transition name="samp2_shrink">
                    <div v-if="index !== 0" fill jc ac column px-sm round ba-xs alpha-5>
                        <i black wd-xs wd-8 pl-sm bold>机组：AX 105</i>
                        <i black wd-xs wd-8 pl-sm>电压：240V</i>
                        <i black wd-xs wd-8 pl-sm>舱温：28℃</i>
                        <i black wd-xs wd-8 pl-sm>油温：45℃</i>
                        <i black wd-xs wd-8 pl-sm>人员：李闻道</i>
                    </div>
                </transition>
            </div>
            <div class="item static">
                <transition name="samp2_shrink">
                    <div v-if="index !== 1" fill jc ac column px-sm round ba-xs alpha-5>
                        <i black wd-xs wd-8 pl-sm bold>延迟：30ms</i>
                        <i black wd-xs wd-8 pl-sm>错误：0</i>
                        <i black wd-xs wd-8 pl-sm>警告：15</i>
                        <i black wd-xs wd-8 pl-sm>日志：1</i>
                        <i black wd-xs wd-8 pl-sm>人员：郑洪</i>
                    </div>
                </transition>
            </div>
            <div class="item static">
                <transition name="samp2_shrink">
                    <div v-if="index !== 2" fill jc ac column px-sm round ba-xs alpha-5>
                        <i black wd-xs wd-8 pl-sm bold>弱电：5/30</i>
                        <i black wd-xs wd-8 pl-sm>余量：05.35d</i>
                        <i black wd-xs wd-8 pl-sm>负载：41.51%</i>
                        <i black wd-xs wd-8 pl-sm>最高：A-15-5</i>
                        <i black wd-xs wd-8 pl-sm>人员：李圆圆</i>
                    </div>
                </transition>
            </div>
            <div class="item checking">
                <div class="border" ref="window" fill round></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "doc-matte-samp_2",
    mounted(){
      this.$pending.config = {
          target:this.$refs.window, next: true
      }
      let flag = true
      this.timer = setInterval(()=>{
            if(flag){
                if(this.index < 2)
                  this.index ++
                else if(this.index === 2){
                  flag = false
                  this.index --
                }
            }
            else{
                if(this.index > 0)
                  this.index --
                else if(this.index === 0){
                  flag = true
                  this.index ++
                }
            }
            this.$pending.text = this.steps[this.index].text
            this.$pending.color = this.steps[this.index].color
          this.$pending.icon = this.steps[this.index].icon
            this.$pending.next = this.steps[this.index].next
      },3000)
      this.$pending.valid = true
    },
    beforeUnmount(){
        clearInterval(this.timer)
        this.timer = null
    },
    data(){
        return {
            timer: null,
            index:0,
            steps:[
                {
                    text:'设备正常',
                    color:'#ffd942',
                    next: ()=>{},
                    icon:'auth-analysis'
                },
                {
                    text:'数据同步',
                    color:'#23c4ff',
                },
                {
                    text:'状态良好',
                    color:'#00ff48',
                    next: ()=>{},
                    icon:'state-note-done',
                }
            ]
        }
    },
}
</script>

<style scoped lang="scss">
div.doc-matte-samp_2{
    position: relative;
    background-color: #F7F8F9;
    border-radius: 11px 11px 0 0;
    height: 240px;
    overflow: hidden;
    div.box{
        position: absolute;left: 0;top: 0;
        width: 100%;height: 100%;
        &.contrast{
            z-index: -1;
            background-color: #adadad;
            filter: contrast(100) brightness(1);
            div.blur{
                margin: 0 40px;
                border-radius: 200px;
                height: 180px;
                width: 180px;
                filter: blur(20px);
                //background-color: #8c0000;
                background-color: black;
                &.drop{
                    position: absolute;top: 31px;
                    left: calc(var(--IDX) * 260px + 62px);
                    transition: left 1.2s ease;
                }
            }
        }
        &.items{
            z-index: 1;
            background: linear-gradient(0deg,rgba(179,185,200,.4) 0% ,rgba(0,0,0,.0) 50%,rgba(179,185,200,.4) 100%);
            div.item{
                width: 190px;height: 190px;
                border-radius: 100px;
                &.static{
                    width: 196px;height: 196px;
                    margin: 0 32px;
                    background-color: #dee5f2;
                    border: 5px solid #FFAF64;
                    padding: 10px;
                }
                &.checking{
                    position: absolute;top: 25px;
                    left: calc(var(--IDX) * 260px + 95px);
                    transition: left 1.2s ease, border .3s linear;
                    //border: 8px solid #ffd942;
                    border: 8px solid var(--CLR);
                    div.border{
                        border: 1px solid black;
                        box-shadow: 0 0 0 5px inset rgba(0,0,0,1);
                    }
                }

            }
        }
    }
}
.samp2_shrink-enter-active,.samp2_shrink-leave-active {
    transition: all .4s cubic-bezier(0.84, -1.13, 0.16, 2);
}
.samp2_shrink-enter-from,.samp2_shrink-leave-to {
    transform: scale(.6);
    opacity: .2;
}
</style>
