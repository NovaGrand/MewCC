<script>
export default {
    name: "grand-player-sound",
    created(){
        let volume = localStorage.getItem('volume')
        this.volume = !volume ? 1 : Number(volume)
    },
    data(){
        return {
            volume: 1,
            tmpVolume: 0,
        }
    },
    watch:{
        volume(val){
            localStorage.setItem('volume',Number(val).toFixed(2))
        }
    },
    methods:{
        toggleMute(){
            if(this.volume > 0){
                this.tmpVolume = this.volume
                this.volume = 0
            }
            else
            if(Number(this.tmpVolume) === 0)
                this.volume = this.tmpVolume = 0.1
            else
                this.volume = this.tmpVolume
        },
    }
}
</script>
