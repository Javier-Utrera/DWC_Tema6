window.addEventListener("load", inicializar, false);

function inicializar() {
    escribir();
}
function escribir(){

    var contenido= document.createElement('div');
    contenido.setAttribute("id","todos-los-viajes");
    document.getElementById("contenedor").appendChild(contenido);
    var subtitulo = document.createElement("h1");
    subtitulo.textContent="Subtitulo";
    document.getElementById("todos-los-viajes").appendChild(subtitulo);
    var listadesordenada= document.createElement("ul")
    subtitulo.appendChild(listadesordenada);
    if (myJSON.length>0){
        myJSON.forEach(element => {
            var listaordenada = document.createElement("li")
            listadesordenada.appendChild(listaordenada)
            var imagen= document.createElement("img")
            imagen.src=element[0];
            listadesordenada.appendChild(imagen);
            var parrafo= document("p")
            parrafo.textContent=element[1];
        });
    }
    
}
const myJSON = 
[
    {src:"/img/img1.jpg", desc: "descripcion1", specs: ["spec11", "spec12"]},
    {src:"/img/img2.jpg", desc: "descripcion2", specs: ["spec21", "spec22"]},
    {src:"/img/img3.jpg", desc: "descripcion3", specs: ["spec31", "spec32"]},
    {src:"/img/img4.jpg", desc: "descripcion4", specs: ["spec41", "spec42"]},
];

