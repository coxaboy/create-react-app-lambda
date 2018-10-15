import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class CadastroF extends Component {
    
    render(){
        return(
            <div className='center-alignment'>
                <header>
                    <h1>Cadastro Produtos</h1>
                </header>
                <Link to="/estoque-f"><button className="pure-button">Voltar</button></Link>
                <form className="pure-form">
                    <input className="pure-input-1-2"></input>
                    <input></input>
                </form>

            </div>
        )
    }


}