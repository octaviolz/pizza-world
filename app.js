// MENU RESPONSIVE 
var btnMenuOpen = document.getElementById ("btnMenuOpen"),
    btnMenuClose = document.getElementById ("btnMenuClose"),
    menuResponsive = document.getElementById ("menuBar"),
    enlaces = document.getElementById("enlaces");


    //Click "OPEN"
    btnMenuOpen.addEventListener("click", function () {
        menuResponsive.classList.add("active");
    });

    //CLICK "CLOSE"
    btnMenuClose.addEventListener("click", function () {
        menuResponsive.classList.remove("active");
    });
    //Cerrar menu con elementos de enlace
    enlaces.addEventListener("click", function() {
        menuResponsive.style.transitionDelay = "0.5s"
        menuResponsive.classList.remove("active");
    });

    //SLIDER DE PRODUCTOS

    var contenedor = document.querySelector(".slider"),
        btnIzquierda = document.getElementById("btn-izquierda"),
        btnDerecha = document.getElementById("btn-derecha");

        //EVENTO PARA EL BOTON DERECHO

        btnDerecha.addEventListener("click", function (){
            contenedor.scrollLeft += contenedor.offsetWidth;
        });
        btnIzquierda.addEventListener("click", function (){
            contenedor.scrollLeft -= contenedor.offsetWidth;
        });


//VALIDACION DE FORMULARIO
var formulario = document.getElementById("formulario");

function validar(e) {
     var  inputNombre = document.getElementById("nombre"),
          inputEmail = document.getElementById("email"),
          inpuComents = document.getElementById("comentarios"),
          alertSuccess = document.getElementById("alertSuccess"),
          alertError = document.getElementById("alertError");

     if (inputNombre.value == 0 || inputEmail.value == 0 || inpuComents.value == 0) {
          e.preventDefault();
          alertError.classList.remove("hide");
          alertError.classList.add("show");

          setTimeout(function() {
               alertError.classList.remove("show");
               alertError.classList.add("hide"); 
          }, 2000);     
     }else{
          e.preventDefault();
          alertSuccess.classList.remove("hide");
          alertSuccess.classList.add("show");

          setTimeout(function() {
               alertSuccess.classList.remove("show");
               alertSuccess.classList.add("hide"); 
          }, 2000);               
          inputNombre.value = "";
          inputEmail.value = "";
          inpuComents.value = "";
     }
}


// EVENTOS DEL FORMULARIO
formulario.addEventListener("submit", validar);



//SCROLL TOP BOTTON
var btnTop = document.getElementById("btn-top"),
    logo = document.getElementById("logo");

//DETECTAR EL SCROLL EN LA PAG WEB
window.addEventListener("scroll", function () {
    var scroll = document.documentElement.scrollTop;
    fullSize = document.elementFromPoint.offsetHeigth,
    sizeVP = this.document.documentElement.clientHeight;
    if (scroll > 100) {
        btnTop.classList.add("show");
    }else{
        btnTop.classList.remove("show");
    }

    //MODIFICAR ELEMENTO CUANDO LLEGA AL FINAL DE LA PAGINA
    if (fullSize == (scroll + sizeVP)) {
        btnTop.classList.add("scrollFinal"); 
    }else{
         btnTop.classList.remove("scrollFinal");
    }
});

//DETECTAMOS EVENTO CLICK EN EL BOTON
btnTop.addEventListener("click", function(){
    window.scrollTo(0,0);
});
//DETECTAR EVENTO CLICK EN EL LOGO
logo.addEventListener("click", function(){
    window.scrollTo(0,0);
});





