let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validación del campo vacío
    if (!nombre) {
        alert('Por favor, inserte un nombre.');
        return;
    }

    // Añadir al array y limpiar input
    amigos.push(nombre);
    input.value = '';

    // Actualizar lista visual
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = amigos.map(nombre => 
        `<li>${nombre}</li>`
    ).join('');
}

function sortearAmigo() {
    // Validar si hay amigos registrados
    if (amigos.length === 0) {
        alert('Agrega al menos un amigo primero.');
        return;
    }

    // Selección aleatoria
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    // Mostrar resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${amigoSecreto}</li>`;
}


