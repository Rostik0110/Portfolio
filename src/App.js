import React, { Component } from 'react';
import Home from './Components/Home/Home.js';
import Portfolio from './Components/Portfolio/Portfolio.js';
import { BrowserRouter,Route} from 'react-router-dom';
import Config from './Firebase/Config';

const App = () => {
    Config.initializeFirebase();

    return(         
        <BrowserRouter>
            <Route path='/' exact={true} component={Home} />
            <Route path="/Home" component={Home}/>
            <Route path="/Portfolio" component={Portfolio}/>
        </BrowserRouter>  
    )
}

export default App;