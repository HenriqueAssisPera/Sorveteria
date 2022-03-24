let omelete="";
bebida="";
sobremesa="";

function escolherMorango() {
document.getElementById("Morango").style.borderColor="green";
document.getElementById("Pistache").style.borderColor="white";
document.getElementById("Limao").style.borderColor="white";
document.getElementById("Floresta").style.borderColor="white";
omelete=" -Morango 2l";
}
function escolherPistache() {
document.getElementById("Pistache").style.borderColor="green";
document.getElementById("Morango").style.borderColor="white";
document.getElementById("Limao").style.borderColor="white";
document.getElementById("Floresta").style.borderColor="white";
omelete=" -Pistache 2l";
}
function escolherLimao() {
document.getElementById("Limao").style.borderColor="green";
document.getElementById("Morango").style.borderColor="white";
document.getElementById("Pistache").style.borderColor="white";
document.getElementById("Floresta").style.borderColor="white";
omelete=" -Torta de Limão 2l"
}
function escolherFloresta() {
document.getElementById("Floresta").style.borderColor="green";
document.getElementById("Limao").style.borderColor="white";
document.getElementById("Morango").style.borderColor="white";
document.getElementById("Pistache").style.borderColor="white";
omelete=" -Floresta Negra 2l"
}
function escolherCoca() {
document.getElementById("Coca").style.borderColor="green";
document.getElementById("Agua").style.borderColor="white";
bebida=" -Coca"
}
function escolherAgua() {
document.getElementById("Agua").style.borderColor="green"
document.getElementById("Coca").style.borderColor="white"
bebida=" -Agua"
}
function escolherBombom() {
document.getElementById("Bombom").style.borderColor="green"
document.getElementById("Paleta").style.borderColor="white"
sobremesa=" -Bombom"
}
function escolherPaleta() {
document.getElementById("Paleta").style.borderColor="green"
document.getElementById("Bombom").style.borderColor="white"
sobremesa=" -Paleta"
}

function finalizarPedido() {
 let mensagem;

     mensagem= "Olá, gostaria de pedir: "
     +""+omelete+
     ""+bebida+
     ""+sobremesa;
 
 window.open("https://wa.me/+5512982881880?text="+mensagem);
}