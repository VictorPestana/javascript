// EXERCICIO 2 FOR 

const leia = require("readline-sync");

let numero1 = leia.questionInt('Digite o primeiro numero do intervalo: ');
let numero2 = leia.questionInt('Digite o segundo numero do intervalo: ');

if (numero1 > numero2) {
    console.log('Intervalo Inválido!')
    process.exit(0);
}

console.log(`No Intervalo entre ${numero1} e ${numero2}: `);
for (let i = numero1; i <= numero2; i++) {
    if (i % 3 === 0 && i % 5 === 0)
        console.log(`${i} é multiplo de 3 e 5`);
}