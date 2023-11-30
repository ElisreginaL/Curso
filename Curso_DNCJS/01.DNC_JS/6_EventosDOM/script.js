
function clicar() { 
principal.style.background = 'blue'
principal.innerText = 'Clicou'
principal.style.color = 'white'
}
function entrar() {
    principal.style.background = 'black'
    principal.innerText = 'Entrou'
    principal.style.color = 'white'
}

function sair() {
    principal.style.background = 'pink'
    principal.innerText = 'Saiu'
    principal.style.color = 'black'
}

const fruit = ["Banana", "Limão", "Goiaba"];

fruit.splice (3, 0, "Maçã", "Laranja", "Melancia", "Cajá", "Manga");

document.getElementById("demo").innerHTML = fruit;
