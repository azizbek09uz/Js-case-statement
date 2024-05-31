let birlik = +prompt("Birlikni kiriting", '');
let kesmaUzunligi = +prompt('Uzunlikni kiriting', '');
let uzunlikMetrlarda;

switch (birlik) {
  case 1:
    uzunlikMetrlarda = kesmaUzunligi / 10;
    break;
  case 2:
    uzunlikMetrlarda = kesmaUzunligi * 1000;
    break;
  case 3:
    uzunlikMetrlarda = kesmaUzunligi;
    break;
  case 4:
    uzunlikMetrlarda = kesmaUzunligi / 1000;
    break;
  case 5:
    uzunlikMetrlarda = kesmaUzunligi / 100;
    break;
}

alert(`Uzunlik metrlarda: ${ uzunlikMetrlarda} m`);