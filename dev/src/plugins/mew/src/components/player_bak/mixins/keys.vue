<script>
export default {
    name: "grand-player-keys",
    methods:{
        keydown(){
            switch(event.code){
                case 'ArrowRight':
                    this.$refs.video.currentTime += this.step
                    break
                case 'ArrowLeft':
                    this.$refs.video.currentTime -= this.step
                    break
                case 'Enter':
                case 'Space':
                    if(this.currentTime === 0 || this.currentTime === this.duration){
                        setTimeout(()=>{
                            this.shrink = true
                        },2000)
                    }
                    this.togglePlay()
                    break
                case 'ArrowUp':
                    this.tmpVolume = this.volume = this.volume < 0.9 ? Number(this.volume) + 0.1 : 1
                    break
                case 'ArrowDown':
                    this.tmpVolume = this.volume = this.volume > 0.1 ? this.volume - 0.1 : 0
                    break
                case 'KeyM':
                    this.toggleMute()
                    break
                case 'KeyF':
                    this.toggleFullScreen()
                    break
            }
        },
    }
}
</script>
