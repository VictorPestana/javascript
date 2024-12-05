// EXERCICIO 1 DO WHILE

const leia = require("readline-sync");

let positivos = 0;
let numero = leia.questionInt("Digite um numero: ");

do {
  if (numero > 1) {
    positivos = positivos + numero;
  }
  numero = leia.questionInt("Digite um numero: ");
} while (numero != 0);

console.log("A soma dos numeros positivos é: ", positivos);
