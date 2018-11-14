import React, { Component } from 'react';
import HouseList from './HouseList';

//fetch and render house data

const houseEndpoint = 'https://www.anapioficeandfire.com/api/houses';


class profileHouse extends Component {
  
  constructor(){
    super();
    this.state = {
      profileHouse: []
    };
  }
    componentDidMount(){
      fetch(houseEndpoint)
          .then(response => response.json())
          .then(responseData => {
            this.setState({profileHouse: responseData});
          })
          .catch(error => {
            console.log('Error fetching and parsing data', error)
          });
    }

    render(){
      let profileHouse = this.state.profileHouse;
      console.log(this.state.profileHouse);
      return(
        <div className="App">
          <div className="App-intro">
            <div className="main-page">
              <HouseList list={profileHouse}/>
            </div>
          </div>
        </div>
      );
    }
  }

export default profileHouse;