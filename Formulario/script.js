window.addEventListener("load", inicializar, false);

function inicializar() {
    crearformulario()
    document.getElementById("enviar").addEventListener("click",guardar)
}
function guardar(){
    var correo = document.getElementById("correo").value
    var departamento = document.getElementById("departamento").value
    document.cookie = "correo"+"="+correo;
    document.cookie = "departamento"+"="+departamento; 
    sessionStorage.setItem("correo",correo);
    sessionStorage.setItem("departamento",departamento);
    console.log(document.cookie)
}

function crearformulario() {
    var formulario;
    var label;
    var input;
    var boton;

    var contenedor = document.getElementById("contenedor")

    formulario = document.createElement("from")
    contenedor.appendChild(formulario)

    label = document.createElement("label")
    label.setAttribute("for", "correo")
    label.textContent = "Correo"
    formulario.appendChild(label)

    formulario.appendChild(document.createElement("br"))

    input = document.createElement("input")
    input.type = "email"
    input.id = "correo"
    input.name = "correo"
    if (sessionStorage.getItem("correo")){
        input.value = sessionStorage.getItem("correo")
    } else{
        input.value = "Introzuca el correo electronico"
    }
    
    formulario.appendChild(input);

    formulario.appendChild(document.createElement("br"))

    label = document.createElement("label")
    label.setAttribute("for", "departamento")
    label.textContent = "Departamento"
    formulario.appendChild(label)

    formulario.appendChild(document.createElement("br"))

    input = document.createElement("input")
    input.type = "text"
    input.id = "departamento"
    input.name = "departamento"
    if (sessionStorage.getItem("departamento")){
        input.value = sessionStorage.getItem("departamento")
    } else{
        input.value = "Introzuca su departamento"
    }    
    formulario.appendChild(input);

    formulario.appendChild(document.createElement("br"))
    formulario.appendChild(document.createElement("br"))

    boton = document.createElement("button")
    boton.type="Submit"
    boton.id="enviar"
    boton.textContent="Enviar"
    formulario.appendChild(boton)

}



