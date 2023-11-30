/*
While
Nas estruturas de repetição a condição se repete até deixar de ser verdade, observe:
*/

n=0;
x=0;

while(n<8){
    n++
    x=x+n
    console.log(x)
}

/*
Nessa fórmula demos uma condição do n permanecer menor que três, segue:
"Enquanto n for menor que três, deverá: n deverá somar mais 1 (n=n+1)
dentro da fórmula x = x + n (valores de x e de n já foram previamente determinados)
e agora desejo saber os possíveis valores de x obedecendo à essas condições"
*/

/*
O que programamos o computador para fazer?
O cálculo de "x = x + n" quando n=1; quando n=2 e quando n=3
x = x + n => x = 0 + 1 => x = 1
Utilizando o último valor de x obtido a estrutura de cálculo se repete
x = x + n => x = 1 + 2 => x = 3
Novamente utilizando o último valor de x a estrutura se repete
x = x + n => x = 3 + 3 => x = 6
*/

/*Quando trabalhamos com variáveis no JS ele sempre vai preservar a última variável obtida*/


