
function calcularIMC() {
    let pesokg = parseFloat(document.getElementById("pesokg").value);
    let alturam = parseFloat(document.getElementById("alturam").value);
    let resultadoElement = document.getElementById("resultado");

    if (isNaN(pesokg) || isNaN(alturam) || pesokg <= 0 || alturam <= 0) {
        resultadoElement.innerHTML = `Insira dados válidos. Ex.: Peso kg: 71.2; Altura: 1.72`;
        return; // Encerra a função se os dados não forem válidos
    }

    let imc = pesokg / (alturam * alturam);
    let mensagem = "";

    if (imc < 18.5) {
        mensagem = `Seu IMC é de ${imc.toFixed(1)} kg/m².\nAbaixo do peso, quando o resultado é menor que 18,5 kg/m2.\nComplicado né? Mas não se desespere! Siga pelo nosso site para ter acesso\nà receitas, exercícios e alguns segredinhos para uma vida mais saudável.\nAgende sua consulta e faça outros testes, como bioimpedância para verificar\nsua quantidade de massa e de gordura corporal e assim poderemos\nfazer um plano totalmente personalizado para seus objetivos.`;
    } else if (imc >= 18.5 && imc <= 24.9) {
        mensagem = `Seu IMC é de ${imc.toFixed(1)} kg/m².\nNormal, quando o resultado está entre 18,5 e 24,9 kg/m2.\nParabéns! Para garantir que sua saúde permaneça de ferro,\nsiga pelo nosso site para ter acesso à receitas, exercícios\ne alguns segredinhos para uma vida mais saudável. Agende sua\nconsulta e faça outros testes, como bioimpedância para verificar\nsua quantidade de massa e de gordura corporal e assim poderemos\nfazer um plano totalmente personalizado para seus objetivos.`;
    } else if (imc > 24.9 && imc <= 30) {
        mensagem = `Seu IMC é de ${imc.toFixed(1)} kg/m².\nSobrepeso, quando o resultado está entre 24,9 e 30 kg/m2.\nNão se preocupe! Nesse caso, siga pelo nosso site para ter acesso\nà receitas, exercícios e alguns segredinhos para uma vida mais saudável.\nAgende sua consulta e faça outros testes, como bioimpedância para verificar\nsua quantidade de massa e de gordura corporal e assim poderemos\nfazer um plano totalmente personalizado para seus objetivos.`;
    } else {
        mensagem = `Seu IMC é de ${imc.toFixed(1)} kg/m².\nObesidade, quando o resultado é maior que 30 kg/m2.\nComplicado né? Mas não se desespere! Siga pelo nosso site para ter acesso\nà receitas, exercícios e alguns segredinhos para uma vida mais saudável.\nAgende sua consulta e faça outros testes, como bioimpedância para verificar\nsua quantidade de massa e de gordura corporal e assim poderemos\nfazer um plano totalmente personalizado para seus objetivos.`;
    }

    resultadoElement.innerHTML = mensagem;
}

function exerciciosAbdominais(){
    var absinstructions = document.getElementById("absinstructions");
    var abssupra = document.getElementById("abssupra");
    var absinfra = document.getElementById("absinfra");
    var absobliquo = document.getElementById("absobliquo");
    var absprancha = document.getElementById("absprancha");
    
}