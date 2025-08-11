let listaNombres = [];
let mostrarNombres = document.querySelector("#nameDisplay");    

function limpiarCaja() {
    document.getElementById("nameInput").value = "";
}

function esNombreValido(nombre) {
    // Solo letras y espacios, mínimo 2 caracteres
    return /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,}$/.test(nombre);
}

function agregarNombreLista() {
    let nombre = document.getElementById("nameInput").value.trim();
    let alertMensaje = document.querySelector("#alert");
    
    if (nombre === "" || !esNombreValido(nombre))  {
        alert("Por favor, ingresa un nombre válido.");
    } else if (listaNombres.includes(nombre)) {
        alertMensaje.innerHTML = "El nombre ya está en la lista.";
    } else {
        listaNombres.push(nombre);
        mostrarNombres.innerHTML = "<li>" + listaNombres.join("</li><li>") + "</li>";
        alertMensaje.innerHTML = "Necesitas al menos 2 nombres para sortear";

        if (listaNombres.length >= 2) {
            document.getElementById("random").disabled = false; // Habilitar el botón de sorteo
            alertMensaje.innerHTML = "¡Puedes sortear los nombres ahora!";
        }

        console.log(listaNombres);
    }

    limpiarCaja();
}

function sortearNombres() {
    let nombreSorteado = Math.floor(Math.random() * listaNombres.length);
    let nombreGanador = listaNombres[nombreSorteado];

    mostrarNombres.innerHTML = "Tu amigo secreto es: " + nombreGanador;
}