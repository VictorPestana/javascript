// EXERCICIO 1 FOR

const leia = require("readline-sync");
console.log("==== DIGITE 10 NÚMEROS ====");
let numero, i;
let par = 0;
let impar = 0;

for (let i = 1; i < 11; i++) {
  let numero = leia.questionInt(`Digite o ${i} numero: `, i);

  if (numero % 2 == 0) {
    par++;
  } else {
    impar++;
  }
}

console.log("Total de números pares: ", par);
console.log("Total de números ímpares: ", impar);
