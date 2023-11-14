/* 
Julia e Caio estão aprendendo a programar em JavaScript na DNC. 
Juntos eles querem construir um algoritmo capaz de informar, no console, 
qual dos dois é mais velho. Ajude-os a elaborar esse algoritmo 
com as seguintes condições:

a) Se o valor da variável `idadeJulia` for maior que o valor da variável `idadeCaio`:
  - Atribua à variável `verificaIdadePessoas` a string 
  `'Julia é mais velha que Caio'`;

b) Caso a condição anterior seja falsa:
  - Verifique se o valor da variável `idadeCaio` é maior que o valor da variável 
  `idadeJulia`;
  - Atribua à variável `verificaIdadePessoas` a string `'Caioé mais velho que Julia'`.

c) Se nenhuma das condições anteriores for verdadeira:
  - Atribua à variável `verificaIdadePessoas` a string `'Possuem a mesma idade'`;
  - Utilize as seguintes variáveis e seus respectivos valores no código: 

    let idadeJulia = 25;
    let idadeCaio = 21;
    let verificaIdadePessoas = '';  

  */


let verificaIdadePessoas = 'Ambos possuem a mesma idade.'

function checkIdade(idadeJulia,idadeCaio){
    if (idadeJulia > idadeCaio) {
        console.log (`Júlia é mais velha que Caio.`);
    }
    else if (idadeCaio > idadeJulia) {
        console.log (`Caio é mais velho que Júlia.`);
    }
    else{
        console.log (verificaIdadePessoas);
    }
}

checkIdade(21,23)