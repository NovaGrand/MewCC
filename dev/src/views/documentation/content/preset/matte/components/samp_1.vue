<template>
    <div class="monitor" noselect style="margin-top: 20px">
        <div class="screen" ref="screen" ht-lg ht-10 bv-lg>
            <fit fill>
                <video class="bg" type="video/mp4" autoplay loop muted :src="vid"/>
            </fit>
            <div class="mask"/>
        </div>
        <div class="controls" jc ac>
            <button @click="toggleColor">Color</button>
            <button @click="toggleIcon">Icon</button>
            <button @click="toggle">{{ $loading.valid ? 'Close matte' : 'Show matte' }}</button>
            <button @click="toggleImage">Image</button>
            <button @click="toggleText">Text</button>
        </div>
    </div>
</template>

<script>
import img_1 from '@/assets/flag.jpg'
import img_2 from '@/assets/flag_2.jpg'
import img_3 from '@/assets/flag_1.jpg'
import vid from '@/assets/doc/Culligan-home.mp4'
let clrs = ['red','#00a1ff','#76ff00','white']
let imgs = [img_1,img_2,img_3,'']
let icos = ['face-satisfied','state-laberty','level-upgrade','']
let txts = ['载入中','请稍等','正在处理','Loading']
export default {
    name: "samp_1",
    mounted(){
        this.$loading.config = { color:'white', target: this.$refs.screen }
    },
    data(){
        return {
            colorIndex:0,
            imageIndex:0,
            iconIndex:0,
            textIndex:0,
            vid,
        }
    },
    methods:{
        setLoadingTarget(){
            if(!this.$loading.valid)
                this.$loading.target = this.$refs.screen
        },
        toggle(){
            this.$loading.valid = !this.$loading.valid
        },
        toggleColor(){
            if(this.colorIndex === 3)
                this.colorIndex = 0
            else
                this.colorIndex ++
            this.$loading.color = clrs[this.colorIndex]
            if(!this.$loading.valid)
                this.$loading.valid = true
        },
        toggleImage(){
            if(this.imageIndex === 3)
                this.imageIndex = 0
            else
                this.imageIndex ++
            this.$loading.image = imgs[this.imageIndex]
            if(!this.$loading.valid)
                this.$loading.valid = true
        },
        toggleIcon(){
            this.$loading.image = ''
            if(this.iconIndex === 3)
                this.iconIndex = 0
            else
                this.iconIndex ++
            this.$loading.icon = icos[this.iconIndex]
            if(!this.$loading.valid)
                this.$loading.valid = true
        },
        toggleText(){
            this.$loading.image = ''
            this.$loading.icon = ''
            if(this.textIndex === 3)
                this.textIndex = 0
            else
                this.textIndex ++
            this.$loading.text = txts[this.textIndex]
            if(!this.$loading.valid)
                this.$loading.valid = true
        },
    }
}
</script>

<style scoped lang="scss">
div.monitor{
    background-color: #B3B9C8;
    padding: 6px 6px 0 6px;
    border-radius: 11px;
    div.screen{
        position: relative;
        border: 2px solid #3f3f3f;
        &::before{
            position: absolute;content: '';z-index: 10;
            background-color: white;
            width: 54px;height: 100%;
            box-shadow: 830px 0 0 white;
        }
        div.mask{
            position: absolute;left: 0;top: 0;
            width: 100%;height: 100%;
            z-index: 11;
        }

    }
    div.controls{
        height: 50px;
        button{
            color: #464e56;
            font-size: 14px;
            padding: 0 20px 1px 20px;
            min-width: 90px;height: 28px;
            border: .5px solid rgba(0,0,0,.4);
            background: linear-gradient(0deg,rgba(0,0,0,.04) 10% ,rgba(255,255,255,0.5) 95%);
            box-shadow: 0 1px 1px inset rgba(255,255,255,.4),0 -1px 1px inset rgba(0,0,0,.2),0 0 1px rgba(0,0,0,.3);
            &:hover{
                filter: brightness(1.2);
            }
            &:first-child{
                border-radius: 20px 0 0 20px;
            }
            &:last-child{
                border-radius: 0 20px 20px 0;
            }
            &:active{
                transform: translateY(.5px);
                box-shadow: 0 -1px 1px inset rgba(0,0,0,.3), 1px 1px 8px rgba(0,0,0,.08),0 1px 1.5px inset rgba(0,0,0,.1);
            }
        }
    }
}
</style>