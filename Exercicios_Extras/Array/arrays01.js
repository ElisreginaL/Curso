
const frutas = ['Banana', 'Limão', 'Maçã'];

frutas.splice (2, 0, 'Pera', 'Uva');

function cestadeFrutas(){
    document.getElementById("frutinhas").innerHTML = frutas.join("/ ");
}


//SPLICE é utilizado para adicionar novos elementos e excluir antigos
//O primeiro referencial "2" é a posição dos novos elementos
//O segundo referencial "0" é quantos elementos deverão ser excluídos