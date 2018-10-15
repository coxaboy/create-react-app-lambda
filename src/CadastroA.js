import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class CadastroA extends Component {

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
        this.setState({produto : evento.target.value})
    }

    updateQuantidade(evento){
        this.setState({quantidade: evento.target.value})
    }

    handleSubmit(evento){

        const requestInfo = {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({un:"un",material:this.state.produto,qtdMin:this.state.quantidade})
        }
        evento.preventDefault()
        fetch('http://lospraianos-env-1.qu3skpxsmw.sa-east-1.elasticbeanstalk.com/api/materials',requestInfo)
        .then(response => response.json())
        console.log(JSON.stringify({un:'un',material:this.state.produto,qtdMin:this.state.quantidade}));
        }
       
        
    
    
    render(){
        return(
            <div className='content center-alignment'>
                <header>
                    <h1>Cadastro Produtos</h1>
                </header>
                <form id="form" className="pure-form" onSubmit={this.handleSubmit}>
                <fieldset>
                    <label for="produto"><input placeholder="Produto" id="produto" onChange={this.updateProduto} type="text" className="pure-input-1-2" /> 
                    </label>
                    
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
    }

}
