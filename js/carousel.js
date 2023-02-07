// Window.onload funciona luego que toda la ventana cargo, no solo el DOM ...
window.onload = function () {
    
    // Array con las imagenes del carrousel ...
    const IMAGENES = [
        '../imagenes/servicios/personalizado.webp',
        '../imagenes/servicios/yoga.webp',
        '../imagenes/servicios/online.webp',
        '../imagenes/servicios/juvenil.webp',
        '../imagenes/servicios/infan_juvenil.webp',
        '../imagenes/servicios/adultos.webp'
    ];

    // Variables iniciales ...
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 3000;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen');
    let $imagenDos = document.querySelector('#imagenDos');
    let $imagenTres = document.querySelector('#imagenTres');
    let intervalo;
    
    //////////////////////////////////////////////////////////////////////
    //                            Funciones                             //
    //////////////////////////////////////////////////////////////////////

    //Cambiar a la foto siguiente ...
    function pasarFoto() {
        if( posicionActual >= IMAGENES.length - 1 ) {
            posicionActual = 0;
        } else {
            posicionActual++;
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
        if(screen.width > 1024 ){
            $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
            $imagenDos.style.backgroundImage = `url(${IMAGENES[posicionActual+1]})`;
            $imagenDos.style.display = "block";
            $imagenTres.style.backgroundImage = `url(${IMAGENES[posicionActual+2]})`;
            $imagenTres.style.display = "block";
        }else{
            $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
        }
    }

    // Activa el cambio automatico de imagen ...
    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG); // ejecuta pasar foto cada x tiempo ...

        // Desactivamos los botones de control ...
        // $botonAvanzar.setAttribute('disabled', true);
        // $botonRetroceder.setAttribute('disabled', true);
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
