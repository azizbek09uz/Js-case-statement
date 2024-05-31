`use strict`

let typecard = +prompt('Karta turini kiriting son bilan', '')
let cartaraqami = +prompt('Kartaning raqamini kiriiting', '')
let cartaturi;
let cartaraqam;

switch(typecard){
    case 1:
        cartaturi = 'G`isht'
        break;
    case 2:
        cartaturi = 'Olma'
        break;
    case 3:
        cartaturi = 'Chillak'
        break;
    case 4:
        cartaturi = 'Qarg`a'
        break;
        default:
            cartaturi = 'Bunday karta turi yuq'
}
switch(cartaraqami) {
    case 6:
        cartaraqam = 'Olti'
        break;
    case 7:
        cartaraqam = 'Yetti'
        break;
    case 8:
        cartaraqam = 'Sakkiz'
        break;
    case 9:
        cartaraqam = 'Tuqqiz'
        break;
    case 10:
        cartaraqam = 'Un'
        break;
    case 11:
        cartaraqam = 'Valet'
        break;
    case 12:
        cartaraqam = 'Dama'
        break;
    case 13:
        cartaraqam = 'Qirol'
        break;
    case 14:
        cartaraqam = 'Tuz'
        break;
        default :
        cartaraqam = 'Bunday karta soni yuq'
}

alert(`${cartaturi} ${cartaraqam}`)