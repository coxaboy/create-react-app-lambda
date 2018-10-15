import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class EstoqueA extends Component {

    constructor(props){
        super(props);
        this.state = {
            lista: [],
        }}      

    componentDidMount(){
        fetch('http://lospraianos-env-1.qu3skpxsmw.sa-east-1.elasticbeanstalk.com/api/materials')
        .then(response => response.json())
        .then(resData => {
            this.setState({lista: resData.data})
        })      
    }

    render(){
        return (  
            <div>
                <div id="main">
                    <header className="center-alignment">
                        <h1>Estoque - Armazém</h1>
                    </header>

                    <div className="content">
                        <div>
                            <Link to="/entrada-produtos-a"><button id="botao-entrada" className="pure-button">Entrada</button></Link>
                            <Link to="/saida-produtos-a"><button id="botao-saida" className="pure-button">Saida</button></Link>
                            <Link to="/cadastro-a"><button id="botao-saida" className='pure-button button-secondary'>Casdastrar produtos</button></Link>
                       
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
                        </div>
                    </div>
                </div>
            </div>
            )}}

export default EstoqueA;