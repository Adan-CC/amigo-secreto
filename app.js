// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Declaramos el arreglo
 let amigos = [];
 




function agregarAmigo() {
    // obtenemos el nombre escrito
    let nombreAmigo = document.getElementById('amigo').value.trim();
    //console.log(nombreAmigo);

    // verifica que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre');
        return;
    }

    // verifica si el nombre ya está en el arreglo
    if (amigos.includes(nombreAmigo)) {
        alert('Ese nombre ya está en la lista');
    } else {
        amigos.push(nombreAmigo);
        mostrarArreglo();
    }

    // limpia la caja de los nombres
    document.querySelector('#amigo').value = '';
}

function mostrarArreglo() {
       let ul = document.getElementById('listaAmigos');
      ul.innerHTML = ''; // Limpiar la lista antes de agregar nuevos elementos
      amigos.forEach(function (elemento) { 
        let li = document.createElement('li'); // Crear un nuevo elemento de lista
        li.textContent = elemento;
        ul.appendChild(li);   // Agregar el nuevo elemento a la lista
    });
}

function sortearAmigo(){
         // Verifica si la lista de amigos está vacía
      if (amigos.length === 0) {
         alert('La lista está vacía. Agrega al menos un amigo para sortear.');
         return;

       }
       // generar un número aleatorio para seleccionar un amigo
      let indiceAleatorio = Math.floor(Math.random() * amigos.length);
      let amigoSeleccionado = amigos[indiceAleatorio]; 
      let mostrarResultado = document.getElementById('resultado'); // Mostrar el resultado en el elemento con id 'resultado'
      mostrarResultado.textContent = 'El amigo seleccionado es: ' + amigoSeleccionado;
      //alert('El amigo seleccionado es: ' + amigoSeleccionado);
      //console.log(amigoSeleccionado);
      amigos.splice(indiceAleatorio, 1); //Elimina el amigo sorteado de la lista
      mostrarArreglo(); // Actualiza la lista visible 
}
   



 