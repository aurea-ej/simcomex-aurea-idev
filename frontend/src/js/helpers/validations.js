const emailValidation = (value) => {
    const validation = /\S+@\S+\.\S+/
    return validation.test(value) ? '' : 'E-mail inválido'
}
// ver regras de validação de senha
const passwordValidation = (value) => {
    return value.length >= 8 ? '' : 'Senha inválida'
}
const codigoInternoValidation = (value) => {
    if(value === '') return 'O código é obrigatório'
    return value >= 0 && value <= 99 ? '' : 'Código inválido'
}

const cnpjValidation = (value) => {
    if(value === '') return ''
    return CNPJValidator(value) ? '' : 'CNPJ inválido'
}

const cpfValidation = (value) => {
    if(value === '') return ''
    return cpfValidator(value) ? '' : 'CPF inválido'
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
function CNPJValidator(cnpj) {
    if (cnpj === '') return false;
    if (cnpj === undefined) return false;

    cnpj = cnpj.replace(/\D+/g, '');

    if (cnpj.length !== 14) return false;

    // Elimina CNPJs invalidos conhecidos
    if (
        cnpj === '00000000000000' ||
        cnpj === '11111111111111' ||
        cnpj === '22222222222222' ||
        cnpj === '33333333333333' ||
        cnpj === '44444444444444' ||
        cnpj === '55555555555555' ||
        cnpj === '66666666666666' ||
        cnpj === '77777777777777' ||
        cnpj === '88888888888888' ||
        cnpj === '99999999999999'
    )
        return false;

    // Valida DVs
    let tamanho = cnpj.length - 2;
    let numeros = cnpj.slice(0, Math.max(0, tamanho));
    const digitos = cnpj.slice(Math.max(0, tamanho));
    let soma = 0;
    let pos = tamanho - 7;
    for (let index = tamanho; index >= 1; index--) {
        soma += Number(numeros.charAt(tamanho - index)) * pos--;
        if (pos < 2) pos = 9;
    }
    let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado !== Number(digitos.charAt(0))) return false;

    tamanho = tamanho + 1;
    numeros = cnpj.slice(0, Math.max(0, tamanho));
    soma = 0;
    pos = tamanho - 7;
    for (let index = tamanho; index >= 1; index--) {
        soma += Number(numeros.charAt(tamanho - index)) * pos--;
        if (pos < 2) pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado !== Number(digitos.charAt(1))) return false;

    return true;
}

function cpfValidator(cpf) {
    if (cpf === undefined) return false;
    if (cpf === '___.___.___-__') return false;
    cpf = cpf.replace(/\D+/g, '');
    if (cpf === '') return false;
    // Elimina CPFs invalidos conhecidos
    if (
        cpf.length !== 11 ||
        cpf === '00000000000' ||
        cpf === '11111111111' ||
        cpf === '22222222222' ||
        cpf === '33333333333' ||
        cpf === '44444444444' ||
        cpf === '55555555555' ||
        cpf === '66666666666' ||
        cpf === '77777777777' ||
        cpf === '88888888888' ||
        cpf === '99999999999'
    )
        return false;
    // Valida 1o digito
    let add = 0;
    for (let index = 0; index < 9; index++)
        add += Number.parseInt(cpf.charAt(index)) * (10 - index);
    let rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) rev = 0;
    if (rev !== Number.parseInt(cpf.charAt(9))) return false;
    // Valida 2o digito
    add = 0;
    for (let index = 0; index < 10; index++)
        add += Number.parseInt(cpf.charAt(index)) * (11 - index);
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) rev = 0;
    if (rev !== Number.parseInt(cpf.charAt(10))) return false;
    return true;
}


export default validarCampo
export {emailValidation, passwordValidation, codigoInternoValidation, cnpjValidation, cpfValidation}