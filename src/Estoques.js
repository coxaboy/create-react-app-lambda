import React, { Component } from 'react';
import {Link} from 'react-router-dom';
  

class Estoques extends Component {
    render(){
        return(

            <div className="center-alignment" >

                <Link to="./estoque-f"><button class="pure-button grandzao">Fábrica</button></Link>
                <Link to="./estoque-a"><button class="pure-button grandzao">Armazém</button></Link>
            
            </div>

        )
    }
}

export default Estoques;