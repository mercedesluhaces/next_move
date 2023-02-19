// Window.onload funciona luego que toda la ventana cargo, no solo el DOM ...
window.onload = function () {
    
    // Array con las imagenes del carrousel ...
    const IMAGENES = [
        '../imagenes/servicios/ent-personalizado.webp',
        '../imagenes/servicios/ent-yoga.webp',
        '../imagenes/servicios/online.webp',
        '../imagenes/servicios/ent-juvenil.webp',
        '../imagenes/servicios/infan_juvenil.webp',
        '../imagenes/servicios/ent-adultos-may.webp'
    ];

    // Variables iniciales ...
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 5000;
    let posicionActual = 0;
    let posicionSiguiente = posicionActual + 1;
    let posicionFinal = posicionActual + 2;
    let posicionFinalDos = posicionActual + 3;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen');
    let $imagenDos = document.querySelector('#imagenDos');
    let $imagenTres = document.querySelector('#imagenTres');
    let $imagenCuatro = document.querySelector('#imagenCuatro');
    let intervalo;
    
    //////////////////////////////////////////////////////////////////////
    //                            Funciones                             //
    //////////////////////////////////////////////////////////////////////

    //Cambiar a la foto siguiente ...
    function pasarFoto() {

        // primer imagen ...
        if( posicionActual >= IMAGENES.length - 1 ) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }

        // segunda imagen ...
        if( posicionSiguiente >= IMAGENES.length - 1 ) {
            posicionSiguiente = 0;
        } else {
            posicionSiguiente++;
        }

        // tercera imagen ... 
        if( posicionFinal >= IMAGENES.length - 1 ) {
            posicionFinal = 0;
        } else {
            posicionFinal++;
        }

        // cuarta imagen ... 
        if( posicionFinalDos >= IMAGENES.length - 1 ) {
            posicionFinalDos = 0;
        } else {
            posicionFinalDos++;
        }

        renderizarImagen();
    }

    //Cambiar a la foto anterior ...
    function retrocederFoto() {
        if( posicionActual <= 0 ) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

    // Funcion que actualiza la imagen de imagen dependiendo de la posicion ...
    function renderizarImagen () {
        if(screen.width < 768) {
            $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
        }else if (screen.width < 1024) {
             // primera imagen ...
             $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
             $imagen.style.margin = "5px";
 
             // segunda imagen ...
             $imagenDos.style.backgroundImage = `url(${IMAGENES[posicionSiguiente]})`;
             $imagenDos.style.display = "block";
             $imagenDos.style.margin = "5px";   
 
             // tercera imagen ...
             $imagenTres.style.backgroundImage = `url(${IMAGENES[posicionFinal]})`;
             $imagenTres.style.display = "block";
             $imagenTres.style.margin = "5px";     
        } else {
            // primera imagen ...
            $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
            $imagen.style.margin = "5px";

            // segunda imagen ...
            $imagenDos.style.backgroundImage = `url(${IMAGENES[posicionSiguiente]})`;
            $imagenDos.style.display = "block";
            $imagenDos.style.margin = "5px";   

            // tercera imagen ...
            $imagenTres.style.backgroundImage = `url(${IMAGENES[posicionFinal]})`;
            $imagenTres.style.display = "block";
            $imagenTres.style.margin = "5px"; 

            // cuarta imagen ...
            $imagenCuatro.style.backgroundImage = `url(${IMAGENES[posicionFinalDos]})`;
            $imagenCuatro.style.display = "block";
            $imagenCuatro.style.margin = "5px";
        }
    }

    // Activa el cambio automatico de imagen ...
    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG); // ejecuta pasar foto cada x tiempo ...
    }

    //////////////////////////////////////////////////////////////////////
    //                            Main                                  //
    //////////////////////////////////////////////////////////////////////

    // Eventos de botones ...
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);

    // Inicializo el carrousel ...
    playIntervalo();
    renderizarImagen();
} 
