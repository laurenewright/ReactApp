import React, { Component } from 'react';
import logo from '../Logo_Game_of_Thrones.png';

const Header = props => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">A directory</h1>
        </header>
    );
}

export default Header;