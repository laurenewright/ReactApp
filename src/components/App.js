import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import '../App.css';
import Header from './Header';
import CharacterList from './CharacterList';
import Booklist from './Booklist';
import Houses from './Houses';


const charEndpoint = 'https://www.anapioficeandfire.com/api/characters?page=1';

const App = () => (
    // previousPage =() => {
    //   if (this.state.currentPage !== 1)
    //   this.setState((prevState) => ({currentPage: (prevState.charEndpoint -1 )}))
    // }

    // nextPage = () => {
    //   if (this.state.currentPage + 1 < this.state.profiles)
    //   this.setState((prevState) => ({currentPage: (prevState.charEndpoint + 1)}))
    // }

    <BrowserRouter>
    <div className="container">
      <Header />
      
      <Switch>
        <Route path="/CharacterList" render={ () => <CharacterList title='CharacterList' /> } />
        <Route exact path="./BookList" component={Booklist} />
        <Route path="/Houses" component={Houses} />
      </Switch>
    </div>
  </BrowserRouter>
);

    // render(){
    //   let profiles = this.state.profiles;
    //   // let books = this.state.books;
    //   console.log(this.state.profiles);
    //   console.log(this.state.books);
    //   return(
    //     <div className="App">
    //         <Header />
    //       <div className="App-intro">
    //         <div className="main-page">
    //           <button onClick={this.previousPage}>Previous Page</button>
    //           <button onClick={this.nextPage}>Next Page</button>
    //           <CharacterList list={profiles}/>
    //         </div>
    //       </div>
    //     </div>


export default App;