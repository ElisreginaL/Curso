var lamp = window.document.getElementById("lampada");

function estaQuebrada() {
  return lamp.src.indexOf("lampcrack") > -1;
}

function Ligar() {
  if (!estaQuebrada()) {
    lamp.src = "img/lamplig.svg";
  }
}

function Desligar() {
  if (!estaQuebrada()) {
    lamp.src = "img/lampdesl.svg";
  }
}

lamp.addEventListener("click", Quebrar);

function Quebrar() {
  lamp.src = "img/lampcrack.svg";
}