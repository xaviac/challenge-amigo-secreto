// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Declaramos un array vacío para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo al array
function agregarAmigo() {
    // Limpiamos el mensaje de resultado para poder iniciar una nueva lista de amigos.
    document.getElementById('resultado').innerHTML = '';

    // Obtenemos el valor del input con id 'amigo'
    let nombre = document.getElementById('amigo').value;
    
    // Verificamos si el input no está vacío
    if (nombre) {
        // Agregamos el nombre al array de amigos
        amigos.push(nombre);
        
        // Limpiamos el input para que esté listo para el siguiente nombre
        document.getElementById('amigo').value = '';
        
        // Mostramos la lista actualizada de amigos
        mostrarAmigos();
    } else {
        // Si el input está vacío, mostramos un mensaje de error
        alert('Por favor, inserte un nombre válido.');
        // Limpiamos el input para que el usuario pueda ingresar un nombre
        document.getElementById('amigo').value = '';
    }
}

// Función para mostrar los amigos en el HTML
function mostrarAmigos() {
    // Obtenemos el elemento ul donde se mostrarán los amigos
    let lista = document.getElementById('listaAmigos');
    
    // Limpiamos la lista actual para evitar duplicados
    lista.innerHTML = '';

    // Iteramos sobre el array de amigos
    for (let i = 0; i < amigos.length; i++) {
        // Creamos un nuevo elemento 'li' para cada amigo
        let li = document.createElement('li');
        
        // Establecemos el texto del 'li' como el nombre del amigo
        li.textContent = amigos[i];
        
        // Agregamos el 'li' a la lista
        lista.appendChild(li);
    }
}

// Función para obtener un amigo al azar
function sortearAmigo() {
    // Verificamos si hay al menos dos amigos en el array
    if (amigos.length > 1) {
        // Obtenemos un índice aleatorio del array de amigos
        let indice = Math.floor(Math.random() * amigos.length);
        
        // Obtenemos el amigo correspondiente al índice aleatorio
        let amigoSorteado = amigos[indice];
        // Limpiamos la lista de amigos para que no se muestre después del sorteo
        document.getElementById('listaAmigos').innerHTML = '';
        amigos = [];

        // Mostramos el amigo sorteado en un mensaje
        document.getElementById('resultado').innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
  
    } else {
        // Si hay menos de dos amigos, mostramos un mensaje de error
        alert('Por favor, agrega al menos dos amigos para poder sortear.');
    }
    
}