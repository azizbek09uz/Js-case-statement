`use strict`

let kun = +prompt('Kunni kiriting', '');
let oy = +prompt('Oyni kiritng', '');
let burj;

switch (oy) {
  case 1:
    if (kun >= 20 && kun <= 31) {
      burj = "Qovg'a";
    } else if (kun >= 1 && kun <= 18) {
      burj = "Echki";
    }
    break;
  case 2:
    if (kun >= 1 && kun <= 18) {
      burj = "Echki";
    } else if (kun >= 19 && kun <= 28) {
      burj = "Baliq";
    }
    break;
  case 3:
    if (kun >= 1 && kun <= 20) {
      burj = "Baliq";
    } else if (kun >= 21 && kun <= 31) {
      burj = "Qo'y";
    }
    break;
  case 4:
    if (kun >= 1 && kun <= 19) {
      burj = "Qo'y";
    } else if (kun >= 20 && kun <= 30) {
      burj = "Buzoq";
    }
    break;
  case 5:
    if (kun >= 1 && kun <= 20) {
      burj = "Buzoq";
    } else if (kun >= 21 && kun <= 31) {
      burj = "Egizaklar";
    }
    break;
  case 6:
    if (kun >= 1 && kun <= 21) {
      burj = "Egizaklar";
    } else if (kun >= 22 && kun <= 30) {
      burj = "Qisqichbaqa";
    }
    break;
  case 7:
    if (kun >= 1 && kun <= 22) {
      burj = "Qisqichbaqa";
    } else if (kun >= 23 && kun <= 31) {
      burj = "Arslon";
    }
    break;
  case 8:
    if (kun >= 1 && kun <= 22) {
      burj = "Arslon";
    } else if (kun >= 23 && kun <= 31) {
      burj = "Parizod";
    }
    break;
  case 9:
    if (kun >= 1 && kun <= 22) {
      burj = "Parizod";
    } else if (kun >= 23 && kun <= 30) {
      burj = "Tarozi";
    }
    break;
  case 10:
    if (kun >= 1 && kun <= 22) {
      burj = "Tarozi";
    } else if (kun >= 23 && kun <= 31) {
      burj = "Chayon";
    }
    break;
  case 11:
    if (kun >= 1 && kun <= 22) {
      burj = "Chayon";
    } else if (kun >= 23 && kun <= 30) {
      burj = "O'qotar";
    }
    break;
  case 12:
    if (kun >= 1 && kun <= 21) {
      burj = "O'qotar";
    } else if (kun >= 22 && kun <= 31) {
      burj = "Echki";
    }
    break;
  default:
    burj = "Noto'g'ri sana kiritildi";
    break;
}

alert("Sizning sana bo'yicha burjingiz: " + burj);