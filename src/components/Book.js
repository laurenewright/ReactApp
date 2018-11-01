import React, { Component } from 'react';

const bookEndpoint = 'https://anapioficeandfire.com/api/books';

class Book extends Component {
  
    constructor(){
      super();
      this.state = {
        books: []
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
        console.log(this.state.books);
        return(
          <ul className="book-list">
            {/* {props.book.map(b => <Book book={b}/>)} */}
          </ul>
        );
      }
  }
export default Book; 