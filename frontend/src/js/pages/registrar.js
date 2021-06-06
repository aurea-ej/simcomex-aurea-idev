import getFormValues from "../helpers/getFormValues"
import validarCampo, {cnpjValidation, emailValidation, passwordValidation} from '../helpers/validations'

function registrar() {
    const ids = [
        'registrar_email', 
        'registrar_password',
        'registrar_nome',
        'registrar_telefone',
        'registrar_empresa',
        'registrar_cnpj',
    ]
    document.querySelector('#form-resgitrar').addEventListener('submit', (event) => {
        event.preventDefault()
        const data = getFormValues(ids)
        const emailValido = validarCampo([emailValidation], 'registrar_email')
        const senhaValido = validarCampo([passwordValidation], 'registrar_password')
        const cnpjValido = validarCampo([cnpjValidation], 'registrar_cnpj')
        if(emailValido && senhaValido){
            console.log(data)
        }
    })
}

export {registrar}