// import React, {useEffect, useState, useRef} from 'react'
// import firebase from "firebase/app";
// import firebaseConfig from '../../FIREBASECONFIG.js'
// import 'firebase/database'
// import 'firebase/firestore'
// // import './app.css'

// function App() {

//     useEffect(()=>{
//         if(!firebase.apps.length) 
//             firebase.initializeApp(firebaseConfig)
//     },[])

//     const [invoiceData,setInvoiceData] = useState({

//         importProcess: '',
//         invoiceNumber: '',
//         diNumber: '',
//         inportModality: '',
//         importer: '',
//         taxRegimeImporter: '',
//         taxRegimeAcquirer: '',
//         simulationDate: '',
//         invoiceDate: '',
//         shippingModal: '',
//         navigationType: '',
//         netWeight: '',
//         grossWeight: '',
//         fobValue: '',
//         safeValue: '',
//         shippingValue: '',
//         vucvCurrency: '',
//         shippingCurrency: '',
//         safeCurrency: '',
//         surchargeCurrency: '',
//         incoterm: '',
//         dollarTax: '',
//         vucvCurrencyTax: '',
//         ShippingCurrencyTax: '',
//         InsuranceCurrencyTax: '',
//         IncreaseCurrencyTax: '',

//     })

//     function handleInputChange(event) {

//         const {name, value} = event.target

//         setProductData ({

//             ...productData, [name]: value

//         })
        
//     }

//     // function sendProducts(){

//     //     firebase.database().ref('products/' + productData.cod).set({
//     //         cod: productData.cod,
//     //         codRefProducer: productData.codRefProducer,
//     //         descProd: productData.descProd,
//     //         codNCM: productData.codNCM,
//     //         descNCM: productData.descNCM,
//     //         amount: productData.amount,
//     //         unity: productData.unity,
//     //         weight: productData.weight,
//     //         vuvc: productData.vuvc,
//     //         totalAmount: productData.totalAmount,
//     //         incoterm: productData.incoterm
//     //     }).then(()=>alert('Item cadastrado'));

//     // }

//     const refShowMore = useRef()
//     const [textButton, setTextButton] = useState('Mostrar dados adicionais')

//     function showMore() {

//         var current = refShowMore.current.style.display

//         if (current == 'flex') {
//             refShowMore.current.style.display = 'none'
//             setTextButton('Mostrar dados adicionais')
//         }
//         else {
//             refShowMore.current.style.display = 'flex'
//             setTextButton('Recolher dados adicionais')
//         }
        
//     }

//   return (


//     <div className="App">

//         <h2>Cadastrar fatura</h2>

//         <div className='inputs'>

//             <input name='cod'            type='number' placeholder='código' onChange={handleInputChange} ></input>
//             <input name='codRefProducer' type='number' placeholder='código de referência do fabricante' onChange={handleInputChange} ></input>
//             <input name='descProd'                     placeholder='descrição da mercadoria' onChange={handleInputChange} ></input>
//             <input name='codNCM'         type='number' placeholder='código NCM' onChange={handleInputChange} ></input>
//             <input name='descNCM'                      placeholder='descrição NCM' onChange={handleInputChange} ></input>
//             <input name='amount'         type='number' placeholder='quantidade'onChange={handleInputChange} ></input>
//             <input name='unity'                        placeholder='unidade' onChange={handleInputChange} ></input>
//             <input name='weight'         type='number' placeholder='peso líquido (kg)' onChange={handleInputChange} ></input>
//             <input name='vuvc'                         placeholder='vucv (na moeda negociada)' onChange={handleInputChange} ></input>
//             <input name='totalAmount'    type='number' placeholder='valor total (na moeda negociada)' onChange={handleInputChange} ></input>
//             <input name='incoterm'                     placeholder='INCOTERM' onChange={handleInputChange} ></input>

//         </div>

//         <div className='button' onClick={()=>{showMore()}} >

//             <a>{textButton}</a>

//         </div>
            
//         <div className='moreInputs' ref={refShowMore} >

//             <input name='codNaladiNCCA' type='number' placeholder='código naladi NCCA' onChange={handleInputChange} />

//             <input name='codNaladiSH' type='number' placeholder='ccódigo naladi SH' onChange={handleInputChange} />

//             <input name='producerName'  placeholder='nome do fabricante' onChange={handleInputChange} />

//             <input name='producerLocalization' placeholder='logradouro do fabricante' onChange={handleInputChange} />

//             <input name='producerNumber' placeholder='número do fabricante' onChange={handleInputChange} />

//             <input name='producerComplement' type='number' placeholder='complemento do fabricante'onChange={handleInputChange} />

//             <input name='producerCity' placeholder='cidade do fabricante' onChange={handleInputChange} />

//             <input name='producerState' type='number' placeholder='uf do fabricante' onChange={handleInputChange} />

//             <input name='countryCod' placeholder='código país de aquisição da mercadoria' onChange={handleInputChange} />

//             <input name='countryName' type='number' placeholder='nome país de aquisição da mercadoria' onChange={handleInputChange} />

//             <input name='codRelationship' placeholder='código relação comprador/vendedor' onChange={handleInputChange} />

//             <input name='codBond' type='number' placeholder='código vínculo comprador/vendedor' onChange={handleInputChange} />

//             <input name='attribute' type='number' placeholder='atributo' onChange={handleInputChange} />

//             <input name='merchandiseApplication' placeholder='aplicação da mercadoria' onChange={handleInputChange} />

//             <input name='merchandiseCondition' type='number'  placeholder='condição da mercadoria' onChange={handleInputChange} />

//             <input name='merchandiseSpecification' placeholder='especificação da mercadoria' onChange={handleInputChange} />

//             <input name='amountStatistics'  placeholder='quantidade (estatística)' onChange={handleInputChange} />

//             <input name='unityStatistics' placeholder='unidade (estatística)' onChange={handleInputChange} />


//         </div>

//         <div className='button' >
//             <a onClick={sendProducts}>Enviar</a>
//         </div>

      
//     </div>

//   );
// }

// export default App;
