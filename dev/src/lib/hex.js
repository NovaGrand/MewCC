export default function hex(rgb){
    let arr = rgb.match(/\d+/g)
    return fullColorHex(arr[0], arr[1], arr[2]).toUpperCase()
}


let rgbToHex = function (rgb) {
    let hex = Number(rgb).toString(16);
    if (hex.length < 2)
        hex = "0" + hex
    return hex
}

let fullColorHex = function(r,g,b) {
    let red = rgbToHex(r)
    let green = rgbToHex(g)
    let blue = rgbToHex(b)
    return red + green + blue
}