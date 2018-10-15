import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Login extends Comment{

    render(){
        return(
            <div className="login-box">
            <h1 className="header-logo">Los Prainos</h1>
            <form>
                <input type="text"></input>
                <input type="password"></input>
                <input type="submit">Entrar</input>
            </form>


            </div>
        )
    }


}