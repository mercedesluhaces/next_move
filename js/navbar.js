// Variables
let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');
let abrir = document.getElementById('open');
let cerrado = true;

// Pantalla de carga ...
window.addEventListener('load', function(){
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
});

// Apertura y cierre de menu responsive ...
function apertura(){
    if(cerrado){
        menu.style.width = '100vw';
        cerrado = false;
    }else{
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        cerrado = true;
    }
}

window.addEventListener('click',function(e){
    console.log(e.target);
    if(cerrado==false){
        let span = document.querySelector('span');
        if(e.target !== span && e.target !== abrir){
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            cerrado = true;
        }
    }
});

// Cambio el nav segun el tamanio ...
window.addEventListener('resize', function(){
    if(screen.width>= 700){
        cerrado = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
});

// Tomo el click del mouse para abrir el nav ...
abrir.addEventListener('click', function(){
    apertura();
});