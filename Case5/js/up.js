`use strict`


let amal = +prompt("Amalni kiriting", '');
let a = +prompt('Son kiriting', '');
let b = +prompt('Son kiriting', '');
let uzunlikMetrlarda;

switch (amal) {
  case 1:
    uzunlikMetrlarda = a + b;
    break;
  case 2:
    uzunlikMetrlarda = a - b;
    break;
  case 3:
    uzunlikMetrlarda = a / b;
    break;
  case 4:
    uzunlikMetrlarda = a * b;
    break;
    default :
    uzunlikMetrlarda = ('Bunday arifmetik amal yuq')
}

alert(`${amal} chi amal, javob:${uzunlikMetrlarda}`);