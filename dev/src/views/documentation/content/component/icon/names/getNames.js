let fs =require('fs')

let str = fs.readFileSync('./icons.css', 'utf8')

let arr = str.split(':before')
arr.pop()
let names = []

arr.forEach(item => {
    names.push(item.split('mew-icon-')[1])
})

fs.writeFileSync('index.js','export default ' + JSON.stringify(names))