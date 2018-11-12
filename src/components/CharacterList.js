import React from 'react';
import Character from './Character';
// import Book from './Book';




const CharacterList = props => {
    console.log(this)
    return (
        <ul className="character-list">
            {props.list.map(c => <Character character={c}/>)}
            {/* {props.book.map(b => <Book book={b}/>)} */}
        </ul>
    );
}

export default CharacterList;