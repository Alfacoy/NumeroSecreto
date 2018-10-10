            /* ESTUDIANDO UN POCO DE JS */
/* ---------------------------------------------- */

// ADIVINA EL NUMERO SECRETO
/* ----------------------- */

// ZONA DE VARIABLES


/* MEJORAR LOS NOMBRES DE LAS VARIABLES, SON RANCIAS */
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
    num = parseInt(numero.value,10); //Se podria mejorar usando Number(numero.value)
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
    reset.style.display = "none"; // BORRAR Y REEMPLAZAR POR CREATEELEMENT y APPENDCHILD + PARENTNODE.REMOVECHILD
}

// REVELA EL BOTON DE REINICIO
function showReiniciar () {
    reset.style.display = "block"; // BORRAR Y REEMPLAZAR POR CREATEELEMENT Y APPENDCHILD + PARENTNODE.REMOVECHILD
} 

// REINICIA EL CONTADOR
function reiniciar (){
    dialogos.innerText = "";
    marcador.innerText = "";
    dialogos.style.backgroundColor = "#ebbab5";
    intentos = 1;
    contador.innerText = intentos;
    btn_registrar.disabled = false;
    numero.disabled = false;
    secreto();
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

btn_registrar.addEventListener('click', function() { // PASAR TODO A FUNCION Y AGREGARSELA A EL BOTON

    registro(); 

    console.log("Numero ingresado : " +  num);

    esNumero( num ); // REVISAR DE SACARLO

    if ( flag == true ){  // REVISAR DE SACAR LOS FLAG

        rangos( num ); // REVISAR DE COLOCAR EN OTRO LADO LA FUNCION Y AGREGAR LA NEGACION A NAN

        if ( flag == true) { // ASIGNAR ESTRICTAMENTE IGUAL === A TODOS LOS IF

            if ( num == numSecreto ) { // MEJORAR CON ELSE IF 
                dialogos.textContent = ""; 
                dialogos.textContent = "Ambos numeros coinciden."; // MEJORAR COLOCANDO SOLO UNO AL FINAL
                dialogos.style.backgroundColor = "green";
                showReiniciar ();
                bloquear();
            } 

            if ( num > numSecreto ) { // MEJORAR CON ELSE IF 
                dialogos.textContent = ""; // MEJORAR COLOCANDO SOLO UNO AL FINAL
                dialogos.textContent = "El numero es menor.";
            }

            if ( num < numSecreto ) { // MEJORAR CON ELSE IF 
                dialogos.textContent = "";  // MEJORAR COLOCANDO SOLO UNO AL FINAL
                dialogos.textContent = "El numero es mayor.";
            }


            marcador.textContent += num + " "; // AGREGA EL NUMERO AL MARCADOR EN EL HTML

            contador.innerText = intentos ++; // AUMENTAR EL CONTADOR EN EL HTML

            if ( intentos > 10 ){

                showReiniciar ();

                bloquear();
        
            }
        }
    } 

    numero.value = ""; // RESETEO EL VALOR DEL INPUT TEXT
    flag = true; // RESETEO EL VALOR DEL FLAG
    numero.focus(); // ORDENA QUE UNA VES INGRESADO EL NUMERO, EL CURSOR SE POSA NUEVAMENTE EN EL SIN REALIZAR UN CLICK
    
});



/* ================================================== */

// EJEMPLO A REVISAR

/*
BUCLE
var resetParas = document.querySelectorAll('.resultParas p');
  for (var i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }


*/