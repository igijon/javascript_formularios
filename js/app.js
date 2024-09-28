const form = document.getElementById('formulario')

const validar = (e) => {
    console.log('entra')
    let passwd = document.getElementById('password').value
    let passRgex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // Al menos una letra mayúscula, una minúscula, un dígito y un carácter especial y al menos 8 caracteres
    let result = passRgex.test(passwd)
    console.log(result)
    return result
}

form.addEventListener('submit', (e) => {
    if(!validar()) {
        e.preventDefault()
        alert("Error, la contraseña no cumple el patrón")
    }
})