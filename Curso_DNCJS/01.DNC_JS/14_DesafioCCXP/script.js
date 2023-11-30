const dia = document.getElementById("dia")
const hora = document.getElementById("hora")
const minuto = document.getElementById("minuto")
const segundo = document.getElementById("segundo")

const lancamento = "01 dec 2023"

function countDown() {
    const dataLanc = new Date(lancamento);
    const hoje = new Date();
    const segTotal = (dataLanc - hoje)/1000;
    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
    const finalMinutos = Math.floor(segTotal / 60) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;
    dia.innerHTML = finalDias +'D';
    hora.innerHTML = formatotempoHora(finalHoras);
    minuto.innerHTML = formatotempomMinuto(finalMinutos);
    segundo.innerHTML = formatotempoSegundo(finalSegundos);
}

countDown();
setInterval(countDown, 1000);

function formatotempoHora(tempo){
    return tempo < 10? `0${tempo}H` : `${tempo}H`;
}
function formatotempomMinuto(tempo){
    return tempo < 10? `0${tempo}M` : `${tempo}M`;
}
function formatotempoSegundo(tempo){
    return tempo < 10? `0${tempo}S` : `${tempo}S`;
}


function highlightCard(selector) {
    var element = document.querySelector(selector);
    element.classList.toggle("card-highlight")
}


function checkKeyboardCode() {
    document.addEventListener('keydown', (event) => {
        var name = event.key;
        var code = event.code;

        alert(`Tecla pressionada ${name}, Key code ${code}`);
        }, false);
}


function addkeyboardEventListeners(){
    
    document.addEventListener('keydown', (event) => {

        var ingresso1 = document.getElementById("quinta");
        var ingresso2 = document.getElementById("sexta");
        var ingresso3 = document.getElementById("sabado");
        var ingresso4 = document.getElementById("domingo");

        var code = event.code;
        if(code == 'Numpad1') {
            ingresso1.classList.toggle("card-highlight");
            ingresso2.classList.remove("card-highlight");
            ingresso3.classList.remove("card-highlight");
            ingresso4.classList.remove("card-highlight");
        }

        var code = event.code;
        if(code == 'Numpad2') {
            ingresso1.classList.remove("card-highlight");
            ingresso2.classList.toggle("card-highlight");
            ingresso3.classList.remove("card-highlight");
            ingresso4.classList.remove("card-highlight");
        }

        var code = event.code;
        if(code == 'Numpad3') {
            ingresso1.classList.remove("card-highlight");
            ingresso2.classList.remove("card-highlight");
            ingresso3.classList.toggle("card-highlight");
            ingresso4.classList.remove("card-highlight");
        }

        var code = event.code;
        if(code == 'Numpad4') {
            ingresso1.classList.remove("card-highlight");
            ingresso2.classList.remove("card-highlight");
            ingresso3.classList.remove("card-highlight");
            ingresso4.classList.toggle("card-highlight");
        }

        var code = event.code;
        if(code == 'NumpadEnter') {
            ingresso1.classList.remove("card-highlight");
            ingresso2.classList.remove("card-highlight");
            ingresso3.classList.remove("card-highlight");
            ingresso4.classList.remove("card-highlight");
        }


    }, false);
}

addkeyboardEventListeners();


let ingressos = [];

function addGreenBorder(selector) {
    let element = document.querySelector(selector);
    element.classList.toggle("card-selected");
    if (ingressos.includes(selector)) {
        ingressos = ingressos.filter(item => item !== selector);
    } else {
        ingressos.push(selector);
    }
}

function showSelectedCards() {
    if (ingressos.length > 0) {
        alert("Ingressos selecionados: " + ingressos.join(", "));
    } else {
        alert("Nenhum ingresso selecionado.");
    }
}

