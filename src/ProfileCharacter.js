import React, { Component } from 'react';
import CharacterList from './CharacterList';

//fetch and render character data


const charEndpoint = 'https://www.anapioficeandfire.com/api/characters';


class profileCharacter extends Component {
  
  constructor(){
    super();
    this.state = {
      profiles: []
    };
  }
    componentDidMount(){
      fetch(charEndpoint)
          .then(response => response.json())
          .then(responseData => {
            this.setState({profiles: responseData});
          })
          .catch(error => {
            console.log('Error fetching and parsing data', error)
          });
    }

    render(){
      let profiles = this.state.profiles;
      console.log(this.state.profiles);
      return(
        <div className="App">
          <div className="App-intro">
            <div className="main-page">
              <CharacterList list={profiles}/>
            </div>
          </div>
        </div>
      );
    }
  }

export default profileCharacter;