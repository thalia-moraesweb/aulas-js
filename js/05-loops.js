console.log("loops!");
/* Estruturas tradicionais:
(tem em todas linguagens):
while       -> enquanto
do/while    ->faça/enquanto
for         -> para 
*/

// Exemplo loop while (enquanto)
console.log("while")

// Variavel de controle do loop
let i = 1;

while ( i <= 10 ){
    console.log(`Valor de i:  ${i}`);
    i++;    // INCREMENTO

}

console.log("-----------------------");

console.log("do/while");

 let j = 1; //variavel de controle 
 do{
     console.log(`J vale ${j}`);
     j++;
 }while( j <= 3 ) //ou j < 4

 console.log("-----------------------");

 console.log("FOR");

 for( let i = 1; i <=5; i++ ){
     console.log(`I vale: ${i}`);
 }

 console.log("-----------------------");

 console.log("Loop e Estrutura de Dados");

//  ARRAY (VETOR)
let alunos = ["Eduardo","Vagner","Thalia","Claudio", "Jéssica"];

for( let i = 0; i < 5; i++ ){
    console.log( alunos[i] );
}

/* sort() ->função para ordenar arrays
console.log(alunos.sort() ); */


console.log("-----------------------");

console.log("Loops Exclusivos do JS");

//for/of: ótimo para Arrays
for( let aluno of alunos){
    console.log(aluno);
}

//Objeto
let livro = {
    titulo: "Senhor dos Anéis",
    ano: 1954,
    volumes: 3
};

//for/in
for( let dados in livro ){
    console.log(livro[dados] );
}

