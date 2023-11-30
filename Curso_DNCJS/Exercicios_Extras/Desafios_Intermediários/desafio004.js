/*
A DNC está preparando uma festa muito importante para comemorar 
seu aniversário de 10 anos. Ela precisa da sua ajuda para desenvolver 
um algoritmo que confere se o nome das pessoas que chegam à festa está 
ou não na lista de convidados *(afinal, não é legal ter penetras na festa né?)*.

- Se encontrar o nome na lista retorne:
"O nome está na lista."
- Caso contrário:
"O nome não está na lista." 
*/


/*
const lista = ['Andressa' , 'Diego' , 'Gabriel' , 
'Jenyffer' , 'Sarah' , 'Gabriela' , 'José Junior']

while (let i=0; i < lista.length; i+) {
    
    if(lista ==) return `O nome está na lista`
    else {console.log (`O nome não está na lista`)};
}
*/


const lista = ['Andressa', 'Diego', 'Gabriel', 'Jenyffer', 'Sarah', 
'Gabriela', 'José Junior'];

const nomeParaVerificar = 'Andressa'; 

let encontrado = false; //Quando iniciamos a busca ainda não sabemos se é verdadeiro ou falso, por essa razão é  uma prática comum iniciar em falso.

//.toUpperCase() é uma função que identifica o nome sem diferenciar maiúscula de minúscula

let i = 0;
while (i < lista.length) {
    if (lista[i].toUpperCase() === nomeParaVerificar.toUpperCase()) {
        encontrado = true;
        break; 
    }
    i++;
}

if (encontrado) {
    console.log('O nome está na lista.');
} else {
    console.log('O nome não está na lista.');
}
