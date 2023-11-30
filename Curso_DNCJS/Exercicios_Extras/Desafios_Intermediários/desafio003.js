
/* 
Uma cafeteria te contratou para criar um validador de senhas. 
O dono da cafeteria solicitou que você criasse um programa que 
verifique se a senha digitada é exatamente igual a senha escolhida 
para acessar o wi-fi.
*/

let senha = "Asfgh0213"

function validarSenha(senha) {
    if (senha == 'Asfgh0213') {
        console.log(`Senha correta! Seja bem vindo.`);
    }
    else {
        console.log (`Senha incorreta! Procure o admnistrador.`);
    }

}

validarSenha("ghdfhghg")


/*
*********************************Resposta DNC*********************************
let senhaDoWiFi = 159000;

let senhaDigitada1 = 169000;
let senhaDigitada2 = 159000;
let senhaDigitada3 = '159000';
let senhaDigitada4 = 159000;

let verificacao1 = senhaDigitada1 === senhaDoWiFi;
let verificacao2 = senhaDigitada2 === senhaDoWiFi;
let verificacao3 = senhaDigitada3 === senhaDoWiFi;
let verificacao4 = senhaDigitada4 === senhaDoWiFi;

console.log('A 1ª senha é válida?', verificacao1); // false
console.log('A 2ª senha é válida?', verificacao2); // true
console.log('A 3ª senha é válida?', verificacao3); // false
console.log('A 4ª senha é válida?', verificacao4); // true */