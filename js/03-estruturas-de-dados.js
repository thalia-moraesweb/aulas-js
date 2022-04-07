/*  Estruturas de Dados no JavaScript
ARRAY (VETOR)
Lista de dados indexados  */

let alunos = ["Tiago","João","Marilia","Vagner"];

// Acessando o aluno armazenado no índice 1 
console.log(alunos[1]); //João
console.log(alunos[3]); //Vagner

console.log(alunos);
console.log(alunos);

/* Exercicio Array
1) Crie um array contendo os seguintes dados de uma pessoa:
-Nome e sobrenome
-Idade
-Cidade
-Estado

2) Mostre uma frase no console conforme o exemplo abaixo:
Fulano de Silva é da cidade de São Paulo e tem 20 anos.*/

let dados = ["Thalia Moraes", 24, "São Paulo","SP"]

console.log(dados)
console.log(`Eu sou ${dados[0]} tenho ${dados[1]} anos moro em ${dados[2]} capital ${dados[3]}`)

console.log("-------------------------------------------");


/* OBJETO
Lista de dados não-indexados */
let filme = {
    // 1 parte propriedade: 2 parte valor
    titulo: "Homem Aranha",
    ano:2021,
    genero: "Ação/Ficção",
    classificacao: 16,
};

console.log(filme.titulo);
console.log(filme.genero);
console.log(
    `${filme.titulo}foi lançado em ${filme.ano} com classificação de +${filme.classificacao}`)

    console.log("-------------------------------------------");

    /* Exercício de objetos
    1)Crie um novo objeto contendo os dados (fictícios)
    de um pedido de uma loja virtual. Exemplo:
    -data do pedido
    -produto comprado
    -preço do pedido
    -prazo de entrega*/

    /* 2)Mostre uma frase contendo as seguintes informações:
    O produto XYZ foi comprado e, 07/04/2022 com entrega em 7 dias úteis  */


    let loja = {
        data: "07/04/2022",
        produto: "Chocolate",
        preco: 10 ,
        prazo: 7,
    }

    console.log(`O produto foi solicitado, ${loja.data} o cliente comprou ${loja.produto} e pagou ${loja.preco} reias e será entregue no prazo de ${loja.prazo} dias.`);
    