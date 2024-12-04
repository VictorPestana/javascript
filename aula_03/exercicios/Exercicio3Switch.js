// EXERCICIO 3 SWITCH

const leia = require("readline-sync");

console.log("\n==== ESCOLHA A OPERAÇÃO ====\n");
console.log("1 - Saldo");
console.log("2 - Saque");
console.log("3 - Deposito");

let opcao = leia.questionInt("Operacao: ");
let saldo = 1000.0;

switch (opcao) {
  case 1:
    console.log("Operação = SALDO");
    console.log("Saldo: R$", saldo);
    break;
  case 2:
    let saque = leia.questionFloat("Digite o valor do saque: ");
    if (saque > saldo) {
      console.log("Operação = SALDO");
      console.log("Saldo insuficiente!");
    } else {
      saldo = saldo - saque;
      console.log("Operação = SAQUE");
      console.log("Saldo: R$", saldo);
    }
    break;
  case 3:
    console.log("Operação = DEPOSITO");
    let deposito = leia.questionFloat("Digite o valor do deposito: ");
    saldo = saldo + deposito;
    console.log("Saldo: R$", saldo);
    break;
  default:
    console.log("Operação inválida!");
    break;
}
