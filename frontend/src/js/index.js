// import firebase from 'firebase';
import { firebaseConfig } from './configs'
import {home} from './pages/home'
import {loginPage} from './pages/login'
import {ncm} from './pages/ncm'
import {fatura} from './pages/fatura'
import '../css/index.css'
import { registrar } from './pages/registrar';

import firebase from "firebase/app";
import 'firebase/database'
import 'firebase/firestore'

function firebaseInit () {

    if(!firebase.apps.length) 
        firebase.initializeApp(firebaseConfig)

}

function pageSelector() {
    const address = location.hash.split('/')
    const target = address[1]
    if(!target){
        return 'login'
    }
    return target
}

function init() {
    firebaseInit()
    const target = pageSelector()
    trocaPagina(target)
}

init()

window.addEventListener('hashchange', () => {
    const target = pageSelector()
    trocaPagina(target)
})

function trocaPagina(pagina) {
    const elementoAtual = document.getElementById('template-'+pagina)
    const template = document.importNode(elementoAtual.content, true)
    document.getElementById('corpo').innerHTML = ""
    document.getElementById('corpo').appendChild(template)
    if(pagina === 'home'){
        home()
    } else if (pagina === 'login'){
        loginPage()
    } else if (pagina === 'ncm') {
        ncm()
    } else if (pagina === 'fatura') {
        fatura()
    } else if (pagina === 'registrar') {
        registrar()
    }
}
