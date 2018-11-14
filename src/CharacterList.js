import React from 'react';
import Character from './Character';

//map through the character data array

const CharacterList = props => {
    console.log(this)
    return (
        <ul className="character-list">
            {props.list.map(c => <Character character={c}/>)}
        </ul>
    );
}

export default CharacterList;