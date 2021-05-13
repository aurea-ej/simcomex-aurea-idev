import {React} from 'react'
import { Route, BrowserRouter} from 'react-router-dom'

import Produto from './pages/produto'
import Fatura from './pages/fatura'

const Routes = () => {

    return (

        <BrowserRouter>

            <Route component={Produto} path='/' exact />
            <Route component={Fatura} path='/Fatura'/>
        
        </BrowserRouter>

    )

}

export default Routes;