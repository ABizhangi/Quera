let arosak = [];
arosak = readline().split(" ");
console.log(arosak);

const min = Math.min(...arosak); // find minimum number in array
const max = Math.max(...arosak); // find maximum number in array

for (let i = 0; i <= 100; i++) {
  let indexMin = 0; // this is not important
  let temp = 0;
  if (min === arosak[i]) {
    temp = arosak[i];

    arosak[i] = arosak[0];
    arosak[i] = temp;
  }
}

for (let i = 0; i <= 100; i++) {
  let indexMax = 0; // this is not important
  let temp;
  if (max === arosak[i]) {
    temp = arosak[i];

    arosak[i] = arosak[1];

    arosak[1] = temp;
  }
}

let dara = []; // this is dara memory
let sara = []; // this is sara memory
let daraScream = 0; // is counter
let saraScream = 0; // is counter
console.log(`\n\n\n\n\n`);
for (let i = 0; i <= 100; i++) {
  dara.push(arosak[i]);
  sara.push(arosak[i]);
  if (arosak[i] === Math.max(...dara)) {
    daraScream++;
  }
  if (arosak[i] === Math.min(...sara)) {
    saraScream++;
  }
}
const result = daraScream + saraScream;
console.log(result);
