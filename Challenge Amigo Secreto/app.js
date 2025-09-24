// Array para almacenar los nombres de amigos
let amigos = [];

/* Función para agregar amigos*/
function agregarAmigo() {
    // Se obtiene el nombre que se otorga en "Escribe un nombre"
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); //Se borran las comillas por defecto del programa

    // Se valida que el input no este vacio 
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregamos un array junto al metodo .push para mover cada nombre almacenado
    amigos.push(nombre);

    // Limpia el input
    input.value = "";

    // Actualiza la lista
    actualizarLista();
}

/* Función para actualizar la lista de amigos */
function actualizarLista() {
    // Obtener el elemento <ul> de la lista
    const lista = document.getElementById("listaAmigos");

    // Limpia la lista antes de actualizar
    lista.innerHTML = "";

    // Recorre el array de amigos y agregar <li> para cada uno
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.innerText = amigos[i]; // Mostrar el nombre dentro de un <li>
        lista.appendChild(item);    // Agrega al <ul>
    }
}

/* Función para sortear un amigo al azar */
function sortearAmigo() {
    // Valida que existan amigos
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Genera un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obteniene el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar resultado en el HTML
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> El amigo secreto es: ${amigoSorteado}</li>`;
}
