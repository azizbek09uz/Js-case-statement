'use strict'

let month = +prompt('Oyning raqamini kiriting', '');
let numbermonth;

switch (month){
    case 1:
        numbermonth = 'Yanvarda 31 kun bor'
        break;
    case 2:
        numbermonth = 'Fevralda 28 kun bor'
        break;
    case 3:
        numbermonth = 'Martda 31 kun bor'
        break;
    case 4:
        numbermonth = 'Aprelda 30 kun bor'
        break;
    case 5:
        numbermonth = 'Mayda 31 kun bor'
        break;
    case 6:
        numbermonth = 'Iyunda 30 kun bor'
        break;
    case 7:
        numbermonth = 'Iyulda 31 kun bor'
        break;
    case 8:
        numbermonth = 'Avgustda 31 kun bor'
        break;
    case 9:
        numbermonth = 'Sentabrda 30 kun bor'
        break;
    case 10:
        numbermonth = 'Oktabrda 31 kun bor'
        break;
    case 11:
        numbermonth = 'Noyabrda 30 kun bor'
        break;
    case 12:
        numbermonth = 'Dekabrda 31 kun bor'
        break;
    default :
    numbermonth = 'Bunday oy soni yuq'
} 

alert(numbermonth);