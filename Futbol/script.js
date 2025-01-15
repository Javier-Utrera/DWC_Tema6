window.addEventListener("load", inicializar, false);

function inicializar() {
    creararbol()
}

function creararbol(){
    var viajes = document.createElement("div");
    viajes.setAttribute("id","todos-los-viajes");
    var contenedor = document.getElementById("contenedor");
    contenedor.appendChild(viajes);

    var subtitulo = document.createElement("h1");
    subtitulo.textContent="Subtitulo";
    viajes.appendChild(subtitulo);

    var contenedordelistas= document.createElement("ul");
    viajes.appendChild(contenedordelistas);
    
    myJSON.forEach(elemento=>elemento)

}
const myJSON = 
[
    {
        url_escudo_eq1: "https://example.com/escudo_eq1.png",
        nombre_eq1: "Real Madrid",
        resultado_eq1: "3",
        url_escudo_eq2: "https://example.com/escudo_eq2.png",
        nombre_eq2: "Barcelona",
        resultado_eq2: "1"
    },
    {
        url_escudo_eq1: "https://example.com/escudo_eq1.png",
        nombre_eq1: "Atlético de Madrid",
        resultado_eq1: "2",
        url_escudo_eq2: "https://example.com/escudo_eq2.png",
        nombre_eq2: "Sevilla FC",
        resultado_eq2: "2"
    },
    {
        url_escudo_eq1: "https://example.com/escudo_eq1.png",
        nombre_eq1: "Valencia CF",
        resultado_eq1: "1",
        url_escudo_eq2: "https://example.com/escudo_eq2.png",
        nombre_eq2: "Real Betis",
        resultado_eq2: "0"
    },
    {
        url_escudo_eq1: "https://example.com/escudo_eq1.png",
        nombre_eq1: "Villarreal CF",
        resultado_eq1: "4",
        url_escudo_eq2: "https://example.com/escudo_eq2.png",
        nombre_eq2: "Athletic Club",
        resultado_eq2: "2"
    }

];

