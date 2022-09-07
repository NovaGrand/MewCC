export default function debounce (fn, delay) {
    let timer = null
    return function () {
        let arg = arguments

        clearTimeout(timer)

        timer = setTimeout(() => {
            fn.apply(this, arg)
        }, delay)
    }
}