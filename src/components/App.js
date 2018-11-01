import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import CharacterList from './CharacterList';
// import Book from './Book';


const charEndpoint = 'https://www.anapioficeandfire.com/api/characters';
// const bookEndpoint = 'https://anapioficeandfire.com/api/books';


class App extends Component {
  
  constructor(){
    super();
    this.state = {
      profiles: [],
      currentPage: []
    };
    // this.state = {
    //   books: []
    // };
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
      this.setState((prevState) => ({currentPage: (prevState.currentPage -1 )}))
    }

    nextPage = () => {
      if (this.state.currentPage + 1 < this.state.App)
      this.setState((prevState) => ({currentPage: (prevState.currentPage + 1)}))
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
      console.log(this.state.profiles);
      return(
        <div className="App">
            <Header />
          <div className="App-intro">
            <div className="main-page">
              <button onClick={this.previousPage}>Previous Page</button>
              <button onClick={this.nextPage}>Next Page</button>
              <CharacterList list={profiles}/>
              {/* <Book booklist={books}/> */}
            </div>
          </div>
        </div>
      );
    }
  }

export default App;