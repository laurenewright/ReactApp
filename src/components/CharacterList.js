import React from 'react';
import CharacterAliases from './CharacterAliases';
import CharacterName from './CharacterName';

const CharacterList = props => {
    return (
        <ul className="character-list">
            <CharacterAliases />
            <CharacterName /> 
        </ul>
    );
}
export default CharacterList;