import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';
import './css/main.css';
import {Link} from 'react-router-dom';
import './css/index.css';

class App extends Component {


  render() {
    return (
      <div id="layout">
        <a href="#menu" id="menuLink " className="menu-link">
          <span></span>
        </a>

        <div id="menu">
          <div className="pure-menu">
            <a href="#" className="pure-menu-heading" >Los Praianos</a>

            <ul className="pure-menu-list">
                <li className="pure-menu-item"><Link to="/" className="pure-menu-link">Home</Link></li>
                
                <li className="pure-menu-item"><Link to="/estoques" className="pure-menu-link">Estoque</Link></li>
                
                <li className="pure-menu-item"><Link to="/log" className="pure-menu-link">Log</Link></li>
            </ul>
          </div>
        </div> 

        <div id="main wrap">
          {this.props.children}
        </div> 

      </div>
    );
  }
}

export default App;
