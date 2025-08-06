let numeroSecreto = 0; //Genera un número secreto aleatorio entre 1 y 10
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10; //Número máximo del intervalo

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

   console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste! El número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}.`); //Ternario para pluralizar "veces"
    document.getElementById('reiniciar').removeAttribute('disabled');//Habilita el botón de reiniciar 
    } else {
        //El usuario no ha acertado
            if (numeroDeUsuario > numeroSecreto) {
                asignarTextoElemento('p', 'El número secreto es menor.');
            } else { 
                asignarTextoElemento('p', 'El número secreto es mayor.');
            }
            intentos++;
            limpiarCaja();
        }
    return;
}

// Esta función se ejecuta al hacer click en el botón y limpia la caja de texto
function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value = '';  
}
// Esta función genera un número secreto aleatorio entre 1 y 10
function generarNumeroSecreto() {
     let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si el numero generado esta incluido en la lista
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números 
    if(listaNumerosSorteados.length === numeroMaximo){ 
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
        document.getElementById('reiniciar').removeAttribute('disabled'); //Habilita el botón de reiniciar
        return;
    } else {
        //Si el numero generado esta incluido en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)){
    return generarNumeroSecreto();
    }else{
        //Si el numero no fue sorteado, agregarlo a la lista
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}
function condicionesIniciales() {
        //Asignar el mensaje de inicio del juego
        asignarTextoElemento('h1', 'Juego del número secreto!');
        asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
        numeroSecreto = generarNumeroSecreto(); //Generar nuevo número aleatorio
        intentos = 1; //Reiniciar el contador de intentos
    }
    condicionesIniciales();


function reiniciarJuego() {
     //Limpiar la caja de texto
      limpiarCaja();
    //Indicar mensaje de inicio de intervalo de números
    //Generar un nuevo número secreto aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector ('#reiniciar').setAttribute('disabled', 'true');
    
      
}   
condicionesIniciales();
