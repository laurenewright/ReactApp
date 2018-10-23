import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import CharacterList from './CharacterList';




export default class App extends Component {
  
  constructor(){
    super();
    this.state = {
      aliases: []
    };
    this.state = {
      names: []
    };
  }

  // componentDidMount(){
  //   fetch(endpoint)
  //       .then(response => response.json())
  //       .then(responseData => {
  //         this.setState({names: responseData.map(character => character.name) });
  //       })
  //       .catch(error => {
  //         console.log('Error fetching and parsing data', error)
  //       });
  // }
  // componentDidMount(){
  //   fetch(endpoint)
  //       .then(response => response.json())
  //       .then(responseData => {
  //         this.setState({aliases: responseData.map(character => character.aliases) });
  //       })
  //       .catch(error => {
  //         console.log('Error fetching and parsing data', error)
  //       });
  // }
  render(){
    // console.log(this.state.names);
    // console.log(this.state.aliases);
    return(
      <div className="App">
        <Header />
        <p className="App-intro">
          <div className="main-page">
          <CharacterList />
          </div>
        </p>
      </div>
    );
  }
}