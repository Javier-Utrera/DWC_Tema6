window.addEventListener("load", inicializar, false);

function inicializar() {
    document.addEventListener("mousemove", actualizar);
}

function actualizar(e){
    let imagen= document.getElementById("imagen");
    imagen.setAttribute("style","position:absolute ;left:"+e.screenX+"px; " + "top:"+e.screenY+"px")
}



