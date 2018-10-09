            /* ESTUDIANDO UN POCO DE JS */
/* ---------------------------------------------- */

// ADIVINA EL NUMERO SECRETO
/* ----------------------- */

// ZONA DE VARIABLES

var numero = document.querySelector("#numero");// NUMERO SELECCIONADO POR EL USUARIO
var marcador = document.querySelector("#marcador");// NUMEROS REGISTRADOS
var contador = document.querySelector("#contador"); // NUMERO DE INTENTOS
var dialogos = document.querySelector("#dialogos"); // CUADRO DE DIALOGOS  
var reset = document.querySelector("#reset");
var btn_registrar = document.querySelector("#registrar"); //BOTON PARA REGISTRAR NUMERO

var intentos = 1;
var numSecreto;
var flag = true;



// ZONA DE FUNCIONES

// DEVUELVE UN NUMERO RANDOM DEL 1 AL 100
function secreto() {
    numSecreto = Math.round(Math.random() * 100 + 1);
    return numSecreto;
}

// RETORNA EL NUMERO DESIGNADO POR EL JUGADOR
function registro () {
    num = parseInt(numero.value,10);
    return num;
}

// DETERMINA SI EL VALOR ES ENTERO
function esNumero ( valor ) {
    if (!Number.isInteger(valor)){
        flag = false;
        return flag;
    }
}

// DETERMINA SI EL VALOR ES > 100
function rangos ( valor ) {
    if ( valor > 100 || valor < 0 ){
        flag = false;
        return flag;
    }
}

// OCULTA EL BOTON DE REINICIO
function noShowReiniciar () {
    reset.style.display = "none";
}

// REVELA EL BOTON DE REINICIO
function showReiniciar () {
    reset.style.display = "block";
} 

// REINICIA EL CONTADOR
function reiniciar (){
    dialogos.innerText = "";
    marcador.innerText = "";
    intentos = 1;
    contador.innerText = intentos;
    btn_registrar.disabled = false;
    numero.disabled = false;
    noShowReiniciar();
}

// BLOQUEA LA CAJA DE TEXTO Y BTN
function bloquear (){
    btn_registrar.disabled = true;
    numero.disabled = true;
}

// NUCLEO CENTRAL

noShowReiniciar();
secreto();

contador.innerText = intentos;
reset.addEventListener("click", reiniciar);

btn_registrar.addEventListener('click', function() {

    registro(); 

    console.log("Numero ingresado : " +  num);

    esNumero( num );

    if ( flag == true ){ 

        rangos( num );

        if ( flag == true) {

            if ( num == numSecreto ) {
                dialogos.textContent = ""; 
                dialogos.textContent = "Ambos numeros coinciden.";
                showReiniciar ();
                bloquear();
            } 

            if ( num > numSecreto ) { 
                dialogos.textContent = ""; 
                dialogos.textContent = "El numero es menor.";
            }

            if ( num < numSecreto ) {
                dialogos.textContent = ""; 
                dialogos.textContent = "El numero es mayor.";
            }


            marcador.textContent += " " + num; // AGREGA EL NUMERO AL MARCADOR EN EL HTML

            contador.innerText = intentos ++; // AUMENTAR EL CONTADOR EN EL HTML

            if ( intentos > 10 ){

                showReiniciar ();

                bloquear();
        
            }
        }
    } 

    numero.value = ""; // RESETEO EL VALOR DEL INPUT TEXT
    flag = true; // RESETEO EL VALOR DEL FLAG
    
});

