import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import '../App.css';
import Header from './Header';
import CharacterList from './CharacterList';
import Books from './Book';


const charEndpoint = 'https://www.anapioficeandfire.com/api/characters?page=1';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      profiles: [],
      book: []
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
    previousPage =() => {
      if (this.state.currentPage !== 1)
      this.setState((prevState) => ({currentPage: (prevState.charEndpoint -1 )}))
    }

    nextPage = () => {
      if (this.state.currentPage + 1 < this.state.profiles)
      this.setState((prevState) => ({currentPage: (prevState.charEndpoint + 1)}))
    }

    // componentDidMount(){
    //   fetch(bookEndpoint)
    //       .then(response => response.json())
    //       .then(responseData => {
    //         this.setState({books: responseData});
    //       })
    //       .catch(error => {
    //         console.log('Error fetching and parsing data', error)
    //       });
    // }
    render(){
      let profiles = this.state.profiles;
      // let books = this.state.books;
      console.log(this.state.profiles);
      console.log(this.state.books);
      return(
        <BrowserRouter>
        <div className="App">
            <Header />
          <div className="App-intro">
            <div className="main-page">
              <button onClick={this.previousPage}>Previous Page</button>
              <button onClick={this.nextPage}>Next Page</button>
              {/* <Route path="/Books" Component={Books} /> */}
              <CharacterList list={profiles}/>
            </div>
          </div>
        </div>
        </BrowserRouter>
      );
    }
  }

export default App;