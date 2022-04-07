/* Estrutura de Condicional 
if (se), else (senão), else if (senão se)

Operadores relacionais (usados com condicionais)
> maior que
< menor que
>= maoir ou igual
<= menor ou  igual
== igualdade
!= diferente*/

// Exemplo 1: condicional SIMPLES (IF)
let numero = 10;

if(numero > 0){
     console.log(`${numero} é maior que zero`);
}

// Exemplo 2: condicional COMPOSTA (IF/ELSE)
let aluno = "João"
let nota1 = 8;
let nota2 = 7;
let media = (nota1+nota2) / 2;

console.log(`Aluno: ${aluno}`);
console.log(`Notas: ${nota1} e ${nota2}`);
console.log(`Média: ${media.toFixed(2)}`);

let situacao; //undefined (indefinida)
if(media >= 7 ){
    situacao = "aprovado";
} else {
    situacao = "reprovado";
}
console.log(situacao);


// Exemplo 3: condicional ENCADEADA (IF,ELSE IF,ELSE)
let desempenho;
if(media < 3){
    desempenho = "péssimo";
} else if(media < 5){
    desempenho = "ruim"
}else if(media < 7){
    desempenho = "regular"
}else if(media < 9){
    desempenho = "bom";
}
else {
    desempenho = "ótimo";
}
console.log(desempenho)









