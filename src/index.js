import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/login.css';
import App from './App';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import EstoqueA from './EstoqueA';
import Home from './Home';
import EntradaA from './EntradaA';
import SaidaA from './SaidaA';
import Estoques from './Estoques';
import EntradaF from './EntradaF';
import SaidaF from './SaidaF';
import EstoqueF from './EstoqueF';
import CadastroA from './CadastroA';
import CadastroF from './CadastroF';
import './css/main.css';

ReactDOM.render((
    
    <Router>
        <App>
            <Switch>

                <Route exact path="/" component={Home}/>
                <Route path="/estoque-a" component={EstoqueA}/>
                <Route path="/entrada-produtos-a" component={EntradaA}/>
                <Route path="/saida-produtos-a" component={SaidaA}/>
                <Route path="/estoques" component={Estoques}/>
                <Route path="/estoque-f" component={EstoqueF}/>
                <Route path="/entrada-produtos-f" component={EntradaF}/>
                <Route path="/saida-produtos-f" component={SaidaF}/>
                <Route path="/cadastro-a" component={CadastroA}/>
                <Route path="/cadastro-f" component={CadastroF}/>
            
            </Switch>,
        </App>
    </Router>

), document.getElementById('root'));
