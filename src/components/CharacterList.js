import React from 'react';
import Character from './Character';

const CharacterList = props => {
    console.log(this)
    return (
        <ul className="character-list">
            {props.list.map(c => <Character character={c}/>)}
        </ul>
    );
}
// return(
//     <CharacterList list={profiles}/>
// )
export default CharacterList;