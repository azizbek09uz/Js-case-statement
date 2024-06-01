`use strict`

let number = +prompt('Raqam kiriting', '')
let soz;

switch(number) {
    case 20:
        soz = 'Yigirma masala'
        break;
    case 21:
        soz = 'Yigirma bitta masala'
        break;
    case 22:
        soz = 'Yigirma ikkita masala'
        break;
    case 23:
        soz = 'Yigirma uchita masala'
        break;
    case 24:
        soz = 'Yigirma to`rtta masala'
        break;
    case 25:
        soz = 'Yigirma beshta masala'
        break;
    case 26:
        soz = 'Yigirma oltita masala'
        break;
    case 27:
        soz = 'Yigirma yettita masala'
        break;
    case 28:
        soz = 'Yigirma sakkizta masala'
        break;
    case 29:
        soz = 'Yigirma to`qqizta masala'
        break;
    case 30:
        soz = 'O`ttizta masala'
        break;
        default :
        soz = 'Bunday masala yuq'
}
alert(soz)