window.addEventListener("load", inicializar, false);

function inicializar() {
    escribir();
}

function comprobar(e){
    var detonador = e.currentTarget;
    const re = /^[A-Z]{3}-\d{1,5}$/
    
    if(re.test(detonador.value)){
        detonador.parentNode.style="background-color:green";
        document.getElementById("mensaje").textContent="Correcto";
    } else { 
        detonador.parentNode.style="background-color:red";
        document.getElementById("mensaje").textContent="tres letras, guión y de 1 a 5 números";
    }
}

function enviar(e) {
    e.preventDefault();
    var contenido = document.getElementById("producto");
    var producto = contenido.value;

    if (document.getElementById("mensaje").textContent == "Correcto") {
        // Verifica si ya hay un valor almacenado
        var productosGuardados = localStorage.getItem(contenido.id);

        if (productosGuardados === null) {
            // Si no hay nada, almacena el primer valor
            localStorage.setItem(contenido.id, producto);
        } else {
            // Si ya hay productos almacenados, agrega el nuevo valor (separado por coma)
            localStorage.setItem(contenido.id, productosGuardados + "," + producto);
        }

        e.currentTarget.parentNode.submit(); // Enviar el formulario
    }
}

function escribir(){
    var formulario = document.createElement("form");
    formulario.action="";
    formulario.method="GET";
    document.getElementById("contenido").appendChild(formulario)
    var label = document.createElement("label");
    var input = document.createElement("input");
    var mensaje = document.createElement("p");
    mensaje.id="mensaje"

    label.htmlFor="producto"
    label.textContent="Producto";
    formulario.appendChild(label);
    formulario.appendChild(document.createElement("br"));

    input.type="text";
    input.id="producto";
    input.name="producto";
    input.value="Inserte su producto";
    input.addEventListener("blur",comprobar,false)
    formulario.appendChild(input)
    formulario.appendChild(document.createElement("br"));

    formulario.appendChild(mensaje)

    var boton = document.createElement("button");
    boton.type="submit";
    boton.textContent="Enviar";
    boton.id="boton";
    boton.addEventListener("click",enviar)
    formulario.appendChild(boton);



}
