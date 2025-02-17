// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Declaramos un array vacío para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo al array
function agregarAmigo() {
    // Obtenemos el valor del input con id 'amigo'
    let nombre = document.getElementById('amigo').value;
    
    // Verificamos si el input no está vacío
    if (nombre) {
        // Agregamos el nombre al array de amigos
        amigos.push(nombre);
        
        // Limpiamos el input para que esté listo para el siguiente nombre
        document.getElementById('amigo').value = '';
    }
}
