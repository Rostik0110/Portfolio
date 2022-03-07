import React, { Component } from 'react';
import Home from './Components/Home/Home.js';
import Catalog from './Components/Catalog/Catalog.js';
import Portfolio from './Components/Portfolio/Portfolio.js'
import { BrowserRouter,Route} from 'react-router-dom';

const App = () => {
    return(  
        <BrowserRouter>
            <Route path='/' exact={true} component={Home} />
            <Route path="/Home" component={Home}/>
            <Route path="/Catalog" component={Catalog}/>
            <Route path="/Portfolio" component={Portfolio}/>
        </BrowserRouter>  
    )
}

export default App;