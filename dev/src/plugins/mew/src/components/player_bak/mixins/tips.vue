<script>
export default {
    name: "grand-player-tips",
    computed:{
        tip_play(){
            return this.playing ? 'Pause (space)' : 'Play (space)'
        },
        tip_mute(){
            return this.volume > 0 ? 'Mute (m)' : 'Unmute (m)'
        },
        tip_loop(){
            let str = 'Automatically replay : '
            str += this.loop ? 'On' : 'Off'
            return str
        }
    }
}
</script>

<style scoped>

</style>