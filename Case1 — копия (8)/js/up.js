let D = prompt("Kunni kiriting", '');
let M = prompt("Oyni kiriting", '');
let keyingiSan;

if (M == 12) {
  keyingiSan = 1 + "/" + 1;
} else if (D == 31) {
  keyingiSan = (M + 1) + "/" + 1;
} else {
  keyingiSan = M + "/" + (D + 1);
}

alert("Berilgan sanadan keyingi san: " + keyingiSan);