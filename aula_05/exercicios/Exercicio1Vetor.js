/* Dado um vetor contendo 10 números inteiros não ordenados e não repetidos, 
construa um algoritmo que consiga pesquisar dados no vetor, 
onde o usuário irá digitar um número e o 
programa deve exibir na tela a posição deste número no vetor. 
Caso o número não seja encontrado, a mensagem: “Não foi encontrado!” deve ser exibida na tela. 
*/

const leia = require("readline-sync");

let vetorInteiros = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
let vetorNumeros = new Array(9);

let enNumero = leia.questionInt("Digite o numero que voce deseja encontrar: ");

for (let indice = 0; indice < vetorInteiros.length; indice++) {
    console.log(`Índice ${indice} -> Valor: ${vetorInteiros[indice]}`);
}

let posicao = vetorInteiros.indexOf(enNumero);

if (posicao !== -1) {
  console.log(`O número ${enNumero} foi encontrado na posição ${posicao}.`);
} else {
  console.log(`O Numero ${enNumero} não foi encontrado!`);
}
