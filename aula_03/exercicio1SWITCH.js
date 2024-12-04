// EXERCICIO SWITCH 1

const leia = require("readline-sync");

console.log("\n==== ESCOLHA SEU PRODUTO ====\n");
console.log("1 - Cachorro Quente");
console.log("2 - X-Salada");
console.log("3 - X-Bacon");
console.log("4 - Bauru");
console.log("5 - Refrigerante");
console.log("6 - Suco de Laranja");

let produto = leia.questionInt("Digite o produto: ");
let quantidade = leia.questionInt("Digite a quantidade: ");
let valorTotal;

switch (produto) {
  case 1:
    console.log("Produto: Cachorro Quente: ", (valorTotal = quantidade * 10.0));
    break;
  case 2:
    console.log("Produto: X-Salada: ", (valorTotal = quantidade * 15.0));
    break;
  case 3:
    console.log("Produto: X-Bacon: ", (valorTotal = quantidade * 18.0));
    break;
  case 4:
    console.log("Produto: Bauru: ", (valorTotal = quantidade * 12.0));
    break;
  case 5:
    console.log("Produto: Refrigerante: ", (valorTotal = quantidade * 8.0));
    break;
  case 6:
    console.log("Produto: Suco de Laranja: ", (valorTotal = quantidade * 13.0));
    break;
  default:
    console.log("Produto Invalido!");
    break;
}

console.log(
  "Valor Total: ",
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valorTotal)
);
