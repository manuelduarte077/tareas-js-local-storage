// Variables
const listaTareas = document.getElementById('lista-tarea')



// Event Listener

eventListeners();


function eventListeners (){
  // Cuando se envia el formulario

  document.querySelector('#formulario').addEventListener('submit', 
  agregarTarea);

  listaTareas.addEventListener('click', borrarTarea);

}


// Funciones



// Añadir tarea del formulario
 function agregarTarea(e) {
   e.preventDefault();
    // Leer el valor del textarea
    const tarea = document.getElementById('tarea').value;

    // crear boton de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tarea';
    botonBorrar.innerText = 'X';

    // Crear elemento y añadirle el contenido a la lista
    const li = document.createElement('li');
    li.innerText = tarea;

    // añade el botón de borrar la tarea
    li.appendChild(botonBorrar);

    // añade la tarea a la lista
    listaTareas.appendChild(li);


 }


// Borrar tarea
 function borrarTarea (e) {
   e.preventDefault();
   
  if(e.target.className === 'borrar-tarea') {
    console.log(e.target.parentElement.remove());
    alert('Tarea Eliminada');
  }

 }