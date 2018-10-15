import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class EntradaF extends Component {

    constructor(props) {
        super(props);
        this.state = {
          produto:'',
          quantidade:0
        }
        this.updateProduto = this.updateProduto.bind(this);
        this.updateQuantidade = this.updateQuantidade.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    updateProduto(event){
    this.setState({produto : event.target.value})
    }

    updateQuantidade(event){
        this.setState({quantidade: event.target.value})
    }

    handleSubmit(){
        console.log(this.state.produto)
        console.log(this.state.quantidade)
    }

    render(){
        return(
        
        <div className="center-alignment">

            <header>
                <h1>Entrada de Produtos</h1>
            </header>

            <form id="form" className="pure-form" onSubmit={this.handleSubmit}>
                <fieldset>
                    
                    <input id="produto" onChange={this.updateProduto} type="text" className="pure-input-1-2" placeholder="Produto"/>
                    <input id="quantidade" onChange={this.updateQuantidade} type="number" placeholder="Quantidade"/>
                   
                </fieldset>
                <button type="submit" className="pure-button pure-button-primary">Enviar</button>

            </form>
            <Link to="/estoque-f"><button className="pure-button">Voltar</button></Link>
        </div>
        
        )}
                   
    }

