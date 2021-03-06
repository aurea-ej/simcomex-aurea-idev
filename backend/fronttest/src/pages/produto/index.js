import React, {useEffect, useState, useRef} from 'react'
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import firebaseConfig from '../../FIREBASECONFIG.js'
import 'firebase/database'
import 'firebase/firestore'
import './app.css'

function App() {

    useEffect(()=>{
        if(!firebase.apps.length) 
            firebase.initializeApp(firebaseConfig)
    },[])

    const [productData,setProductData] = useState({

        cod: '',
        codRefProducer: '',
        descProd: '',
        codNCM: '',
        descNCM: '',
        amount: '',
        unity: '',
        weight: '',
        vuvc: '',
        totalAmount: '',
        incoterm: ''

    })

    function handleInputChange(event) {

        const {name, value} = event.target

        setProductData ({

            ...productData, [name]: value

        })
        
    }

    function sendProducts(){

        firebase.database().ref('products/' + productData.cod).set({
            cod: productData.cod,
            codRefProducer: productData.codRefProducer,
            descProd: productData.descProd,
            codNCM: productData.codNCM,
            descNCM: productData.descNCM,
            amount: productData.amount,
            unity: productData.unity,
            weight: productData.weight,
            vuvc: productData.vuvc,
            totalAmount: productData.totalAmount,
            incoterm: productData.incoterm
        }).then(()=>alert('Item cadastrado'));

    }

    const refShowMore = useRef()
    const [textButton, setTextButton] = useState('Mostrar dados adicionais')

    function showMore() {

        var current = refShowMore.current.style.display

        if (current == 'flex') {
            refShowMore.current.style.display = 'none'
            setTextButton('Mostrar dados adicionais')
        }
        else {
            refShowMore.current.style.display = 'flex'
            setTextButton('Recolher dados adicionais')
        }
        
    }

  return (


    <div className="App">

        <h2>Cadastrar produtos</h2>

        <div className='inputs'>

            <input name='cod'            type='number' placeholder='c??digo' onChange={handleInputChange} ></input>
            <input name='codRefProducer' type='number' placeholder='c??digo de refer??ncia do fabricante' onChange={handleInputChange} ></input>
            <input name='descProd'                     placeholder='descri????o da mercadoria' onChange={handleInputChange} ></input>
            <input name='codNCM'         type='number' placeholder='c??digo NCM' onChange={handleInputChange} ></input>
            <input name='descNCM'                      placeholder='descri????o NCM' onChange={handleInputChange} ></input>
            <input name='amount'         type='number' placeholder='quantidade'onChange={handleInputChange} ></input>
            <input name='unity'                        placeholder='unidade' onChange={handleInputChange} ></input>
            <input name='weight'         type='number' placeholder='peso l??quido (kg)' onChange={handleInputChange} ></input>
            <input name='vuvc'                         placeholder='vucv (na moeda negociada)' onChange={handleInputChange} ></input>
            <input name='totalAmount'    type='number' placeholder='valor total (na moeda negociada)' onChange={handleInputChange} ></input>
            <input name='incoterm'                     placeholder='INCOTERM' onChange={handleInputChange} ></input>

        </div>

        <div className='button' onClick={()=>{showMore()}} >

            <a>{textButton}</a>

        </div>
            
        <div className='moreInputs' ref={refShowMore} >

            <input name='codNaladiNCCA' type='number' placeholder='c??digo naladi NCCA' onChange={handleInputChange} />

            <input name='codNaladiSH' type='number' placeholder='cc??digo naladi SH' onChange={handleInputChange} />

            <input name='producerName'  placeholder='nome do fabricante' onChange={handleInputChange} />

            <input name='producerLocalization' placeholder='logradouro do fabricante' onChange={handleInputChange} />

            <input name='producerNumber' placeholder='n??mero do fabricante' onChange={handleInputChange} />

            <input name='producerComplement' type='number' placeholder='complemento do fabricante'onChange={handleInputChange} />

            <input name='producerCity' placeholder='cidade do fabricante' onChange={handleInputChange} />

            <input name='producerState' type='number' placeholder='uf do fabricante' onChange={handleInputChange} />

            <input name='countryCod' placeholder='c??digo pa??s de aquisi????o da mercadoria' onChange={handleInputChange} />

            <input name='countryName' type='number' placeholder='nome pa??s de aquisi????o da mercadoria' onChange={handleInputChange} />

            <input name='codRelationship' placeholder='c??digo rela????o comprador/vendedor' onChange={handleInputChange} />

            <input name='codBond' type='number' placeholder='c??digo v??nculo comprador/vendedor' onChange={handleInputChange} />

            <input name='attribute' type='number' placeholder='atributo' onChange={handleInputChange} />

            <input name='merchandiseApplication' placeholder='aplica????o da mercadoria' onChange={handleInputChange} />

            <input name='merchandiseCondition' type='number'  placeholder='condi????o da mercadoria' onChange={handleInputChange} />

            <input name='merchandiseSpecification' placeholder='especifica????o da mercadoria' onChange={handleInputChange} />

            <input name='amountStatistics'  placeholder='quantidade (estat??stica)' onChange={handleInputChange} />

            <input name='unityStatistics' placeholder='unidade (estat??stica)' onChange={handleInputChange} />


        </div>

        <div className='button' >
            <a onClick={sendProducts}>Enviar</a>
        </div>
        <div className='button' >
            <Link to='/Fatura'>Cadastrar Fatura</Link>
        </div>

    </div>

  );
}

export default App;
