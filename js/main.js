let entradaNombre = document.getElementById("entradaNombre");
let btnGuardar = document.getElementById("btnGuardar");
let btnEliminar = document.getElementById("btnEliminar");

btnGuardar.addEventListener("click", () => {
  const NOMBRE_RECIBIDO = entradaNombre.value.trim();
  localStorage.setItem("nombre", NOMBRE_RECIBIDO);
  alert(`¡${NOMBRE_RECIBIDO}, tu nombre se ha guardado con exito!`);
});
