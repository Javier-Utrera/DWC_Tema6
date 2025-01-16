window.addEventListener("load", inicializar, false);

function inicializar() {
    escribir();

}

function mostrarOcultar(e){
    var lanzador = e.currentTarget; 
    if(lanzador.src == "https://static-00.iconduck.com/assets.00/confirm-icon-512x512-z1hmhk5b.png"){
        lanzador.nextSibling.setAttribute("style","display:block");
        lanzador.src="https://e7.pngegg.com/pngimages/52/84/png-clipart-no-symbol-icon-cancel-s-angle-text-thumbnail.png"
    } else { 
        lanzador.nextSibling.setAttribute("style","display:none");
        lanzador.src="https://static-00.iconduck.com/assets.00/confirm-icon-512x512-z1hmhk5b.png"        
    }

}

function escribir(){
    var noticias = document.getElementById("noticias");
    var noticia;
    var titulonoticia;
    var resumen;
    var imagen;
    var descripcion;
    var contador=1;

    [...myJSON].forEach(elemento => {
        noticia = document.createElement("div");
        noticia.className="noticia"+contador
        noticias.appendChild(noticia);

        titulonoticia =document.createElement("h1");
        titulonoticia.textContent=elemento.titular;
        noticia.appendChild(titulonoticia);

        resumen = document.createElement("p");
        resumen.textContent=elemento.resumen;
        noticia.appendChild(resumen);

        imagen=document.createElement("img");
        imagen.src="https://static-00.iconduck.com/assets.00/confirm-icon-512x512-z1hmhk5b.png";
        imagen.width="30";
        imagen.setAttribute("name","mostrar");
        imagen.addEventListener("click",mostrarOcultar,false);
        noticia.appendChild(imagen);

        descripcion =document.createElement("h4");
        descripcion.setAttribute("style","display:none");
        descripcion.textContent=elemento.descripcion;
        noticia.appendChild(descripcion);

        contador++;
    });
}

const myJSON = 
[
    {titular: "Noticia 1", resumen: "Resumen de la noticia 1",descripcion: "Esta esla noticia 1"},
    {titular: "Noticia 2",resumen: "Resumen de la noticia 2",descripcion:"Esta es la noticia 2"},
    {titular: "Noticia 3",resumen: "Resumen de la noticia 3",descripcion: "Esta es la noticia 3"},
];

