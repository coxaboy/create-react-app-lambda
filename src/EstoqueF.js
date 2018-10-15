import React, { Component } from 'react';
import {Link} from 'react-router-dom';
  
class EstoqueF extends Component {

    render(){
        return(
            <div id="main">
            <header className="center-alignment">
                <h1>Estoque - Fábrica</h1>
            </header>

            <div className="content">
            <div>
                <Link to="/entrada-produtos-f"><button id="botao-entrada" className="pure-button">Entrada</button></Link>
                <Link to="/saida-produtos-f"><button id="botao-saida" className="pure-button">Saida</button></Link>
                <Link to="/cadastro-f"><button id="botao-saida" className='pure-button button-secondary'>Casdastrar produtos</button></Link>
                       
            </div>

            <div>
                <table className="pure-table">
                <thead>
                    <tr>
                    <th>id</th>
                    <th>Produto</th>
                    <th>Quantidade</th>
                    </tr>
                </thead>
                <tbody>
            {/*    {    
                    this.props.lista.map(function(produto){
                        return (
                        <tr key={produto.id}>
                            <td>{produto.nome}</td>
                            <td>{produto.quantidade}</td>
                        </tr>
                        );
                        })
            }
            */}
                </tbody>
                </table>
            </div>
            </div>
            </div>
        );
    }

};
export default EstoqueF;