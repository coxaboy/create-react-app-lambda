import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class SaidaA extends Component {

    constructor(props) {
        super(props);
        this.state = { lista: []
        }
        this.updateProduto = this.updateProduto.bind(this);
        this.updateQuantidade = this.updateQuantidade.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        fetch('http://lospraianos-env-1.qu3skpxsmw.sa-east-1.elasticbeanstalk.com/api/materials') 
        .then(response => response.json())
        .then(resData => {
            this.setState({lista: resData.data})

        })}

    updateProduto(evento){
        this.setState({id : evento.target.value
        })
        fetch('http://lospraianos-env-1.qu3skpxsmw.sa-east-1.elasticbeanstalk.com/api/materials/' + evento.target.value)
        .then(response => response.json())
        .then(resData => {     
            this.setState({
                quantidadeAtual: (resData.data.qtdMin)})
            
            
            console.log(this.state) 
            console.log(resData.data.material) 
            console.log(resData.data.qtdMin) 
            console.log(resData.data.id)  

        })

    }
    
    updateQuantidade(evento){
        let quantidadeCerta = parseInt(this.state.quantidadeAtual,10)-parseInt(evento.target.value,10)
        console.log(quantidadeCerta)
        this.setState({quantidade: (quantidadeCerta)})
        
    }

    handleSubmit(evento){

        var iD = this.state.id
        console.log(iD)

        const requestInfo = {
            method:'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({qtdMin:this.state.quantidade})
        }
        evento.preventDefault()
        fetch('http://lospraianos-env-1.qu3skpxsmw.sa-east-1.elasticbeanstalk.com/api/materials/' + this.state.id,requestInfo)
        .then(response => response.json())
        this.setState({quantidade: 0})
        
        window.location.reload(); 
    }

    render(){
        return(
        <div className=" content center-alignment">
            <header>
                <h1>Saida de Produtos</h1>
            </header>
            <form id="form" className="pure-form" onSubmit={this.handleSubmit}>
                <fieldset>

                    <select placeholder="slecione..." id="produto" onChange={this.updateProduto} type="text" className="pure-input-1-2" >
                        
                        <option value="">selecione ...</option>
                        {
                        this.state.lista.length > 0 && this.state.lista.map(function(data) {
                        return (
                            <option value={data.id}>{data.material}</option>
                        )})
                        }        
                    </select>
                    <input id="quantidade" onChange={this.updateQuantidade} type="number" placeholder="Quantidade"/>
                   
                </fieldset>
                <button type="submit" className="pure-button pure-button-primary">Enviar</button>
            
            </form>
            <table className="pure-table">
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>Produto</th>
                                        <th>Quantidade</th>
                                    </tr>
                                </thead>
                                <tbody>{
                                        this.state.lista.length > 0 && this.state.lista.map(function(data) {
                                        return (  
                                        <tr key={data.id}>
                                            <td>{data.id}</td>
                                            <td>{data.material}</td>
                                            <td>{data.qtdMin}</td>
                                        </tr>
                                        );
                                    })
                                }
                                </tbody>
                            </table>
            <Link to="/estoque-a"><button className="pure-button">Voltar</button></Link>
        
        </div>
        )
    }}

