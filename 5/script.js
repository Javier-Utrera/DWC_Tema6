window.addEventListener("load", inicializar, false);

function inicializar() {
    escribir();
}
function escribir(){
    let tabla = document.createElement("table");
    document.body.appendChild(tabla);
    let fila
    let columna
    let contador=1;
    for (let index = 0; index < 20; index++) {
        fila= document.createElement("tr");
        tabla.appendChild(fila);
        for (let index = 0; index < 20; index++) {
            columna= document.createElement("td");
            columna.textContent=contador++;
            fila.appendChild(columna);         
        }
        contador=1;
        
              
    }
}
