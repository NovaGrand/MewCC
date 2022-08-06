<template>
    <div classs="doc-vid">
        <vid autoplay/>
        <h2 bold lg style="margin-top: 20px">视频组件</h2>
        <p>
            原生 video 封装，提供 blob 资源保护，<i bold>对调试工具进行了防修改、防下载处理，支持直播资源(HLS)</i>。
            默认使用 Fetch 获取资源，自动区分资源类型，如果你需要进一步加强视频防盗功能，可以在视频加载(@load 事件)开始后，定时请求影子文件。
        </p>
        <div xs message style="margin-top: 20px">普通视频（例如.mp4）容易被盗取；虽然播放器支持 m3u8 格式，但更佳的防盗，还需从资源端加固(例如添加影子请求、设置白名单、视频加密)。</div>
        <prism lang="html">{{ code }}</prism>
        <apiTable :items="api" style="margin-top: 35px"/>

    </div>
</template>

<script>
export default {
    name: "doc-vid",
    data(){
        return {
            code:`<vid autoplay src="http://sample.com/example.mp4"/>`,
            api:[
                { name:'raw', type:'Boolean', default:'false', description:'将资源完全曝露在 video 标签上，让标签获取资源，当资源无法设置跨域时使用' },
                { name:'src', type:'String', default:'false', description:'视频资源地址，支持任意视频格式或任意扩展名，自动识别并包装 m3u8 资源' },
                { name:'info', type:'String | Boolean', default:"false", description:'播放窗口鼠标右键时信息，以及设置菜单中的信息，空则不显示右键菜单' },
                { name:'poster', type:'String', default:'', description:'视频播放开始前的封面图，同 video 标签的 poster 属性' },
                { name:'autoplay', type:'Boolean', default:'false', description:'资源加载完成后将自动播放' },
                { name:'rates', type:'Array', default:"[ '0.2', '0.5', '1.0', '1.5', '2.0' ]", description:'播放速度列表' },
                { name:'@load', type:'Function', argType:"Number", description:'资源加载完成事件。参数: 资源的时长' },
                { name:'@playing', type:'Function', argType:"Number", description:'播放进度事件，每秒触发一次。参数: 当前播放时间(s)' },
                { name:'@play', type:'Function', default:"", description:'手动/自动开始播放事件，不包含因加载而停顿后的播放' },
                { name:'@pause', type:'Function', default:"", description:'手动暂停后事件' },
                { name:'@wait', type:'Function', default:"", description:'播放过程中，因资源加载而暂停的事件' },
                { name:'@end', type:'Function', description:'播放结束后事件' },
            ]
        }
    },
    methods:{
        aa(d){
            // console.log(typeof d)
        }
    },
    mounted(){
        // setTimeout(()=>{
        //     this.src = 'http://novagrand.assets.obs.cn-east-3.myhuaweicloud.com/t1.mp4'
        // },3000)
        // setTimeout(()=>{
        //     this.src = "http://novagrand.assets.obs.cn-east-3.myhuaweicloud.com/t0.webm"
        // },6000)
        // setTimeout(()=>{
        //     this.src = "http://novagrand.assets.obs.cn-east-3.myhuaweicloud.com/test/output.m3u8"
        // },9000)
    }
}
</script>

<style scoped lang="scss">
</style>