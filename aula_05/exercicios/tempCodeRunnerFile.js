// Elabore um algoritmo que leia uma Matriz 3×3 de números inteiros e em seguida, mostre na tela:
// Todos os elementos da Diagonal Principal
// Todos os elementos da Diagonal Secundária
// A Soma de todos os elementos da Diagonal Principal
// A Soma de todos os elementos da Diagonal Secundária

const leia = require("readline-sync");

let matrizInteiros = new Array(3);

// preenchendo a matriz
for (let linha = 0; linha < matrizInteiros.length; linha++) {
  matrizInteiros[linha] = Array(3);
  for (let coluna = 0; coluna < matrizInteiros[linha].length; coluna++) {
    matrizInteiros[linha][coluna] = leia.questionInt("Digite um numero: ");
  }
}

// Elementos da Diagonal Principal
console.log("Elementos da Diagonal Principal: ");
let somaDiagonalPrincipal = 0;
for (let linha = 0; linha < matrizInteiros.length; linha++) {
  console.log(matrizInteiros[linha][linha]);
  somaDiagonalPrincipal += matrizInteiros[linha][linha];
}

// Elementos da Diagonal Secundaria
let somaDiagonalSecundaria = 0;
console.log("Elementos da Diagonal Secundária: ");
for (let coluna = matrizInteiros.length - 1; coluna >= 0; coluna--) {
  console.log(matrizInteiros[coluna][coluna]);
  somaDiagonalSecundaria += matrizInteiros[coluna][coluna];
}

// Soma da D.Principal
console.log(
  "Soma dos Elementos da Diagonal Principal: ",
  somaDiagonalPrincipal
);

// Soma da D.Secundaria
console.log(
  "Soma dos Elementos da Diagonal Secundária: ",
  somaDiagonalSecundaria
);

console.table(matrizInteiros);
