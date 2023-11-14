/*
 Essa CLASS nada mais é do que uma função e o CONSTRUCTOR é outra 
 função que recebe alguns argumentos, que vão ser expostos todas as 
 vezes que a função Jogador for chamada.
*/

class Jogador {
    constructor (nome, posicao, numGol) {
        this.nome = nome,
        this.posicao = posicao,
        this.numGol = numGol
    }

    golsMarcados () {
        console.log(`O ${this.nome} marcou ${this.numGol} em sua carreira.`)
    }

    posicaoTime() {
        console.log(`O ${this.nome} joga como ${this.posicao} na seleção.`)
    }

    nomeJogador() {
        console.log (`O ${this.nome} joga na seleção.`)
    }
}

const Neymar = new Jogador ("Neymar", "atacante", "400")
const Claudio = new Jogador ("Claudio", "meio de campo", "300")
const Genesio = new Jogador ("Genesio", "goleiro", "2")

/*Claudio.posicaoTime()
Claudio.golsMarcados()
Neymar.golsMarcados()
Neymar.posicaoTime()
Neymar.nomeJogador()
Genesio.posicaoTime()*/

class Primo {
        constructor (profissao, idade, nome){
            this.profissao = profissao,
            this.idade = idade,
            this.nome = nome
        }
    
        profissaoDele () {
        console.log (`O meu primo ${this.nome} tem apenas ${this.idade} anos e já é ${this.profissao}.`)
        }
}

const Diego = new Primo ("médico", "26", "Diego")

Diego.profissaoDele()


