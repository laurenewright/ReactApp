import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Logo_Game_of_Thrones.png';

const Header = () => (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">A directory</h1>
            <ul className="main-nav">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/CharacterList">Character List</NavLink></li>
                <li><NavLink to="/Houses">Houses</NavLink></li>
                <li><NavLink to="/Books">Books</NavLink></li>
            </ul>
    </header>
);

export default Header;