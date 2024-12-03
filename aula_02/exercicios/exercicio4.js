// EXERCICIO 4 

const leia = require('readline-sync')

// ENTRADA DOS NUMEROS (1 A 4)
let n1 = leia.questionFloat('Numero 1: ')
let n2 = leia.questionFloat('Numero 2: ')
let n3 = leia.questionFloat('Numero 3: ')
let n4 = leia.questionFloat('Numero 4: ')

// FORMULA DO CALCULO
let calculo = (n1 * n2) - (n3 * n4)
console.log("Diferenca: ", calculo)