window.addEventListener("load", inicializar, false);

function inicializar() {
    escribir();
    document.addEventListener("mousemove", actualizar);
}

function escribir(){
    var cuadro = document.getElementById("contenedor");
    var ejex=document.createElement("p");
    var ejey=document.createElement("p");
    cuadro.appendChild(ejex);
    cuadro.appendChild(ejey);

}
function actualizar(e){
    var cuadro = document.getElementById("contenedor");
    cuadro.firstChild.textContent=e.screenX;
    cuadro.firstChild.nextSibling.textContent=e.screenY;
}



