// Variables
const listaTareas = document.getElementById("lista-tarea");

// Event Listener

eventListeners();

function eventListeners() {
  // Cuando se envia el formulario

  document
    .querySelector("#formulario")
    .addEventListener("submit", agregarTarea);

  listaTareas.addEventListener("click", borrarTarea);

  // Contenido cargado
  document.addEventListener("DOMContentLoaded", localStorageListo);
}

// Funciones

// Añadir tarea del formulario
function agregarTarea(e) {
  e.preventDefault();
  // Leer el valor del textarea
  const tarea = document.getElementById("tarea").value;

  // crear boton de eliminar
  const botonBorrar = document.createElement("a");
  botonBorrar.classList = "borrar-tarea";
  botonBorrar.innerText = "X";

  // Crear elemento y añadirle el contenido a la lista
  const li = document.createElement("li");
  li.innerText = tarea;

  // añade el botón de borrar la tarea
  li.appendChild(botonBorrar);

  // añade la tarea a la lista
  listaTareas.appendChild(li);

  // Añadir a Local Storage
  agregarTareaLocalStorage(tarea);
}

// Borrar tarea
function borrarTarea(e) {
  e.preventDefault();

  if (e.target.className === "borrar-tarea") {
    console.log(e.target.parentElement.remove());
    alert("Tarea Eliminada");
  }
}

// Mostrar datos del localstorage en la lista
function localStorageListo() {
  let tareas;

  tareas = obtenerTareaLocalStorage();

  tareas.forEach(function (tarea) {
    // crear boton de eliminar
    const botonBorrar = document.createElement("a");
    botonBorrar.classList = "borrar-tarea";
    botonBorrar.innerText = "X";

    // Crear elemento y añadirle el contenido a la lista
    const li = document.createElement("li");
    li.innerText = tarea;

    // añade el botón de borrar la tarea
    li.appendChild(botonBorrar);

    // añade la tarea a la lista
    listaTareas.appendChild(li);
  });
}

// Agrega tarea a local storage
function agregarTareaLocalStorage(tarea) {
  let tareas;
  tareas = obtenerTareaLocalStorage();

  // Añadir la nueva tarea
  tareas.push(tarea);

  // Convertir de string a arreglo para local storage
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

// Comprobar que haya elementos en localstorage, retorna un arreglo
function obtenerTareaLocalStorage() {
  let tareas;

  // Revisamos los valores del local storage
  if (localStorage.getItem("tareas") === null) {
    tareas = [];
  } else {
    tareas = JSON.parse(localStorage.getItem("tareas"));
  }

  return tareas;
}
