const leia = require('readline-sync')

let n1, n2;

n1 = leia.questionInt("Digite o primeiro numero: ")
n2 = leia.questionInt("Digite o segundo numero: ")

console.log("A Variável N1 possui o valor: ", n1)
console.log("A Variável N2 possui o valor: ", n2)

//soma = n1 + n2

console.log("\nA Soma de n1 e n2 é igual a: ", n1 + n2)
console.log("\nA Subtracao de n1 e n2 é igual a: ", n1 - n2)
console.log("\nA Multiplicacao de n1 e n2 é igual a: ", n1 * n2)
console.log("\nA Divisão de n1 e n2 é igual a: ", n1 / n2)
console.log("\nA Potenciação de n1 ^ n2 é igual a: ", Math.pow(n1,n2))

