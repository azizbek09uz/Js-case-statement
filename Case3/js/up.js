'use strict'

let month = +prompt('Oyning raqamini kiriting', '');
let numbermonth;

switch (month){
    case 1:
        numbermonth = '1 chi oy qish'
        break;
    case 2:
        numbermonth = '2 chi oy qish'
        break;
    case 3:
        numbermonth = '3 chi oy baxor'
        break;
    case 4:
        numbermonth = '4 chi oy Baxor'
        break;
    case 5:
        numbermonth = '5 chi oy Baxor'
        break;
    case 6:
        numbermonth = '6 chi oy Yoz'
        break;
    case 7:
        numbermonth = '7 chi oy Yoz'
        break;
    case 8:
        numbermonth = '8 chi oy Yoz'
        break;
    case 9:
        numbermonth = '9 chi oy Kuz'
        break;
    case 10:
        numbermonth = '10 chi oy Kuz'
        break;
    case 11:
        numbermonth = '11 chi oy Kuz'
        break;
    case 12:
        numbermonth = '12 chi oy Qish'
        break;
    default :
    numbermonth = 'Bunday oy soni yuq'
} 

alert(numbermonth);