/*Foi informado no THIS que quando a função Gol for executada, 
ele deve somar o número que será informado, ao index numGol. 
Na função Gol foi adicionado o parâmetro (g = 0), pois se o jogador 
não fizer nenhum gol, o index numGol será mandido, ou seja, não haverá nenhuma soma.*/


let jogador = {
    nome: "Renato Augusto",
    idade: 34,
    numGol: 81,
    Gol(g = 0) {
      console.log("Renato fez gol!");
      this.numGol += g;
    }
  }
    jogador.posicao = "meio-campo"

  console.log(jogador.numGol)
  jogador.Gol(2)
  console.log(jogador.numGol)
  delete jogador.idade
  console.log(jogador)