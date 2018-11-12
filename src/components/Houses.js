import React, { Component } from 'react';
import HouseList from './HouseList';

const houseEndpoint = 'https://anapioficeandfire.com/api/houses';

class Houses extends Component {
  
  constructor(){
    super();
    this.state = {
      house: [],
    };
  }
componentDidMount(){
  fetch(houseEndpoint)
      .then(response => response.json())
      .then(responseData => {
        this.setState({houses: responseData});
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error)
      });
}
    render(){
      let houses = this.state.house;
      console.log(this.state.house);
      return(
        <div className="App">
          <div className="App-intro">
            <div className="main-page">
            {houses}
            </div>
          </div>
        </div>
      );
    }
  }

export default Houses;