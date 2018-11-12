import React, { Component } from 'react';
// import House from './House';

const bookEndpoint = 'https://anapioficeandfire.com/api/books';

class HouseList extends Component {
  
  constructor(){
    super();
    this.state = {
      house: [],
    };
  }
componentDidMount(){
  fetch(bookEndpoint)
      .then(response => response.json())
      .then(responseData => {
        this.setState({books: responseData});
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

export default HouseList;