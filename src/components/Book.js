// import React from 'react';

// // const bookEndpoint = 'https://anapioficeandfire.com/api/books';

// const Book = props => (
//   <li className = "Book">
//     <p>{props.BookList.name}</p>
//   </li>
// );
// export default Book; 

import React, { Component } from 'react';
import BookList from './BookList';

const bookEndpoint = 'https://anapioficeandfire.com/api/books';

class Book extends Component {
  
  constructor(){
    super();
    this.state = {
      book: [],
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
      let books = this.state.book;
      console.log(this.state.book);
      return(
        <div className="App">
          <div className="App-intro">
            <div className="main-page">
            {books}
            </div>
          </div>
        </div>
      );
    }
  }

export default Book;