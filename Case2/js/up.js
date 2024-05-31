`use strict`


let day = +prompt('Kunning tartib raqamini kiriting', '');
let numberday;

switch (day){
    case 1:
        numberday = 'Yomon'
        break;
    case 2:
        numberday = 'Qoniqarsiz'
        break;
    case 3:
        numberday = 'Qoniqarli'
        break;
    case 4:
        numberday = 'Yaxshi'
        break;
    case 5:
        numberday = 'A`lo'
        break;
    default :
    numberday = 'Xato'
} 

alert(numberday);