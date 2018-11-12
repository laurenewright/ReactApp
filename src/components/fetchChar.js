import React  from 'react';

const charEndpoint = 'https://www.anapioficeandfire.com/api/characters';
class fetchChar extends Component {
    constructor(){
      super();
      this.state = {
        profiles: [],
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
}
return(
    <div className="App">
        <CharacterList list={profiles}/>
    </div>
);
  export default fetchChar;