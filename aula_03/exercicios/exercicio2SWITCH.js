// EXERCICIO 2 SWITCH

const leia = require("readline-sync");

console.log("\n==== ESCOLHA SEU CARGO ====\n");
console.log("1 - Gerente");
console.log("2 - Vendedor");
console.log("3 - Supervisor");
console.log("4 - Motorista");
console.log("5 - Estoquista");
console.log("6 - Técnico de TI");

let nome = leia.question("Digite o seu nome: ");
let cargo = leia.questionInt("Digite o codigo do seu cargo: ");
let salario = leia.questionFloat("Digite o seu salario: ");

let reajuste;
let novoSalario = salario + reajuste * salario;

switch (cargo) {
  case 1:
    cargo = "Gerente";
    reajuste = 0.1;
    novoSalario = salario + reajuste * salario;
    break;
  case 2:
    cargo = "Vendedor";
    reajuste = 0.07;
    novoSalario = salario + reajuste * salario;
    break;
  case 3:
    cargo = "Supervisor";
    reajuste = 0.09;
    novoSalario = salario + reajuste * salario;
    break;
  case 4:
    cargo = "Motorista";
    reajuste = 0.06;
    novoSalario = salario + reajuste * salario;
    break;
  case 5:
    cargo = "Estoquista";
    reajuste = 0.05;
    novoSalario = salario + reajuste * salario;
    break;
  case 6:
    cargo = "Técnico de TI";
    reajuste = 0.08;
    novoSalario = salario + reajuste * salario;
    break;
  default:
    console.log("Cargo inválido");
    process.exit(0);
    break;
}

console.log("Nome do Colaborador: ", nome);
console.log("Cargo: ", cargo);
console.log("Salário: ", novoSalario);
