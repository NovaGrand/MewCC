<script>
import Hls from "hls.js";

export default {
    name: "mew-vid-codec",
    mounted(){
        this.init().load(this.src)
    },
    beforeUnmount(){
        this.wipe()
    },
    data(){
        return {
            codec: null,
        }
    },
    props:{
        // 当非m3u8视频时，默认通过 fetch -> blob 的路径获取资源，如果 raw 为真，则会直接将资源地址赋值给视频标签
        raw:{
            type: Boolean,
            default: false
        },
        src:{
            type: String,
            default: "http://novagrand.assets.obs.cn-east-3.myhuaweicloud.com/sample/sample.m3u8"
        }
    },
    watch:{
        src(val){
            this.wipe()
            this.init().load(val)
        }
    },
    methods:{
        init(){
            this.codec = this.src.includes('.m3u8') ? new Hls() : null
            return {
                load: this.load
            }
        },
        load(src){
            if(this.codec)
                this.bind(src)
            else if(!this.raw)
                this.blob(src)
            else
                this.$el.src = src
        },
        blob(src){
            fetch(src).then(res => res.blob()).then(res => {
                this.$el.src = URL.createObjectURL(res)
            })
        },
        bind(src){
            this.codec.attachMedia(this.el)
            this.codec.on(Hls.Events.MEDIA_ATTACHED,  () => {
                this.codec.loadSource(src)
            })
            // 错误处理
            this.codec.on(Hls.Events.ERROR, function (event, data) {
                if (data.fatal) {
                    switch (data.type) {
                        case Hls.ErrorTypes.NETWORK_ERROR:
                            this.codec.startLoad()
                            break
                        case Hls.ErrorTypes.MEDIA_ERROR:
                            this.codec.recoverMediaError()
                            break
                        default:
                            // cannot recover
                            this.codec.destroy()
                            break
                    }
                }
            })
        },
        wipe(){
            URL.revokeObjectURL(this.$el.src)
            if(this.codec) this.codec.destroy()
        },
    }
}
</script>
