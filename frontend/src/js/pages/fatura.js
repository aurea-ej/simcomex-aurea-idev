import getFormValues from '../helpers/getFormValues'
import { navToggle } from '../helpers/navToggle'

function fatura() {
    const ids = [
        'fat_proc',
        'fat_num',
        'fat_dinum',
        'fat_imp',
        'fat_impo',
        'fat_rti',
        'fat_rta',
        'fat_simd',
        'fat_fatd',
        'fat_frem',
        'fat_navt',
        'fat_fobv',
        'fat_fretev',
        'fat_segv',
        'fat_acrv',
        'fat_vucvm',
        'fat_fremo',
        'fat_segm',
        'fat_acrm',
        'fat_tvucvm',
        'fat_tfrem',
        'fat_tsegm',
        'fat_tacrm',
    ]
    const modIDs = [
        'fatm_cod',
        'fatm_fref',
        'fatm_desc',
        'fatm_ncmc',
        'fatm_ncmd',
        'fatm_quan',
        'fatm_un',
        'fatm_peso',
        'fatm_vucv',
        'fatm_vtot',
        'fatm_inco',
    ]
    navToggle()
    document.querySelector('#fatura-form').addEventListener('submit', (event) => {
        event.preventDefault()
        const data = getFormValues(ids)
        console.log(data)
    })
    document.querySelector('#modal-form').addEventListener('submit', (event) => {
        event.preventDefault()
        const data = getFormValues(modIDs)
        console.log(data)
    })
}

export { fatura }