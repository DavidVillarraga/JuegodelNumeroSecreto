let numeroSecreto = 0;
let listaNumerosSorteados=[];
let repeticiones=1;
let numeroMaximo=10;

function asignarTextoElemento(elemento,texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = (texto);
    return;
}

console.log(repeticiones);
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario==numeroSecreto) {
        asignarTextoElemento('p',`¡Acertaste luego intentar de ${repeticiones} ${(repeticiones===1) ?'vez' : 'veces'}!`);
        document.getElementById('reiniciar').removeAttribute  ('disabled');
    }else {
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','¡El número secreto es menor.');
        }else{ 
            asignarTextoElemento('p','¡El número secreto es mayor.');} // si termino esta linea en }; hago el juego de un intento.
            repeticiones++;
            limpiarCaja();
        } return;
}

function limpiarCaja(){
   let=valorCaja = document.querySelector('#valorUsuario').value='';     //valorCaja.value = ''
}

function condicionesIniciales(){
 asignarTextoElemento('h1','Juego del número secreto');
 asignarTextoElemento('p',`Indica un número del uno al diez (1 al ${numeroMaximo})`);
 repeticiones=1;
 numeroSecreto = generarNumeroSecreto();
 }

 function generarNumeroSecreto() {
    let numeroGenerado = (Math.floor(Math.random()*numeroMaximo)+1);
    console.log (numeroGenerado);
    console.log (listaNumerosSorteados);
    //Si ya sorteamos todos los número.
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }else{
        //Si el numero esta inclido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');   
}

condicionesIniciales();

