<template>
    <div class="grand-player" :class="{ shrink: shrink && !itemBox, initializing: !initialized }" tabindex="0" fill @contextmenu.prevent
         @keydown.prevent="keydown">
        <video ref="video" type="video/mp4" fill @contextmenu.prevent disablePictureInPicture controlsList="nodownload" :controls="false"
               :src="src" :poster="poster" :loop="loop" :volume="volume"
               @loadstart="loadstart"
               @loadedmetadata="loadedmetadata"
               @timeupdate="timeupdate"
               @waiting="waiting"
               @canplay="canplay"
               @ended="ended"
        >
            <div>
                Sorry, this video does not support your browser.
            </div>
            <div>
                Please try other
                <a href="https://videojs.com/html5-video-support/" target="_blank">web browsers</a>
            </div>
        </video>

        <div class="frame" fill flex column jsb>

            <div class="viewport" ref="viewport" @click="togglePlay">
                <div class="loadingBox" v-show="Boolean(src) && (!initialized || loading)">
                    <loading/>
                </div>
                <div class="playBox" :class="{ show: !loading && shrink && !playing }" flex jc ac>
                    <i class="play"/>
                </div>
            </div>

            <div class="console" ref="console">

                <div class="progress">
                    <input type="range" v-model="currentTime" @input="setCurrentTime" step="any" :max="duration" min="0">
                    <progress class="current" :value="currentTime" :max="duration"></progress>
                </div>

                <div class="controls" flex>
                    <div class="box play" :class="{ pause: playing }" @click="togglePlay" :tip-top="tip_play"></div>
                    <div class="box volume">
                        <div class="speaker" @click="toggleMute" :tip-top="tip_mute">
                            <svg class="ico" viewBox="0 0 24 24">
                                <path v-if="volume >= 0.5" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                                <path v-else-if="volume >= 0.15 && volume < 0.5" style="transform: translateX(-2px)" d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"/>
                                <path v-else-if="volume > 0 && volume < 0.15" style="transform: translateX(-4px)" d="M7 9v6h4l5 5V4l-5 5H7z"/>
                                <path v-else style="transform: translateX(1.5px) translateY(1px)"  d="M2.75651 4.3936L4.16616 3.31039L14.3653 15.5477L12.9769 16.8184L10.449 13.9229V18.6263L5.44904 13.6263H1.44904V7.62633H5.44904L2.75651 4.3936ZM7.79995 5.37612L10.449 2.62633V8.42391L7.79995 5.37612Z"/>
                            </svg>
                        </div>
                        <input type="range" v-model="volume" @input="tmpVolume = volume" step="any" max="1" min="0">
                    </div>
                    <div class="box duration">
                        <i>{{ formattedCurrentTime }}</i>
                        <i>{{ formattedDuration }}</i>
                    </div>
                    <div class="box gap"/>
                    <div class="box playbackRate" noselect @mouseenter="itemBox = true" @mouseleave="itemBox = false">
                        <div class="currentRate" :class="{ activated: Number(currentRate) !== 1 }" @click="itemBox = !itemBox">
                            <i bold xs>{{ currentRate }}</i><i class="sym" style="margin-left: 1px">×</i>
                        </div>
                        <div class="bleeds" v-show="itemBox">
                            <div class="itemBox" flex column reverse>
                                <div class="item" v-for="rate in playbackRate" @click="setRate(rate)">
                                    <i>{{ rate }}</i><i class="sym" xs>×</i>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="box loop" :class="{ valid: loop }" @click="loop = !loop" :tip-top="tip_loop">
                        <svg class="ico" viewBox="0 0 50 22">
                            <path d="M43 0.11409H3C1.34315 0.11409 0 1.45724 0 3.11409V17C0 18.6568 1.34315 20 3 20H38.0206V19H3C1.89543 19 1 18.1046 1 17V3.11409C1 2.00952 1.89543 1.11409 3 1.11409H43C44.1046 1.11409 45 2.00952 45 3.11409V19L42.2626 16.3182L41.2019 17.3789L45.4722 21.6491L49.7233 17.398L48.6627 16.3373L46 19V3.11409C46 1.45724 44.6569 0.11409 43 0.11409Z"/>
                            <path class="font" d="M9.81211 13.1141L11.1402 5.11409H12.8316L11.7379 11.7196H15.1676L14.9332 13.1141H9.81211Z"/>
                            <path class="font" d="M18.7408 13.2313C18.1288 13.2313 17.6223 13.1011 17.2213 12.8407C16.8202 12.5776 16.5377 12.213 16.3736 11.7469C16.2122 11.2782 16.1822 10.7326 16.2838 10.1102C16.3827 9.4956 16.5885 8.95784 16.901 8.4969C17.2135 8.03597 17.6106 7.67789 18.0924 7.42268C18.5742 7.16487 19.1171 7.03596 19.7213 7.03596C20.3307 7.03596 20.8359 7.16748 21.2369 7.4305C21.638 7.69091 21.9205 8.0555 22.0846 8.52425C22.2486 8.993 22.2799 9.53857 22.1783 10.161C22.0768 10.7729 21.8684 11.3094 21.5533 11.7703C21.2382 12.2313 20.8411 12.5907 20.3619 12.8485C19.8827 13.1037 19.3424 13.2313 18.7408 13.2313ZM18.9049 11.9422C19.1861 11.9422 19.4348 11.8628 19.651 11.7039C19.8697 11.5425 20.0507 11.3237 20.1939 11.0477C20.3398 10.769 20.4413 10.4539 20.4986 10.1024C20.5559 9.75602 20.5598 9.44873 20.5104 9.1805C20.4609 8.90966 20.3567 8.69612 20.1979 8.53987C20.0416 8.38362 19.8268 8.3055 19.5533 8.3055C19.2721 8.3055 19.0221 8.38623 18.8033 8.54768C18.5846 8.70654 18.4036 8.92529 18.2604 9.20393C18.1171 9.48258 18.0169 9.79899 17.9596 10.1532C17.9049 10.4969 17.901 10.8042 17.9479 11.075C17.9947 11.3433 18.0976 11.5555 18.2564 11.7117C18.4153 11.8654 18.6314 11.9422 18.9049 11.9422Z"/>
                            <path class="font" d="M25.4869 13.2313C24.8749 13.2313 24.3684 13.1011 23.9674 12.8407C23.5663 12.5776 23.2838 12.213 23.1197 11.7469C22.9583 11.2782 22.9283 10.7326 23.0299 10.1102C23.1288 9.4956 23.3346 8.95784 23.6471 8.4969C23.9596 8.03597 24.3567 7.67789 24.8385 7.42268C25.3202 7.16487 25.8632 7.03596 26.4674 7.03596C27.0768 7.03596 27.582 7.16748 27.983 7.4305C28.384 7.69091 28.6666 8.0555 28.8307 8.52425C28.9947 8.993 29.026 9.53857 28.9244 10.161C28.8229 10.7729 28.6145 11.3094 28.2994 11.7703C27.9843 12.2313 27.5872 12.5907 27.108 12.8485C26.6288 13.1037 26.0885 13.2313 25.4869 13.2313ZM25.651 11.9422C25.9322 11.9422 26.1809 11.8628 26.3971 11.7039C26.6158 11.5425 26.7968 11.3237 26.94 11.0477C27.0859 10.769 27.1874 10.4539 27.2447 10.1024C27.302 9.75602 27.3059 9.44873 27.2564 9.1805C27.207 8.90966 27.1028 8.69612 26.9439 8.53987C26.7877 8.38362 26.5729 8.3055 26.2994 8.3055C26.0182 8.3055 25.7682 8.38623 25.5494 8.54768C25.3307 8.70654 25.1497 8.92529 25.0064 9.20393C24.8632 9.48258 24.763 9.79899 24.7057 10.1532C24.651 10.4969 24.6471 10.8042 24.6939 11.075C24.7408 11.3433 24.8437 11.5555 25.0025 11.7117C25.1614 11.8654 25.3775 11.9422 25.651 11.9422Z"/>
                            <path class="font" d="M29.151 15.3641L30.5338 7.11409H32.1744L32.0064 8.1219H32.0807C32.1796 7.96044 32.3111 7.79638 32.4752 7.62971C32.6419 7.46044 32.8489 7.31982 33.0963 7.20784C33.3437 7.09326 33.6341 7.03596 33.9674 7.03596C34.4075 7.03596 34.7916 7.15055 35.1197 7.37971C35.4479 7.60628 35.6848 7.94873 35.8307 8.40706C35.9791 8.86279 35.996 9.4344 35.8814 10.1219C35.7721 10.7912 35.5702 11.3563 35.276 11.8172C34.9843 12.2755 34.6341 12.6232 34.2252 12.8602C33.8189 13.0946 33.388 13.2117 32.9322 13.2117C32.6093 13.2117 32.3437 13.1584 32.1354 13.0516C31.9296 12.9448 31.7695 12.8107 31.6549 12.6492C31.5403 12.4852 31.4596 12.3198 31.4127 12.1532H31.3502L30.8189 15.3641H29.151ZM31.6627 10.1141C31.6054 10.4709 31.6028 10.7821 31.6549 11.0477C31.7096 11.3133 31.8189 11.5203 31.983 11.6688C32.1471 11.8146 32.3632 11.8875 32.6314 11.8875C32.9023 11.8875 33.1432 11.8133 33.3541 11.6649C33.565 11.5138 33.7408 11.3055 33.8814 11.0399C34.0221 10.7716 34.1223 10.463 34.1822 10.1141C34.2369 9.76774 34.2382 9.46305 34.1861 9.20003C34.1341 8.93701 34.0273 8.73128 33.8658 8.58284C33.7044 8.4344 33.4856 8.36018 33.2096 8.36018C32.9413 8.36018 32.7005 8.4318 32.4869 8.57503C32.276 8.71826 32.1002 8.92138 31.9596 9.1844C31.8189 9.44742 31.72 9.75732 31.6627 10.1141Z"/>
                        </svg>
                    </div>
                    <div class="box fullscreen" flex jc ac @click="toggleFullScreen" :tip-top="fullScreened ? 'Exit' : 'Full screen'">
                        <svg class="ico" v-if="!fullScreened" viewBox="0 0 31 31">
                            <path d="M3 20H0V31L11.0714 31V28H3V20ZM0 11.0714H3V3H11.0714V0H0V11.0714ZM28 28H19.9286V31H31L31 20H28V28ZM19.9286 0V3H28V11L31 11.0714V0H19.9286Z"/>
                        </svg>
                        <svg class="ico" v-else viewBox="0 0 31 31">
                            <path d="M0 23H8V31L11.0714 31V19.9286H0V23ZM8 8H0V11.0714H11.0714V0H8V8ZM19.9286 31L23 31V23H31L31 19.9286H19.9286V31ZM23 8V0H19.9286V11.0714H31L31 8H23Z"/>
                        </svg>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import speed from './mixins/speed'
import keys from './mixins/keys'
import tips from './mixins/tips'
import sound from './mixins/sound'
import loading from './components/loading'
import debounce from "../../../lib/debounce";

export default {
    name: "player",
    mounted() {
        let self = this
        document.addEventListener('fullscreenchange',self.checkFullScreen)

        this.$refs.viewport.addEventListener('mousemove',()=>{
            this.shrink = false
        })
        this.$refs.viewport.addEventListener('mousemove',debounce(()=>{
            if(this.currentTime !== 0 && this.currentTime !== this.duration)
                this.shrink = true
        }, 1500))

        let loop =  localStorage.getItem('loop')
        this.loop = ( loop === null || loop === 'true' )


    },
    beforeUnmount() {
        let self = this
        document.removeEventListener('fullscreenchange',self.checkFullScreen)
    },
    components:{
        loading
    },
    mixins:[ speed, keys, tips, sound ],
    emits:[  ],
    props:{
        src:{
            type: String || Object,
            default:''
        },
        poster:{
            type: String || Object,
            default:''
        },
        step:{
            type: Number,
            default:2
        },
    },
    data(){
        return {
            loop: true,
            playing: false,
            loading: false,
            duration: 0, // 单位 s
            currentTime: 0, // 单位 s
            fullScreened: false,
            shrink: true,
            initialized: false
        }
    },
    watch:{
        playing(val){
            this.$refs.video[val ? 'play' : 'pause']()
        },
        loop(val){
            localStorage.setItem('loop',val.toString())
        },

    },
    computed:{
        formattedCurrentTime(){
            let min = parseInt(this.currentTime / 60)
            if(min < 10) min = '0' + min
            let sec = parseInt(this.currentTime % 60)
            if(sec < 10) sec = '0' + sec
            return min + ':' + sec
        },
        formattedDuration(){
            let min = parseInt(this.duration / 60)
            if(min < 10) min = '0' + min
            let sec = parseInt(this.duration % 60)
            if(sec < 10) sec = '0' + sec
            return min + ':' + sec
        },
    },
    methods:{
        // 开始获取媒体数据时
        loadstart(e){
            this.initialize()
        },
        checkFullScreen(){
            this.fullScreened = document.fullscreenElement
        },
        toggleFullScreen(){
            if (!document.fullscreenElement)
                this.$el.requestFullscreen().catch(err => {
                    alert(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`)
                })
            else
                document.exitFullscreen()
        },
        togglePlay(){
            if(this.initialized)
                this.playing = !this.playing
        },
        setCurrentTime(){
            this.$refs.video.currentTime = this.currentTime
        },
        // 播放时，时触发的原生节流事件
        timeupdate(){
            this.currentTime =  this.$refs.video.currentTime
        },
        // 因加载导致播放中断后，再次因加载可重新播放时触发
        canplay(){
            this.loading = false
        },
        waiting(){
            this.loading = true
        },
        // 播放结束
        ended(){
            this.playing = false
            this.shrink = false
        },
        loadedmetadata(){
            console.log('loadedmetadata')
            this.initialized = true
            this.duration = this.$refs.video.duration
        },
        initialize(){
            this.initialized = false
            this.$refs.video.playbackRate = 1
            this.currentRate = '1.0'
            this.currentTime = 0
            this.playing = false
            this.shrink = false
        },
        // 媒体数据不可用时
        stalled(){

        },
        // 鼠标点击进度条导致的读取事件,以处理加载进度
        seeking(){
            console.log('seeking')
        },
        seeked(){
            console.log('seeked')
        },
    }
}
</script>

<style scoped lang="scss">
@import "./player.scss";
@import "./player_600.scss";
</style>