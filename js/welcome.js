let textoCambiar = document.getElementById("texto-cambiar");
let btnEliminar = document.getElementById("btnEliminar");

if (localStorage.getItem("nombre") != null) {
  let nombre = localStorage.getItem("nombre");
  textoCambiar.innerText = `Hola ${nombre}, bienvenido/a de nuevo.`;
} else {
  textoCambiar.innerText =
    "Por favor ve a la vista principal e ingresa tu nombre";
}

btnEliminar.addEventListener("click", () => {
  let nombre = localStorage.getItem("nombre");
  localStorage.removeItem("nombre");
  alert(`El nombre ${nombre} ha sido eliminado con exito`);
  window.location.reload();
});
