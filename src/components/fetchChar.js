import React from 'react';

const charEndpoint = 'https://www.anapioficeandfire.com/api/characters?page=1';
const fetchChar = () => = {
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
      return(
        let profiles = this.state.profiles;
        return(
            <div className="App">
                <CharacterList list={profiles}/>
            </div>
        );
}
  export default fetchChar;