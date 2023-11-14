//Array

const bolsa = [
    'celular',
    'notebook',
    'calça',
    'camisa',
    'carteira',
    'carregador',
    'mouse'
]

/*     Para localizar um item dentro da bolsa:

Leia-se: i(objeto) = 0 (a busca pelo objeto sempre começa no 0)

i<bolsa (o objeto deve estar dentro da bolsa).length(do 0 ao fim dos itens da bolsa);

i++ = i = i + 1 (o programa deve passar por cada item 1 a 1)       */

//for(let i=0; i < bolsa.length; i++) {
//    console.log(bolsa[i])}

/*Como não foi determinado o item a ser procurado o comando está orientando
a procura de todos os itens*/

for(let i=0; i < bolsa.length; i++) {
    console.log(bolsa[i])
    if(bolsa[i] == 'carteira') break
}

/* Para todo início de busca o item 0 deverá ser o primeiro, a busca do objeto
deverá ser realizada dentro de toda 'largura' da bolsa, sendo que deverá passar
por todos os itens 1 a 1*/

/* Este comando portanto orienta que 
"Se dentro da bolsa for encontrada a 'carteira' a busca deve parar" */

