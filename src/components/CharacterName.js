import React, { Component } from 'react';

// const Character = props => (
//     <li className="character-wrap">
//     <p src={props.url}></p>
//     </li>
// );

const endpoint = 'https://www.anapioficeandfire.com/api/characters';

class CharacterName extends Component {
  
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
            this.setState({names: responseData.map(character => character.name) });
          })
          .catch(error => {
            console.log('Error fetching and parsing data', error)
          });
    }
    render(){
      console.log(this.state.names);
      // console.log(this.state.aliases);
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

export default CharacterName;