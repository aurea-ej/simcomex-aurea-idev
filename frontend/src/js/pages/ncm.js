import getFormValues from "../helpers/getFormValues"
import { navToggle } from "../helpers/navToggle"

function ncm() {
    const form = document.querySelector('#ncm-form')
    const ids = [
        'ncm_ncm',
        'ncm_cint',
        'ncm_ncint',
        'ncm_desc',
        'ncm_cest',
        'ncm_cior',
        'ncm_cdesc'
    ]
    navToggle()
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const data = getFormValues(ids)
        console.log(data)
    })
}

export {ncm}