import React, { Component } from 'react';
import Booklist from './BookList';


const bookEndpoint = 'https://anapioficeandfire.com/api/books';


class profileBook extends Component {
  
  constructor(){
    super();
    this.state = {
      profileBook: []
    };
  }
    componentDidMount(){
      fetch(bookEndpoint)
          .then(response => response.json())
          .then(responseData => {
            this.setState({profileBook: responseData});
          })
          .catch(error => {
            console.log('Error fetching and parsing data', error)
          });
    }

    render(){
      let profileBook = this.state.profileBook;
      console.log(this.state.profileBook);
      return(
        <div className="App">
          <div className="App-intro">
            <div className="main-page">
              <Booklist list={profileBook}/>
            </div>
          </div>
        </div>
      );
    }
  }

export default profileBook;