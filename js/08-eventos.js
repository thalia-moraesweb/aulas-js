/* Exemplo 01 */
const subExemplo01 = document.querySelector("#subtitulo-exemplo01");
const msg = document.querySelector("#mensagem");

//Monitor/Ouvinte de Evento
subExemplo01.addEventListener("click", function(){
    msg.textContent = "Oláaaaaaaaa!!!!";
    msg.style.fontSize = "25px";
    subExemplo01.style.backgroundColor = "red";
});
subExemplo01.addEventListener("dblclick", function(){
    msg.textContent = "";
});
//mouseover, mouseout
/* Exemplo 02: modo noturno */
const botao = document.querySelector("#noturno");
const pagina = document.querySelector("body");

botao.addEventListener("click", function (){ /* pagina.classList.add("modo noturno"); só clica uma vez e nao volta ao normal*/
   
    pagina.classList.toggle("modo-noturno");

/* Se o texto do botao for Ativar... */
if ( botao.textContent == "Ativar") {
    //então, mudamos para Desativar:
    botao.textContent = "Desativar";
}else {
    //senão, mudamos para Ativar
    botao.textContent = "Ativar";
}
});


/* Exemplo 03: simulação de cadastro */
const formulario =  document.querySelector("form");
const campoNome =  document.querySelector("#nome");
const campoNota1 =  document.querySelector("#nota1");
const campoNota2 =  document.querySelector("#nota2");
const divResultados =  document.querySelector("#resultados");

// Detectar o acionamento do formulario
//Obs.: a função dentro do listerner, é chamada de Callback
formulario.addEventListener("submit", function(event){
    /* Anulando o comportamento padrão do navegador 
    (redirecionar o formulario) */
    event.preventDefault();

 // 1) Capturar os dados digitados no campos
 let nome = campoNome.value;
 let nota1 = parseFloat(campoNota1.value);
 let nota2 = parseFloat(campoNota2.value);

// 2) Calcular a média das notas
let media = (nota1 + nota2) / 2;
//correção exercicio 1
let situacao; //inicialização
if( media >= 7 ){
situacao = "aprovado";
} else {
situacao = "reprovado";
}
console.log(situacao);

//3) Criando elemento dinamicamente via JS

//3.1) Criar o elemento/tag
let paragrafo = document.createElement("p");

//3.2) Montar o conteudo da tag  //correção exercicio 2
paragrafo.innerHTML = `<b>${nome}</b> - <i>${media}<i/> -  <b>${situacao}<b/>`;

//3.3) Adicionar tag/conteudo a div de resultados
divResultados.appendChild(paragrafo);
 
/* Exercicios
1)Programa o necessario para determinar se o aluno
está aprovado ou reprovado. Critério: média maior/igual a 7 aprovado, caso contrário reprovado.

2) Mostre a situação do aluno junto com o nome e a média

3) Desafio: faça com que os campos do formulário
sejam resetados ao enviar.*/
formulario.reset(); // ou this.reset()

//Devolvendo o foco (cursor) para o campo nome
campoNome.focus();

 console.log(paragrafo);
});
