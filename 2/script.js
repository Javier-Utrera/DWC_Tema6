window.addEventListener("load", inicializar, false);

function inicializar() {
    escribir();
}
function escribir(){

    var para= document.createElement('p');
    var txt1=document.createTextNode("Este es el");
    para.appendChild(txt1);

    var enfasis=document.createElement("em");
    var txt2=document.createTextNode("contenido");
    enfasis.appendChild(txt2);

    para.appendChild(enfasis);

    var txt3= document.createTextNode("de mi parrafo")
    para.appendChild(txt3)

    document.getElementById('tedtdiv').appendChild(para);
}