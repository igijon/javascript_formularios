const btnEnviar = document.getElementById('btnEnviar')

btnEnviar.addEventListener('click', () => {
    // Obtener los valores de los campos
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let genero = document.querySelector('input[name="genero"]:checked'); // Radio button seleccionado
    let pais = document.getElementById("pais").value;

    // Validar que los campos no estén vacíos
    if (nombre === "" || email === "" || password === "") {
        alert("Por favor, rellena todos los campos.");
    } else if (!genero) {
        alert("Por favor, selecciona un género.");
    } else if (pais === "") {
        alert("Por favor, selecciona un país.");
    } else {
        alert("Formulario enviado correctamente.");
        document.getElementById("formulario").reset(); // Limpia el formulario
    }
})