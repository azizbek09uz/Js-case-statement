`use strict`
let yonalish = prompt('Tomonni kiriting', '');
let kamanda = +prompt('Kamandani kiriting', '');
let holat = "boshlang'ich";



if (yonalish == "s") {
  switch (kamanda) {
    case 0:
      holat = "harakni davom ettir";
      break;
    case 1:
      holat = "chapga burilgan";
      break;
    case 2:
      holat = "o'ngga burilgan";
      break;
  }
} else if (yonalish == "j") {
  switch (kamanda) {
    case 0:
      holat = "harakni davom ettir";
      break;
    case 1:
      holat = "chapga burilgan";
      break;
    case 2:
      holat = "o'ngga burilgan";
      break;
  }
} else if (yonalish == "q") {
  switch (kamanda) {
    case 0:
      holat = "harakni davom ettir";
      break;
    case 1:
      holat = "chapga burilgan";
      break;
    case 2:
      holat = "o'ngga burilgan";
      break;
  }
} else if (yonalish == "g") {
  switch (kamanda) {
    case 0:
      holat = "harakni davom ettir";
      break;
    case 1:
      holat = "chapga burilgan";
      break;
    case 2:
      holat = "o'ngga burilgan";
      break;
  }
}

alert("Robotning keyingi holati: " + holat);