/*
Chegou o verão e a clientela da sorveteria DNC cresceu. 
Pedro, dono do estabelecimento, precisa de ajuda no controle do seu estoque. 
Você precisa ajudar Pedro a descobrir:

- A quantidade de sabores de sorvete;
- A quantidade de cobertura disponível.

Considere as listas a seguir:

Lista de sabores de sorvete:
- Chocolate
- Morango
- Açaí
- Creme
- Flocos

Lista de sabores de cobertura:
- Chocolate
- Morango
- Doce de leite
​
Todos os sabores de sorvete devem estar em um array na variável `sabores`;
Todos os sabores de cobertura devem estar em um array na variável `coberturas`;
Mostre no console duas mensagens informando as quantidades de sabores 
de cada lista, por exemplo:

  - 'Quantidade de sabores de sorvete: 5';
  - 'Quantidade de sabores de cobertura: 3'.


  */

  const sabores = ['Chocolate', 'Morango', 'Açaí', 'Creme', 'Flocos'];
  const coberturas = ['Chocolate', 'Morango', 'Doce de leite'];

  function saborSorvete () {
    let flavors = sabores.length;
    console.log (`Quantidade de sabores de sorvete: ${flavors}.`);
  }

  function saborCobertura () {
    let topping = coberturas.length;
    console.log (`Quantidade de sabores de cobertura: ${topping}.`);
  }

  function facilitador () {
    console.log (saborSorvete() + saborCobertura());
  }

  facilitador()