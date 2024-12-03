// EXERCICIO 1
const leia = require("readline-sync");

// SALARIO
let salario = leia.questionInt("Digite seu salario: ");
console.log(salario);

// ABONO
let abono = leia.questionInt("Digite o abono: ");
console.log(abono);

// NOVO SALARIO
let novoSalario = salario + abono;
console.log(
  "Novo Salario: ",
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(novoSalario)
);
