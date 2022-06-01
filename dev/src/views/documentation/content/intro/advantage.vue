<template>
    <div>
        <h1>advantage</h1>
        <p>13131231231</p><p>13131231231</p><p>13131231231</p><p>13131231231</p><p>13131231231</p>
        <p>13131231231</p><p>13131231231</p><p>13131231231</p><p>13131231231</p><p>13131231231</p><p>13131231231</p><p>13131231231</p><p>13131231231</p><p>13131231231</p><p>13131231231</p>
        <p>13131231231</p><p>13131231231</p><p>13131231231</p><p>13131231231</p><p>13131231231</p>
        <p>13131231231</p><p>13131231231</p><p>13131231231</p><p>13131231231</p><p>13131231231</p>
    </div>
</template>

<script>
import time from '@/lib/time'
import test from './components/test'
export default {
    name: "advantage",
    created(){
        // let stamp = time.getStamp()
        // console.log(stamp)
        // console.log(time.getDate() + ' ' + time.getTime())
        let p = new Promise((resolve, reject)=>{
            resolve(0)
        })

        p.then(result => {
            return result + 1
        }).catch(err => {
            console.log(1)
        }).then(result => {
            console.log(2)
        }).catch(err => {
            console.log(3)
        })
    },
    components:{
        test
    },
    data(){
        return {
            val:0
        }
    }
}
</script>

<style scoped lang="scss">
p{
    margin: 30px 0;
}
</style>