const form = document.getElementById('formulario')

form.addEventListener('submit', (e) => {
    e.preventDefault() //Evitamos el envío del formulario para este ejemplo
    console.log('Entra')
    alert('Formulario enviado correctamente')
})