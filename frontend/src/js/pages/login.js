import {login} from '../auth'

function loginPage() {
    document.querySelector('#login-form').addEventListener('submit', (event) => {
        event.preventDefault()
        const email = document.querySelector('#login-email')
        const password = document.querySelector('#login-password')
        login(email.value, password.value)
        location.hash = '#/home'
    })
}

export {loginPage}