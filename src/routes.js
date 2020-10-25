import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Conversor from './components/pagina1/conversorUSD_BRL';
import Conversor1 from './components/pagina2/conversorEUR_BRL';
import Conversor2 from './components/pagina3/conversorCAD_BRL';
import Conversor3 from './components/pagina4/conversorARS_BRL';
import Home from './components/paginaHome/Home';


export default function Routes(){
    return (
        <BrowserRouter>
        <Route exact path="/conversor" component={Conversor}/>
        <Route exact path="/conversor1" component={Conversor1}/>
        <Route exact path="/conversor2" component={Conversor2}/>
        <Route exact path="/conversor3" component={Conversor3}/>
        <Route exact path="/" component={Home}/>
            
            
        </BrowserRouter>
    )
}