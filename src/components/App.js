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
import Home from './Home';


const App = () => (
    <BrowserRouter>
    <div className="container">
      <Header />
      
      <Switch className = "main-page">
        <Route exact path="/" component={Home} />
        <Route path="/CharacterList" component={CharacterList}/>
        <Route path="/BookList" component={Booklist} />
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