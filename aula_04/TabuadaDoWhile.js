const leia = require("readline-sync");	

let numero = leia.questionInt("Digite um numero: ");

let contador = 1;

do {
    console.log(`${contador} x ${numero} = ${contador * numero}`);
    contador++;
}   while (contador <= 10);
