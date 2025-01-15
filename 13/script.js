window.addEventListener("load", inicializar, false);

function inicializar() {
    escribir();
    [...document.getElementsByTagName("img")].forEach(a => { a.addEventListener("click", ocultar, false)});
}
function escribir(){

    var contenido= document.createElement('div');
    contenido.setAttribute("id","todos-los-viajes");
    document.getElementById("contenedor").appendChild(contenido);

    var subtitulo = document.createElement("h1");
    subtitulo.textContent="Subtitulo";
    contenido.appendChild(subtitulo);

    var listadesordenada= document.createElement("ul")
    contenido.appendChild(listadesordenada);

    if (myJSON.length>0){
        myJSON.forEach(element => {

            var lista = document.createElement("li");
            listadesordenada.appendChild(lista);

            var imagen= document.createElement("img");
            imagen.setAttribute("src",element.src);
            lista.appendChild(imagen);

            var parrafo= document.createElement("p");
            parrafo.textContent=element.desc;
            lista.appendChild(parrafo);

            var sublista=document.createElement("ul");
            sublista.setAttribute("class","specs");
            lista.appendChild(sublista);

            if (element.specs.length>0){
                element.specs.forEach(subelemento=>{
                    var elemento=document.createElement("li")
                    elemento.textContent=subelemento
                    sublista.appendChild(elemento)
                })
            }
        });
    }
    
}

function ocultar(e){
    let imagen = e.target
    imagen.parentNode.childNodes.forEach(hijo=>{
        if (hijo.getAttribute("style")=="display:none" && hijo!==imagen.parentNode.childNodes[0]){
                hijo.setAttribute("style","display:block")  
        }else { 
            if (hijo!==imagen.parentNode.childNodes[0]){
                hijo.setAttribute("style","display:none")
            }
        }
    })
}
const myJSON = 
[
    {src:"https://judiciariesworldwide.fjc.gov/sites/default/files/styles/max_325x325/public/2024-10/spain-flag-round-icon-256.png?itok=Mk9al2Ba", desc: "descripcion1", specs: ["spec11", "spec12"]},
    {src:"https://judiciariesworldwide.fjc.gov/sites/default/files/styles/max_325x325/public/2024-10/spain-flag-round-icon-256.png?itok=Mk9al2Ba", desc: "descripcion2", specs: ["spec21", "spec22"]},
    {src:"https://judiciariesworldwide.fjc.gov/sites/default/files/styles/max_325x325/public/2024-10/spain-flag-round-icon-256.png?itok=Mk9al2Ba", desc: "descripcion3", specs: ["spec31", "spec32"]},
    {src:"https://judiciariesworldwide.fjc.gov/sites/default/files/styles/max_325x325/public/2024-10/spain-flag-round-icon-256.png?itok=Mk9al2Ba", desc: "descripcion4", specs: ["spec41", "spec42"]},
];

