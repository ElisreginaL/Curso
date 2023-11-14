/*let f = 5;


function transformarTemp(){
    console.log (c=5/9*(f-32));
}

transformarTemp()*/ //Essa é a forma simples de transformar Farenheint em Celsius
//Porém, dessa forma não é possível chamar a função várias vezes



function farenheintparaCelsius (farenheint){
    let celsius = (5/9* (farenheint-32));
    console.log (`A temperatura em Celsius é: ${celsius}°C`);
}

farenheintparaCelsius(50)
farenheintparaCelsius(32)