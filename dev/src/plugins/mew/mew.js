import { reactive } from "vue"

export let loading = reactive({
    valid: false,
    color:'white',
    image: '',
    text: 'Loading',
    icon: '',
    size: 1,
})

export let pending = reactive({
    valid: false,
    color:'white',
    text: 'pending',
    size: 1,
    icon: ''
})

