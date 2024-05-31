`use strict`

let davr = 1984;
let sikl = prompt('Siklni kiriting', '')
let year = prompt('Yilni kiriting 1984 dan katta bulsin', '');
let yearQoldiq = year - davr;
let colorQoldiq = yearQoldiq % sikl;
let animalQoldiq = colorQoldiq % 12;
let color, animal;

if(colorQoldiq  >= 0 && colorQoldiq  < 12){
    color = 'yashil'
}
else if(colorQoldiq  >= 12 && colorQoldiq  < 24){
    color = 'qizil'
}
if(colorQoldiq  >= 24 && colorQoldiq  < 36){
    color = 'sariq'
}
if(colorQoldiq  >= 36 && colorQoldiq  < 48){
    color = 'oq'
}
if(colorQoldiq  >= 0 && colorQoldiq  < 12){
    color = 'yashil'
}

switch (animalQoldiq) {
    case 0:
        animal = 'Sichqon'
        break;
    case 1:
        animal = 'Sigir'
        break;
    case 2:
        animal = 'Yo`lbars'
        break;
    case 3:
        animal = 'Quyon'
        break;
    case 4:
        animal = 'Ajdar'
        break;
    case 5:
        animal = 'ilon'
        break;
    case 6:
        animal = 'ot'
        break;
    case 7:
        animal = 'Qo`y'
        break;
    case 8:
        animal = 'Maymun'
        break;
    case 9:
        animal = 'Tovuq'
        break;
    case 10:
        animal = 'it'
        break;
    case 11:
        animal = 'To`ng`iz'
        break;
        default :
        animal = 'Bunday burj yuq'
}

alert(`${color}, ${animal}`)