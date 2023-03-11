$(document).ready( function(){
    $(window).resize(function() {
        cambiarLogo();
    });

    cambiarLogo();

    function cambiarLogo(){
   
        var imgInit = document.getElementById('imgInicio');

        if (window.innerWidth >= 1920){
            imgInit.innerHTML = '<img src="../imagenes/logo.webp" style="height:200px;">';
            imgInit.style = "height:200x;"
        }
    
        if (window.innerWidth >= 1024 < 1200){
            imgInit.innerHTML = '<img src="../imagenes/logo.webp" style="height:150px;">';
            imgInit.style = "height:150px;"
        }

        if (window.innerWidth >= 1200){
            imgInit.innerHTML = '<img src="../imagenes/logo.webp" style="height:170px;">';
            imgInit.style = "height:170px;"
        }

        if (window.innerWidth < 1024){
            imgInit.innerHTML = '<img src="../imagenes/logohorizontal.png" style="height:35px;">';
            imgInit.style = "height:35px;"
        }
        
        
    }
});   