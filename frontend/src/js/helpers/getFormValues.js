/**
 * A função recebe um array de IDs e busca-os no DOM e retorna
 * um objeto com os valores
 * @param {string[]} fields array de strings que representa os IDs dos campos a serem buscados
 * @returns objeto contendo key-value pairs com os IDs e seus valores
 */
function getFormValues(fields){
    const values = {}
    fields.forEach(field => {
        const value = document.querySelector(`#${field}`)?.value;
        values[field] = value
    })
    return values
}

export default getFormValues