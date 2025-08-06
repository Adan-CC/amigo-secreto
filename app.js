// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Declaramos el arreglo
 let amigos = [];
 //let lista = 




function agregarAmigo(){
   
   //obtenemos el nombre escrito
   let nombreAmigo = document.getElementById('amigo').value.trim();
   console.log(nombreAmigo);
   
   //verifica que el campo no este vacio
   if(nombreAmigo == ''){
      alert('Por favor, inserte un nombre')
   }
   if(amigos.includes == `${nombreAmigo}`){
      //si el campo no esta vacio se guardan los nombres en el arreglo
       console.log('El nombre ya existe en la lista');
      
   }else{
      console.log('El nombre no existe en la lista');
      amigos.push(nombreAmigo);
   } 
   //limpia la caja de los nombres
   document.querySelector('#amigo').value = '';
     mostrarArreglo();
}

function mostrarArreglo() {
    let ul = document.getElementById('listaAmigos');
    ul.innerHTML = ''; // Limpiar la lista antes de agregar nuevos elementos
    amigos.forEach(function (elemento) {
        let li = document.createElement('li');
        li.textContent = elemento;
        ul.appendChild(li);
    });
}
   



 