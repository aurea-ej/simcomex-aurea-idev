import getFormValues from "../helpers/getFormValues"
import validarCampo, {emailValidation, passwordValidation} from '../helpers/validations'

function registrar() {
    const ids = ['registrar_email', 'registrar_password']
    document.querySelector('#form-resgitrar').addEventListener('submit', (event) => {
        event.preventDefault()
        const data = getFormValues(ids)
        const emailValido = validarCampo([emailValidation], 'registrar_email')
        const senhaValido = validarCampo([passwordValidation], 'registrar_password')
        if(emailValido && senhaValido){
            console.log(data)
        }
    })
}

export {registrar}