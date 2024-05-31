`use strict`


let a = prompt('A ni kiriting', '');
let holat = "yuzasini_topish";
let S;

switch (holat) {
  case "yuzasini_topish":
     c = a * Math.sqrt(2);
     h = c / 2;
    S = (c * h) / 2;
    break;
  default:
    S = 0;
    break;
}

alert(`c = ${c}, h = ${h}, S = ${S}`);