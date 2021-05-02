import getFormValues from "../helpers/getFormValues"

function registrar() {
    const ids = ['resgitrar_email', 'resgitrar_password']
    document.querySelector('#form-resgitrar').addEventListener('submit', (event) => {
        event.preventDefault()
        const data = getFormValues(ids)
        console.log(data)
    })
}

export {registrar}