`use strict`

let number = +prompt('Raqam kiriting', '')
let soz;

switch(number) {
    case 20:
        soz = 'Yigirma'
        break;
    case 21:
        soz = 'Yigirma bir'
        break;
    case 22:
        soz = 'Yigirma ikki'
        break;
    case 23:
        soz = 'Yigirma uch'
        break;
    case 24:
        soz = 'Yigirma to`rt'
        break;
    case 25:
        soz = 'Yigirma besh'
        break;
    case 26:
        soz = 'Yigirma olti'
        break;
    case 27:
        soz = 'Yigirma yetti'
        break;
    case 28:
        soz = 'Yigirma sakkiz'
        break;
    case 29:
        soz = 'Yigirma to`qqiz'
        break;
    case 30:
        soz = 'O`ttiz'
        break;
        default :
        soz = 'Bunday son berilmagan'
}
alert(soz)