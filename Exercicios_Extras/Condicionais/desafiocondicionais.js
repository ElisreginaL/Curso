
let nome = 'Sônia';
let cargo= 'Gerente';
let senha= 'asdfg';

if (nome == 'Beatriz' && cargo == 'Gerente' && senha == 'asdfg' ) {
    console.log (`${nome} que possui o cargo de ${cargo} entrou!`);
}
else if (nome == 'Jorge' && cargo == 'Vendedor'){
    console.log (`${nome} que possui o cargo de ${cargo} entrou e poderá visualizar os produtos`);
}
else if (nome == 'Beatriz' && cargo == 'Gerente'){
    console.log (`${nome}, por não ter inserido a senha poderá apenas visualizar os produtos`);
}
else {
    console.log(`${nome} não tem acesso ao sistema!`);
}
