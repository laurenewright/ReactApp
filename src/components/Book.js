// import React from 'react';

// const Book = props => (
//   <li className="profile">
//     <p>
//         {/* Books: {props.book.name || "Unknown"} */}
//     </p>
//   </li>
// );

// export default Book;


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
            <div className="App">
          <div className="App-intro">
            <div className="main-page">


            </div>
          </div>
        </div>
        );
      }
  }
export default Book; 