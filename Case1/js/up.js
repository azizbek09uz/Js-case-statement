`use strict`


let day = +prompt('Kunning tartib raqamini kiriting', '');
let numberday;

switch (day){
    case 1:
        numberday = 'Dushanba'
        break;
    case 2:
        numberday = 'Seshanba'
        break;
    case 3:
        numberday = 'Chorshanba'
        break;
    case 4:
        numberday = 'Payshanba'
        break;
    case 5:
        numberday = 'Juma'
        break;
    case 6:
        numberday = 'Shanba'
        break;
    case 7:
        numberday = 'Yakshanba'
        break;
    default :
    numberday = 'Bunday hafta kuni yuq'
} 

alert(numberday);