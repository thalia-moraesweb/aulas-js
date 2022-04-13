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

botao.addEventListener("click", function (){
    /* pagina.classList.add("modo noturno"); só clica uma vez e nao volta ao normal*/
    pagina.classList.toggle("modo-noturno");
})