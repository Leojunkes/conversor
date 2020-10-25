import React, {Component} from 'react';
import './conversorEUR_BRL.css';

const moedaA ="EUR";
const moedaB ="BRL";
export default class Conversor1 extends Component{
    
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
            <div className="conversor1">
                <h2>Euro</h2>
               <h3>{moedaA} para {moedaB}</h3>
               <input type="text" onChange={(event)=>{this.setState({moedaA_valor:event.target.value})}}></input>
               <button type ="button" value="Converter" onClick={this.converter} >Converter</button>
                <h1>{this.state.moedaB_valor}</h1>
               
            </div> 
            <div className="containerButton2">
            <button className="buttonMenu2" type="button" onClick={()=>{document.location.href='/'}} >Menu Principal</button>
            </div>
           </div>
        )
    }
}