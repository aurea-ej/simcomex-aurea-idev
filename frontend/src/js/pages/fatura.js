import getFormValues from '../helpers/getFormValues'
import { navToggle } from '../helpers/navToggle'

function fatura() {
    const ids = [
        'fat_proc', 
        'fat_num', 
        'fat_dinum', 
        'fat_imp', 
        'fat_rti',
        'fat_rta',
        'fat_simd',
        'fat_fatd',
        'fat_navt',
        'fat_fobv',
        'fat_fretev',
        'fat_segv',
        'fat_acrv',
        'fat_vucvm',
        'fat_fretem'
    ]
    navToggle()
    document.querySelector('#fatura-form').addEventListener('submit', (event) => {
        event.preventDefault()
        const data = getFormValues(ids)
        console.log(data)
    })
}

export { fatura }