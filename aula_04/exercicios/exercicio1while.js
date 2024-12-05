// EXERCICIO 1 WHILE

const leia = require('readline-sync')

let menorDe21 = 0
let maiorDe50 = 0
let idade = leia.questionInt('Digite uma idade: ')

while (idade > 0) {
    idade = leia.questionInt('Digite uma idade: ')

    if (idade < 21) {
        menorDe21++;
    } else if (idade > 50) {
        maiorDe50++;
    }
}

console.log('Total de pessoas com menos de 21 anos: ', menorDe21)
console.log('Total de pessoas com mais de 50 anos: ', maiorDe50)
