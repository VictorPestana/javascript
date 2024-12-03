// EXERCICIO 3 

const leia = require('readline-sync')

// ENTRADA DOS DADOS (SB, AN, HE, D)
let salarioBruto = leia.questionFloat('Digite seu Salario Bruto: ')
let adicionalNoturno = leia.questionFloat('Digite o Adicional Noturno: ')
let horasExtras = leia.questionFloat('Digite a quantidade de Horas Extras: ')
let descontos = leia.questionFloat('Digite o valor dos Descontos: ')

// FORMULA SALARIO LIQUIDO
let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos

// SALARIO LIQUIDO FORMATADO
console.log(
    "Salario Liquido: ",
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(salarioLiquido)
  );
  