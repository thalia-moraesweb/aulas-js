`use strict`; //modo estrito ou modo de correçao 

console.log("Funções");
/* Funções são blocos de códigos que 
podem ser executados e reaproveitados em
praticamente qualquer parte da sua aplicação.

Usar funções também é uma forma de separar
a lógica e organizar melhor sua programação. */

//Sintaxe tradicional
function linha(){
    console.log("-----------------------");
}

let curso= "Porgramador Web";
let escola= "Senac";
let ano= 2022;

console.log(`Curso: ${curso}`);
linha();
console.log(`Escola: ${escola}`);
linha();
console.log(`Ano: ${ano}`);

//VERSÃO 1: sintaxe tradicional
         
/*               //parâmetros/argumentos
function soma(valor1, valor2 ){
    let total= valor1 + valor2;
    return total;
}*/

//VERSÃO 2:sintaxe ARROW FUNCTION (FUNÇÃO SETA/FLECHA)
const soma = (valor1, valor2) => {
    let total = valor1 + valor2;
    return total;
};

//Arrow Function com retorno IMPLÍCITO
const soma1 = (valor1, valor2) => valor1 + valor2;

console.log( soma(150, 55) );
//console.log(total); //erro, pois é variavel local

let resultado = soma(45, 50);
console.log(resultado);

if(resultado <100){
    console.log("Abaixo da meta")
}


linha(); 

//Versão 1: tradicional
/* function dobra(numero){
    let resultado = numero *2;
    return resultado;
} */
/* 
function dobra(numero){
    return numero *2;
 } */


//Versão 2: arrow function
/* const dobra = (numero) => {
    let resultado = numero *2;
    return resultado;
}; */
/* 
const dobra = (numero) => {
    return numero *2;
}; */

//retorno IMPLICITO (REMOVE CHAVES E RETURN)
//OBS: como só temos parametro (numero), pode tirar os ()
const dobra = numero => numero *2

console.log( dobra(10) );
console.log( dobra(150) );

linha()

let nota1 = 8.5;
let nota2+ = 7.4;

const calculaMedia= (n1,n2) => (n1+n2) / 2;

console.log(calculaMedia(nota1, nota2) );

//obs.: se não tem parametros, tambem precisa usar ()
cosnt linha2 = () => console.log("*****");