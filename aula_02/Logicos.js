const leia = require("readline-sync");

// Dados Usuário
const usuario = "user@email.com.br";
const senha = "user1234";
const isAdmin = false;
const isGerente = true;
const isBlock = false;

console.log("\nTela de Login");

let usuarioLogin = leia.questionEMail("Digite o seu usuario: ");

let senhaLogin = leia.question("Digite a sua senha: ", {
    hideEchoBack: true,
});

// Checagem Login

if (usuarioLogin === usuario && senhaLogin === senha) {
    var mensagem = "Seja bem vinde! Usuario autenticado com sucesso!";
} else {
    var mensagem = "Usuario ou senha incorretos! Tente novamente.";
}

console.log(mensagem);

// Checagem Bloqueio

if (!isBlock) {
    console.log("Usuário Ativo!");
} else {
    console.log("Usuário está inativo! Contate o Adminstrador");
}

// Checagem nivel Administrativo

if (isAdmin || isGerente) {
    console.log("Acesso ao painel Administrativo Liberado!")
} else {
    console.log("Acesso ao painel Adminstrativo foi negado!")
}
