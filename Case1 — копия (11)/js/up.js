`use strict`

let num = 1

const pi = 3.14
let r = prompt('R ni kiriting'), 
d = prompt('D ni kiriting'), 
l = prompt('L ni kiriting'), 
s = prompt('S ni kiriting'); 
let key;

if (r) {
    key = r
}
else if (d) {
    key = d
}
else if (l) {
    key = l
}
else{
    s
}

if (r){
    d = 2 * r
    l = 2 * pi * r
    s = 2 * pi * r * r
}
else if (d){
    r = d/2
    l = 2 * pi * (d/2)
    s = 2 * pi * (d/2) * (d/2)
}
else if (l) {
    r = l/(2 * pi)
    d = 2 * r
    s = 2 * pi * r * r
}
else {
    r = Math.sqrt(s/(2 * pi))
    d = 2 * r
    l = 2 * pi * r
}
alert(`r = ${r}, d = ${d}, l = ${l}, s = ${s}`)