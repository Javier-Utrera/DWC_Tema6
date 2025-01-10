window.addEventListener("load", inicializar, false);

function inicializar() {
    insertar();
}
function insertar(){
    [...document.getElementsByTagName("li")].forEach(elemento=>elemento.setAttribute("type","square"));
    let lista = [...document.getElementsByTagName("ol")][0];
    // let antes= document.createElement("li");
    lista.insertBefore(document.createElement("li"),[...lista.childNodes].forEach(element=>element.textContent==="BMW"))
}
function modificar(e){

}