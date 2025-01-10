window.addEventListener("load", inicializar, false);

function inicializar() {
    insertar();
}
function insertar(){

    let lista = [...document.getElementsByTagName("ol")][0];
    let antes= document.createElement("li");
    let despues= document.createElement("li");
    var prueba= lista.childNodes;
    lista.insertBefore(despues,prueba.find(element=>element.textContent=="BMW"));
    lista.insertBefore(antes,prueba.find(element=>element.textContent=="BMW").nextSibling);
    [...document.getElementsByTagName("li")].forEach(elemento=>elemento.setAttribute("type","square"));
}