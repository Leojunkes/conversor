import React from 'react';
import './Home.css';

export default function Home(props){
    return (
        <main>
            <h2 className="qualConversor">Qual conversor você deseja?</h2>
            <div className="containerGeral">
                <div className="container2USD_Euro">
                <button className="UsdButton" onClick={()=>{document.location.href='Conversor'}}>
                    Dólar Americano
                </button>
                
                <button className="euroButton" onClick={()=>{document.location.href='Conversor1'}}>
                    Euro_BRL      
                </button>
                </div>
                
                <div className="container3CAD_EAR">
                <button className="cadButton" onClick={()=>{document.location.href='Conversor2'}}>
                    Dólar Canadense
                </button>

                <button className="arsButton" onClick={()=>{document.location.href='Conversor3'}}>
                    Peso Argetino
                </button>
                </div>
                
                </div>
            
        </main>
    )
}