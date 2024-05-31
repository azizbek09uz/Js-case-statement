`use strict`


let a = prompt('A ni kiriting', '');
let holat = "yuzasini_topish";
let S;

switch (holat) {
  case "yuzasini_topish":
    r1 = a * Math.sqrt(3/6);
    r2 = 2 * r1;
    S = a * a * Math.sqrt(3/4);
    break;
  default:
    S = 0;
    break;
}

alert(`r1 = ${r1}, r2 = ${r2}, S = ${S}`);