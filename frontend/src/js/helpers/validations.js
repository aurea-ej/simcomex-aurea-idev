const emailValidation = (value) => {
    const validation = /\S+@\S+\.\S+/
    return validation.test(value) ? '' : 'E-mail inválido'
}
// ver regras de validação de senha
const passwordValidation = (value) => {
    return value.length >= 8 ? '' : 'Senha inválida'
}

/**
 * 
 * @param {string} valor valor a ser validado
 * @param {Function[]} validacoes array de funções de validação a serem aplicados
 * @param {string} campo id do campo a ser validado
 * @returns {boolean} se o campo está válido ou não
 */
function validarCampo(validacoes, campo){
    const input = document.querySelector(`#${campo}`)
    const erro = document.querySelector(`#error_${campo}`)
    const valor = input.value
    input.classList.remove('invalid')
    erro.innerHTML = ''
    let validation = ''
    validacoes.forEach(validacao => {
        const isValid = validacao(valor)
        validation = isValid
    })
    if(validation !== ''){
        input.classList.add('invalid')
        erro.innerHTML = validation
        return false
    } else {
        return true
    }
}

export default validarCampo
export {emailValidation, passwordValidation}