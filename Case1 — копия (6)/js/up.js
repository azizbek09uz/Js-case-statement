let birlik = +prompt("Birlikni kiriting", '');
let ogirlik = +prompt('Og`irlikni kiriting', '');
let uzunlikMetrlarda;

switch (birlik) {
  case 1:
    uzunlikMetrlarda = ogirlik;
    break;
  case 2:
    uzunlikMetrlarda = ogirlik / 10000;
    break;
  case 3:
    uzunlikMetrlarda = ogirlik / 1000;
    break;
  case 4:
    uzunlikMetrlarda = ogirlik / 1000;
    break;
  case 5:
    uzunlikMetrlarda = ogirlik / 100;
    break;
    default :
    uzunlikMetrlarda = ("bunday ogirlik turi yuq")
}

alert(`Ogirlik kilogramda: ${uzunlikMetrlarda} kg`);