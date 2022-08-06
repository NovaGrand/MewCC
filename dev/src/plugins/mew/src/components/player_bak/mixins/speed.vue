<script>
export default {
    name: "grand-player-speed",
    data(){
        return {
            currentRate:1,
            itemBox: false,
        }
    },
    props:{
        playbackRate:{
            type: Array,
            default:['0.3', '0.5', '1.0', '1.5', '2.0']
        }
    },
    methods:{
        setRate(val){
            this.itemBox = false
            this.currentRate = val
            this.$refs.video.playbackRate = Number(val)
            this.$el.focus()
        },
    }
}
</script>
