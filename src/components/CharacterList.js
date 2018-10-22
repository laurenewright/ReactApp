import React from 'react';
import Character from './Character';

const CharacterList = props => {

    const results = props.data;
    let characters = results.map(character =>
        <Character url={character.name} key={character.name}/>    
    );

    return (
        <ul className="character-list">
            {characters}
        </ul>
    );
}

export default CharacterList;