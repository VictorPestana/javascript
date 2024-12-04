// EXERCICIO 2 IF

const leia = require("readline-sync");

let num = leia.questionInt("Digite um numero: ");

if (num % 2 == 0 && num < 0) {
  console.log("O numero digitado é par e negativo");
} else if (num % 2 == 0 && num > 0) {
  console.log("O numero digitado é par e positivo");
} else if (num % 2 != 0 && num < 0) {
  console.log("O numero digitado é impar e negativo");
} else if (num % 2 != 0 && num > 0) {
  console.log("O numero digitado é impar e positivo");
}
