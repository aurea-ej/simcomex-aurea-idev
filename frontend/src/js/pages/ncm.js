import getFormValues from "../helpers/getFormValues"
import { navToggle } from "../helpers/navToggle"
import validarCampo, {codigoInternoValidation} from "../helpers/validations"

function ncm() {
    const form = document.querySelector('#ncm-form')
    const ids = [
        'ncm_ncm',
        'ncm_cint',
        'ncm_ncint',
        'ncm_desc',
        'ncm_cest',
        'ncm_cior',
        'ncm_cdesc',
    ]
    navToggle()
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const data = getFormValues(ids)
        const codigoInternoValido = validarCampo([codigoInternoValidation], 'ncm_cint')
        if(codigoInternoValido){
            console.log(data)
        }
    })
}

export {ncm}