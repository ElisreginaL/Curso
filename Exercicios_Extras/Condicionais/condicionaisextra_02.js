

//É possível colocar quantos 'else if' for necessário.

const frutaDisponivel = 'limão';

if (frutaDisponivel === 'abacate') {
  console.log('Vitamina de abacate saindo');
} else if (frutaDisponivel === 'banana') {
  console.log('Vitamina de banana saindo');
} else if (frutaDisponivel === 'maçã') {
    console.log('Vitamina de maçã saindo');
}
else {
  console.log('Suco de ' + frutaDisponivel + ' saindo');
}