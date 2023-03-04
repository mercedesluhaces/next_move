// Window.onload funciona luego que toda la ventana cargo, no solo el DOM ...
window.onload = function () {
     $(window).resize(function() {
         renderizarImagen();
    });   
    
    // Array con las imagenes del carrousel ...
    const IMAGENES = [
        '../imagenes/servicios/carrusel/entrenamiento-personalizado-8.png',
        '../imagenes/servicios/carrusel/yoga1-8.png',
        '../imagenes/servicios/carrusel/entrenamiento-online-8.png',
        '../imagenes/servicios/carrusel/entrenamiento-juvenil-8.png',
        '../imagenes/servicios/carrusel/entrenamiento-i.juvenil-8.png',
        '../imagenes/servicios/carrusel/entrenamiento-a.mayores-8.png'
    ];

    // Variables iniciales ...
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 5000;
    let posicionActual = 0;
    let posicionSiguiente = posicionActual + 1;
    let posicionFinal = posicionActual + 2;
    let posicionFinalDos = posicionActual + 3;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let imagen = document.querySelector('#imagen');
    let imagenDos = document.querySelector('#imagenDos');
    let imagenTres = document.querySelector('#imagenTres');
    let imagenCuatro = document.querySelector('#imagenCuatro');
    
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

    // Funcion que actualiza la imagen dependiendo de la posicion ...
    function renderizarImagen () {
        if(window.innerWidth < 560) {
            // primera imagen ...
            imagen.innerHTML = `<img src="${IMAGENES[posicionActual]}" style=height:400px;">`
            // segunda imagen ...  
            imagenDos.style = "display:none;" 
            // tercera imagen ...
            imagenTres.style = "display:none;" 
            // cuarta imagen ...
            imagenCuatro.style = "display:none;" 
                     
        }

        if(window.innerWidth < 768 && window.innerWidth >=560 ) {
            // primera imagen ...
            imagen.innerHTML = `<img src="${IMAGENES[posicionActual]}" style=height:650px;">`
            // segunda imagen ...
            imagenDos.style = "display:none;" 
            // tercera imagen ...
            imagenTres.style = "display:none;" 
            // cuarta imagen ...
            imagenCuatro.style = "display:none;"           
        }

        if(window.innerWidth < 1024 && window.innerWidth > 768 ) {
            // primera imagen ...
            imagen.innerHTML = `<img src="${IMAGENES[posicionActual]}" style=height:650px;">`
            // segunda imagen ...
            imagenDos.style = "display:none;" 
            // tercera imagen ...
            imagenTres.style = "display:none;" 
            // cuarta imagen ...
            imagenCuatro.style = "display:none;"           
        }

        if (window.innerWidth >= 1024 && window.innerWidth < 1280) {
            // primera imagen ...
            imagen.innerHTML = `<img src="${IMAGENES[posicionActual]}" style=height:420px;">`
            // segunda imagen ...
            imagenDos.innerHTML = `<img src="${IMAGENES[posicionSiguiente]}" style=height:420px;">`
            imagenDos.style = "display:block;"
            // tercera imagen ...
            imagenTres.innerHTML = `<img src="${IMAGENES[posicionFinal]}" style=height:420px;">`
            imagenTres.style = "display:block;"  
            // cuarta imagen ...
            imagenCuatro.style = "display:none;"
        }

        if (window.innerWidth >= 1280 && window.innerWidth < 1920 ) {
            // primera imagen ...
            imagen.innerHTML = `<img src="${IMAGENES[posicionActual]}" style=height:400px;">`
            // segunda imagen ...
            imagenDos.innerHTML = `<img src="${IMAGENES[posicionSiguiente]}" style=height:400px;">`
            // tercera imagen ...
            imagenTres.innerHTML = `<img src="${IMAGENES[posicionFinal]}" style=height:400px;">`
            // cuarta imagen ...
            imagenCuatro.innerHTML = `<img src="${IMAGENES[posicionFinalDos]}" style=height:400px;">`
            imagenCuatro.style = "display:block;"
        }

        if (window.innerWidth >= 1920) {
            // primera imagen ...
            imagen.innerHTML = `<img src="${IMAGENES[posicionActual]}" style=height:550px;">`
            // segunda imagen ...
            imagenDos.innerHTML = `<img src="${IMAGENES[posicionSiguiente]}" style=height:550px;">`
            // tercera imagen ...
            imagenTres.innerHTML = `<img src="${IMAGENES[posicionFinal]}" style=height:550px;">`
            // cuarta imagen ...
            imagenCuatro.innerHTML = `<img src="${IMAGENES[posicionFinalDos]}" style=height:550px;">`
        }
    }

    // Activa el cambio automatico de imagen ...
    function playIntervalo() {
        setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG); // ejecuta pasar foto cada x tiempo ...
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
}; 
