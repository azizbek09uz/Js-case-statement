let D = +prompt('Kunni kiriting', '');
let M = +prompt('Oyni kiriting', '');
let KabisaYili = false;
if ((M % 4 == 0 && M % 100 != 0) || M % 400 == 0) {
  KabisaYili = true;
}
let kunlar;

if (KabisaYili) {
  switch (M) {
    case 1:
      kunlar = D;
      break;
    case 2:
      kunlar = 31 + D;
      break;
    case 3:
      kunlar = 31 + 29 + D;
      break;
    case 4:
      kunlar = 31 + 29 + 31 + D;
      break;
    case 5:
      kunlar = 31 + 29 + 31 + 30 + D;
      break;
    case 6:
      kunlar = 31 + 29 + 31 + 30 + 31 + D;
      break;
    case 7:
      kunlar = 31 + 29 + 31 + 30 + 31 + 30 + D;
      break;
    case 8:
      kunlar = 31 + 29 + 31 + 30 + 31 + 30 + 31 + D;
      break;
    case 9:
      kunlar = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + D;
      break;
    case 10:
      kunlar = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + D;
      break;
    case 11:
      kunlar = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + D;
      break;
    case 12:
      kunlar = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + D;
      break;
    default:
      kunlar = 0;
      break;
  }
} else {
  switch (M) {
    case 1:
      kunlar = D;
      break;
    case 2:
      kunlar = 31 + D;
      break;
    case 3:
      kunlar = 31 + 28 + D;
      break;
    case 4:
      kunlar = 31 + 28 + 31 + D;
      break;
    case 5:
      kunlar = 31 + 28 + 31 + 30 + D;
      break;
    case 6:
      kunlar = 31 + 28 + 31 + 30 + 31 + D;
      break;
    case 7:
      kunlar = 31 + 28 + 31 + 30 + 31 + 30 + D;
      break;
    case 8:
      kunlar = 31 + 28 + 31 + 30 + 31 + 30 + 31 + D;
      break;
    case 9:
      kunlar = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + D;
      break;
    case 10:
      kunlar = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + D;
      break;
    case 11:
      kunlar = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + D;
      break;
    case 12:
      kunlar = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + D;
      break;
    default:
      kunlar = 0;
      break;
  }
}

alert("Berilgan sanada " + kunlar + " kun mavjud.");