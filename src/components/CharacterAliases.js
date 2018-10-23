import React, { Component } from 'react';

const endpoint = 'https://www.anapioficeandfire.com/api/characters';

class CharacterAliases extends Component {
  
    constructor(){
      super();
      this.state = {
        aliases: []
      };
    }
    componentDidMount(){
      fetch(endpoint)
          .then(response => response.json())
          .then(responseData => {
            this.setState({aliases: responseData.map(character => character.aliases) });
          })
          .catch(error => {
            console.log('Error fetching and parsing data', error)
          });
    }
    render(){
        // console.log(this.state.names);
        console.log(this.state.aliases);
        return(
          <div className="App">
            <p className="App-intro">
              <div className="main-page">
              </div>
            </p>
          </div>
        );
      }
  }
export default CharacterAliases;