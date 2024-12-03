// EXERCICIO 2 

const leia = require('readline-sync')

// NOTAS
let nota1 = leia.questionFloat("Nota 1: ")
let nota2 = leia.questionFloat("Nota 2: ")
let nota3 = leia.questionFloat("Nota 3: ")
let nota4 = leia.questionFloat("Nota 4: ")

// MEDIA FINAL
let mediaFinal = (nota1 + nota2 + nota3 + nota4) / 4
console.log("Media Final: ", mediaFinal.toFixed(1)) // TOFIXED PARA 1 CASA DECIMAL.