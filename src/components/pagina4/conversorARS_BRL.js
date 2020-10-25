import React, {Component} from 'react';
import './conversorARS_BRL.css';

const moedaA ="ARS";
const moedaB ="BRL";
export default class Conversor3 extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            moedaA_valor:"",
            moedaB_valor:0,
        }
        this.converter = this.converter.bind(this);
    }

    converter(){
        let de_para = `${moedaA}_${moedaB}`;
        let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=0d7d4095696e105c8fc7`
        //console.log(this.state);
        fetch(url)
            .then(res=>{
                return res.json()
            })
            .then(json=>{
                let cotacao = json[de_para]
                let moedaB_valor=(this.state.moedaA_valor *cotacao).toFixed(2)
                this.setState({moedaB_valor})
                
            })
    }
    
    render(){
        return(
           <div className="container">
               <h2 className="txtH2">Conversor JUNKES</h2>
            <div className="conversor3">
                <h2>Peso Argentino </h2>
               <h3>{moedaA} para {moedaB}</h3>
               <input type="text" onChange={(event)=>{this.setState({moedaA_valor:event.target.value})}}></input>
               <button type ="button" value="Converter" onClick={this.converter} >Converter</button>
                <h1>{this.state.moedaB_valor}</h1>
               
            </div> 
            <div className="containerButton">
            <button className="buttonMenu" type="button" onClick={()=>{document.location.href='/'}} >Menu Principal</button>
            </div>
           </div>
        )
    }
}