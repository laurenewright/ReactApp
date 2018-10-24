import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import CharacterList from './CharacterList';
// import CharacterList from './CharacterList';


const endpoint = 'https://www.anapioficeandfire.com/api/characters';



class App extends Component {
  
  constructor(){
    super();
    this.state = {
      profiles: []
    };
  }
    componentDidMount(){
      fetch(endpoint)
          .then(response => response.json())
          .then(responseData => {
            this.setState({profiles: responseData});
          })
          .catch(error => {
            console.log('Error fetching and parsing data', error)
          });
    }
    render(){
      console.log(this.state.profiles);
      // console.log(this.state.aliases);
      return(
        <div className="App">
          <p className="App-intro">
              <Header />
            <div className="main-page">
              <CharacterList />
            </div>
          </p>
        </div>
      );
    }
  }

export default App;