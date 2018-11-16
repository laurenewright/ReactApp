import React, { Component } from 'react';
import logo from './Logo_Game_of_Thrones.png';
import './App.css';
import profileCharacter from './ProfileCharacter';
import profileHouse from './ProfileHouse';
import profileBook from './ProfileBook';
import { NavLink } from 'react-router-dom';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
                <ul className="main-nav">
                  <li><NavLink to="/ProfileCharacter">Characters</NavLink></li>
                  <li><NavLink to="/ProfileHouse">Houses</NavLink></li>
                  <li><NavLink to="/ProfileBook">Books</NavLink></li>
                </ul>
            </header>
                <Switch className = "main-page">
                  <Route path="/ProfileCharacter" component={profileCharacter}/>
                  <Route path="/ProfileBook" component={profileBook} />
                  <Route path="/ProfileHouse" component={profileHouse} />
                </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
