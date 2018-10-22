import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import CharacterList from './CharacterList';
import Character from './Character';


const endpoint = 'https://www.anapioficeandfire.com/api/characters/2';

export default class App extends Component {
  
  constructor(){
    super();
    this.state = {
      names: []
    };
  }

  componentDidMount(){
    fetch(endpoint)
        .then(response => response.json())
        .then(responseData => {
          this.setState({names: responseData.name});
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error)
        });
}
  render(){
    console.log(this.state.names);
    return(
      <div className="App">
        <Header />
        <p className="App-intro">
          <div className="main-page">
            <Character />
          </div>
        </p>
      </div>
    );
  }
}