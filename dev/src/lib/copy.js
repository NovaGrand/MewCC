export default function (str){
    let c = document.createElement('textarea')
    document.body.appendChild(c)
    c.value = str  // 这里表示想要复制的内容
    c.focus()
    c.select()
    document.execCommand('copy')
    c.blur()
    document.body.removeChild(c)
}