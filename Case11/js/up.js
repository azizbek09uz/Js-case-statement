`use strict`
let lokatsiya = prompt('Tomonni kiriting', '');
let kamanda1 = +prompt('Komanda kiriting', '');
let kamanda2 = +prompt('Komanda kiriting', '');
let holat = "boshlang'ich";



if (lokatsiya == "s") {
  switch (kamanda1) {
    case 0:
      holat = "o'ngga burilgan";
      break;
    case 1:
      holat = "chapga burilgan";
      break;
    case 2:
      holat = "burilish 180° C";
      break;
  }
} else if (lokatsiya == "j") {
  switch (kamanda2) {
    case 0:
      holat = "o'ngga burilgan";
      break;
    case 1:
      holat = "chapga burilgan";
      break;
    case 2:
      holat = "burilish 180° C";
      break;
  }
} else if (lokatsiya == "q") {
  switch (kamanda1) {
    case 0:
      holat = "o'ngga burilgan";
      break;
    case 1:
      holat = "chapga burilgan";
      break;
    case 2:
      holat = "burilish 180° C";
      break;
  }
} else if (lokatsiya == "g") {
  switch (kamanda2) {
    case 0:
      holat = "o'ngga burilgan";
      break;
    case 1:
      holat = "chapga burilgan";
      break;
    case 2:
      holat = "burilish 180° C";
      break;
  }
}

alert("Lakatrning keyingi holati: " + holat);