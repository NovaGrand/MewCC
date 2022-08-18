import { reactive } from "vue"

export let loading = reactive({
    valid: false,
    color:'white',
    image: '',
    text: 'Loading',
    icon: '',
    size: 1,
    next: null,
    target: null,
    config: null,
})

export let pending = reactive({
    valid: false,
    color:'white',
    image:'',
    text: 'Pending',
    icon: '',
    size: 1,
    next: null,
    target: null,
    config: null,
})
export let color = reactive({
    theme:'light'
})
// ------------- notify -------------
export let notes = reactive([])
export let notify = function(config){
    let obj = { id : Symbol() }
    let cfg = config instanceof Object ? config : { text: config.toString() }
    for(let key in cfg)
        obj[key] = cfg[key]
    if(!cfg.text)
        cfg.text = 'No text !'
    if(!cfg.style)
        cfg.style = ''
    notes.push(obj)
    if(notes.length > 8) notes.shift()
}
notify.__proto__.flag = false
notify.__proto__.clear = function(config){
    if(!this.flag){
        this.flag = true
        if(notes.length > 0)
            notes.shift()
        let t = setInterval(()=>{
            if(notes.length === 0){
                this.flag = false
                clearInterval(t)
            }
            else
                notes.shift()
        },200)
    }
}
notify.__proto__.message = function(config){
    let cfg = {
        color:'blue',
        title:'消息',
        text:'这是一个消息提示！',
        icon:'state-hint-caution'
    }
    if(config instanceof Object){
        for(let key in config)
            cfg[key] = config[key]
    }
    else if(config)
        cfg.text = config
    notify(cfg)
}
notify.__proto__.success = function(config){
    let cfg = {
        color:'green',
        title:'成功',
        text:'这是一个成功提示！',
        icon:'state-hint-achieve'
    }
    if(config instanceof Object){
        for(let key in config)
            cfg[key] = config[key]
    }
    else if(config)
        cfg.text = config
    notify(cfg)
}
notify.__proto__.caution = function(config){
    let cfg = {
        color:'yellow',
        title:'注意',
        text:'这是一个注意提示！',
        icon:'state-hint-warning',
    }
    if(config instanceof Object){
        for(let key in config)
            cfg[key] = config[key]
    }
    else if(config)
        cfg.text = config
    notify(cfg)
}
notify.__proto__.failure = function(config){
    let cfg = {
        color:'red',
        title:'错误',
        text:'这是一个错误提示！',
        icon:'state-hint-bad',
    }
    if(config instanceof Object){
        for(let key in config)
            cfg[key] = config[key]
    }
    else if(config)
        cfg.text = config
    notify(cfg)
}
// ------------- notify -------------