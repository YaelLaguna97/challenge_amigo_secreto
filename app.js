const inputAmigo = document.getElementById("amigo");
const buttonAdd = document.getElementById("buttonAdd");
const buttonDraw = document.getElementById("buttonDraw");
const buttonReset = document.getElementById("buttonReset");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

// Agregar un amigo
function agregarAmigo() {
    const nombre = inputAmigo.value.trim();
    if (!nombre) {
        alert("Por favor ingresa un nombre");
        return;
    }
    
    // Verificar si el nombre ya está en la lista
    if (listaAmigos.includes(nombre)) {
        alert("Este nombre ya está en la lista");
        return;
    }
    
    listaAmigos.push(nombre);
    
    // Crear y añadir el nuevo elemento de la lista
    const li = document.createElement("li");
    li.textContent = nombre;
    ulListaAmigos.appendChild(li);
    
    // Limpiar el campo de entrada
    inputAmigo.value = "";
    inputAmigo.focus();
}

// Sortear amigo secreto
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Añade al menos un amigo para sortear.");
        return;
    }

    const randomIndex = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[randomIndex];

    // Mostrar el resultado
    ulResultado.innerHTML = "";  // Limpiar resultados anteriores
    const li = document.createElement("li");
    li.textContent = amigoSecreto;
    ulResultado.appendChild(li);
}

// Reiniciar el juego
function reiniciarJuego() {
    // Limpiar la lista de amigos y el resultado
    listaAmigos.length = 0;
    ulListaAmigos.innerHTML = "";
    ulResultado.innerHTML = "";
    
    // Limpiar el campo de entrada
    inputAmigo.value = "";
    inputAmigo.focus();
}

// Agregar eventos
buttonAdd.addEventListener("click", agregarAmigo);
buttonDraw.addEventListener("click", sortearAmigo);
buttonReset.addEventListener("click", reiniciarJuego);
