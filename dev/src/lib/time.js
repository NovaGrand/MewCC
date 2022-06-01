export default {
    // 获取时间戳，未来或过去的时间戳在此基础上加减即可
    // 若不传入指定格式的时间字符串(YYYY-MM-DD hh:mm:ss)，则生成当前时间的时间戳
    // 一般程序语言时间戳都是 UNIX 时间戳，与时区无关，全世界时间戳都是一样的
    getStamp(time){
        return time ? new Date(time).getTime() : Date.now()
    },
    // 获取 YYYY-MM-DD
    getDate(stamp){
        let t = stamp ? new Date(stamp) : new Date()
        let y = t.getFullYear()
        let m = t.getMonth()
        let d = t.getDate()
        m = m < 10 ? '0' + m : m
        d = d < 10 ? '0' + d : d
        return y + '-' + m + '-' + d
    },
    // 获取 hh:mm:ss
    getTime(stamp){
        let t = stamp ? new Date(stamp) : new Date()
        let h = t.getHours()
        let m = t.getMinutes()
        let s = t.getSeconds()
        h = h < 10 ? '0' + h : h
        m = m < 10 ? '0' + m : m
        s = s < 10 ? '0' + s : s
        return h + ':' + m + ':' + s
    }
}