// EXERCICIO 1

const leia = require("readline-sync");

let a = leia.questionInt("Digite o primeiro numero: ");
let b = leia.questionInt("Digite o segundo numero: ");
let c = leia.questionInt("Digite o terceiro numero: ");

if ((a + b) > c) {
  console.log("A soma de A + B é maior que C");
} else if (a + b == c) {
  console.log("A soma de A + B é igual a C");
} else {
  console.log("A soma de A + B é menor que C");
}
