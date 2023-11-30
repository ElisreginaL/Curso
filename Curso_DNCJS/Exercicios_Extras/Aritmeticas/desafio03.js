/* Sabendo que o fuso horário da França em relação ao Brasil é de +5 horas 
(no horário de verão na França), elabore um programa que leia a hora no 
Brasil e informe a hora na França.*/

function fusoHorarioBrFr(horabrasil) {
    let conversaohoras = (horabrasil*60) + 300;
    let horafranca = (conversaohoras/60);
    console.log (`Agora são ${horafranca}h na França.`)
}

fusoHorarioBrFr(12)

/* Essa foi a função que eu consegui produzir sozinha, agora com a ajuda
do chatgpt: */


function fusoHorario02(horasBrasil) {
    // Extrair horas e minutos da entrada no formato "10h30min"
    const match = horasBrasil.match(/^(\d+)h(\d+)min$/);
    if (!match) {
        console.log('Formato inválido. Use o formato "10h30min".');
        return;
    }

    const horas = parseInt(match[1]);
    const minutos = parseInt(match[2]);

    //parseInt = transforma strings em números

    // Calcular a conversão para minutos e adicionar 300 minutos para o fuso horário
    let minutosTotais = horas * 60 + minutos + 300;

    // Calcular horas e minutos na França
    let horasFranca = Math.floor(minutosTotais / 60) % 24;
    let minutosFranca = minutosTotais % 60;

    console.log(`Agora são ${horasFranca}h${minutosFranca}min na França.`);
}

fusoHorario02('12h30min');
